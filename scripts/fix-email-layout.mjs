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

  html = html.replace(/apoorva@<wbr>sanohealth\.co\.in/g, 'apoorva@sanohealth.co.in');
  html = html.replace(/soham\.kakade@<wbr>ewan\.co\.in/g, 'soham.kakade@ewan.co.in');

  html = html.replace(
    /<div>\s*\n\s*<h4 class="text-white font-semibold mb-5">Get in Touch<\/h4>/g,
    '<div class="footer-contact-col">\n          <h4 class="text-white font-semibold mb-5">Get in Touch</h4>'
  );

  if (html !== before) {
    fs.writeFileSync(f, html);
    console.log('fixed', path.relative(root, f));
  }
}
