import fs from 'fs';
import path from 'path';

const pagesDir = new URL('../app/pages', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const blogs = fs.readdirSync(pagesDir).filter(f => f.startsWith('blog-') && f.endsWith('.html') && !f.includes('.codex-backup'));

for (const file of blogs) {
  const fp = path.join(pagesDir, file);
  let html = fs.readFileSync(fp, 'utf8');

  html = html.replace(/<style>[\s\S]*?<\/style>\s*(?=<\/head>)/, '  <link rel="stylesheet" href="../style/blog.css">\n');

  html = html.replace(
    /\s*<script>\s*document\.querySelectorAll\('\.openConsultantModal'\)[\s\S]*?<\/script>\s*<script>\s*\(function\(\) \{[\s\S]*?<\/script>\s*<\/body>/,
    '\n  <script src="../script/blog.js"></script>\n</body>'
  );

  fs.writeFileSync(fp, html);
  console.log('updated', file);
}

console.log('Done:', blogs.length, 'blog pages');
