import fs from 'fs';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      walk(p, files);
    } else if (ent.name.endsWith('.html') && !ent.name.includes('.codex-backup')) {
      files.push(p);
    }
  }
  return files;
}

for (const f of walk(root)) {
  let html = fs.readFileSync(f, 'utf8');
  const before = html;

  html = html.replace(/(<link rel="stylesheet" href="[^"]+">)\s{2,}(<link rel="stylesheet")/g, '$1\n  $2');
  html = html.replace(/(<link rel="stylesheet" href="[^"]+">)\s*(<link rel="stylesheet" href="\.\.\/style\/blog\.css">)/g, '$1\n  $2');

  const headerBlock = html.match(/<header id="siteHeader"[\s\S]*?<\/header>/);
  if (headerBlock) {
    const fixed = headerBlock[0].replace(
      /<img loading="lazy" decoding="async" src="([^"]*logo\.png)"([^>]*)>/g,
      '<img src="$1"$2>'
    );
    html = html.replace(headerBlock[0], fixed);
  }

  const mobileMenuBlock = html.match(/<div id="mobileMenu"[\s\S]*?<div class="p-6 border-b[\s\S]*?<\/div>/);
  if (mobileMenuBlock) {
    const fixed = mobileMenuBlock[0].replace(
      /<img loading="lazy" decoding="async" src="([^"]*logo\.png)"([^>]*)>/g,
      '<img src="$1"$2>'
    );
    html = html.replace(mobileMenuBlock[0], fixed);
  }

  if (html !== before) {
    fs.writeFileSync(f, html);
    console.log('cleaned', path.relative(root, f));
  }
}
