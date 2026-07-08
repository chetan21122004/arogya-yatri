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

const preconnect = `<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  `;
let fontUpdates = 0;
let lazyUpdates = 0;

for (const f of walk(root)) {
  let c = fs.readFileSync(f, 'utf8');
  const orig = c;

  if (c.includes('fonts.googleapis.com') && !c.includes('rel="preconnect" href="https://fonts.googleapis.com"')) {
    c = c.replace(
      /(<link href="https:\/\/fonts\.googleapis\.com[^>]+>)/,
      preconnect + '$1'
    );
    fontUpdates++;
  }

  c = c.replace(/<img(?![^>]*\bloading=)([^>]*?)>/gi, (match, attrs) => {
    if (/hero|poster|readProgress|#siteHeader|mobileMenu/i.test(match)) return match;
    if (/h-64|h-\[420px\]|max-h-\[420px\]|blog-medical-visa-featured|object-cover rounded-2xl shadow-sm/i.test(match)) return match;
    lazyUpdates++;
    return `<img loading="lazy" decoding="async"${attrs}>`;
  });

  if (c !== orig) fs.writeFileSync(f, c);
}

console.log('font preconnect updates:', fontUpdates);
console.log('lazy img tags added:', lazyUpdates);
