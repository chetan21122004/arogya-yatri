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
  if (!html.includes('cdn.tailwindcss.com')) continue;

  const rel = path.relative(path.dirname(f), path.join(root, 'app/style/tailwind.css')).replace(/\\/g, '/');
  const link = `<link rel="stylesheet" href="${rel}">`;

  html = html.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>\s*<script>[\s\S]*?tailwind\.config[\s\S]*?<\/script>\s*/g,
    link + '\n  '
  );

  fs.writeFileSync(f, html);
  console.log('fixed', path.relative(root, f));
}
