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

const emailDisplay = {
  'apoorva@sanohealth.co.in': 'apoorva@<wbr>sanohealth.co.in',
  'soham.kakade@ewan.co.in': 'soham.kakade@<wbr>ewan.co.in',
};

for (const f of walk(root)) {
  let html = fs.readFileSync(f, 'utf8');
  const before = html;

  html = html.replace(
    /class="hover:text-white transition break-all">(apoorva@sanohealth\.co\.in|soham\.kakade@ewan\.co\.in)/g,
    (_, email) => `class="footer-contact-email hover:text-white transition">${emailDisplay[email]}`
  );

  html = html.replace(
    /class="text-xs sm:text-sm md:text-base font-medium text-slate-900 hover:text-teal-500 transition break-all px-2">\s*(apoorva@sanohealth\.co\.in|soham\.kakade@ewan\.co\.in)/g,
    (_, email) => `class="contact-email-link text-xs sm:text-sm md:text-base font-medium text-slate-900 hover:text-teal-500 transition px-2">${emailDisplay[email]}`
  );

  // FAQ inline email (no break-all class)
  html = html.replace(
    /(<i class='bx bx-envelope[^>]*><\/i>\s*)(apoorva@sanohealth\.co\.in)/g,
    `$1${emailDisplay['apoorva@sanohealth.co.in']}`
  );

  if (html !== before) {
    fs.writeFileSync(f, html);
    console.log('fixed', path.relative(root, f));
  }
}
