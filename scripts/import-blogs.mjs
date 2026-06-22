import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PAGES = path.join(ROOT, "app/pages");
const NEXT_HTML = path.resolve(ROOT, "../arogyanext/content/html");

const NEW_BLOG_KEYS = [
  "blog-how-much-can-i-save-surgery-india",
  "blog-best-hospitals-india-international-patients",
  "blog-which-indian-city-medical-procedure",
  "blog-travel-insurance-medical-tourism-india",
  "blog-recovery-time-surgery-india",
  "blog-combine-treatment-vacation-india",
  "blog-quality-of-doctors-india-vs-home-country",
];

const IMAGE_FALLBACK = {
  "surgery-cost-savings-india.jpg": "../../src/images/blog-indian-hospital-featured.png",
  "best-hospitals-india.jpg": "../../src/images/hospital.webp",
  "indian-city-medical-procedure.jpg": "../../src/images/india.webp",
  "travel-insurance-medical-tourism.jpg": "../../src/images/plane-bg.jpg",
  "recovery-time-surgery-india.jpg": "../../src/images/doctor-work.webp",
  "combine-treatment-vacation-india.jpg": "../../src/images/auruyveda.webp",
  "doctor-quality-india.jpg": "../../src/images/doctor-page-hero.png",
};

const ALL_BLOGS = [
  {
    file: "blog-how-much-can-i-save-surgery-india.html",
    category: "Cost & Savings Guide",
    cardCategory: "Cost Guide",
    title: "How Much Can I Save on Surgery by Going to India?",
    cardTitle: "How Much Can I Save on Surgery in India?",
    description:
      "Real procedure cost comparisons across cardiac, orthopaedic, cancer, and fertility care — with no padding.",
    excerpt: "Real procedure cost comparisons across cardiac, orthopaedic, cancer, and fertility care.",
    image: "../../src/images/blog-indian-hospital-featured.png",
    imageAlt: "Cost comparison for surgery savings in India versus Western countries",
    readTime: "6 min read",
  },
  {
    file: "blog-best-hospitals-india-international-patients.html",
    category: "Hospital Guide",
    cardCategory: "Hospital Guide",
    title: "What Are the Best Hospitals in India for International Patients?",
    cardTitle: "Best Hospitals in India for International Patients",
    description:
      "How to read hospital quality, what accreditation means, and what the selection process should actually look like.",
    excerpt: "What accreditation means and how to choose the right hospital for your case.",
    image: "../../src/images/hospital.webp",
    imageAlt: "Modern accredited hospital in India for international patients",
    readTime: "6 min read",
  },
  {
    file: "blog-which-indian-city-medical-procedure.html",
    category: "Destination Guide",
    cardCategory: "Destination",
    title: "Which Indian City Should I Choose for My Medical Procedure?",
    cardTitle: "Which Indian City Should I Choose?",
    description:
      "The best city depends on your procedure, stay length, and what you want beyond the hospital. Here's how to decide.",
    excerpt: "Chennai, Mumbai, Delhi, Hyderabad, Bengaluru, or Pune — matched to your procedure.",
    image: "../../src/images/india.webp",
    imageAlt: "Indian city for medical treatment",
    readTime: "5 min read",
  },
  {
    file: "blog-travel-insurance-medical-tourism-india.html",
    category: "Travel & Insurance Guide",
    cardCategory: "Insurance",
    title: "Do I Need Travel Insurance for Medical Tourism in India?",
    cardTitle: "Travel Insurance for Medical Tourism in India",
    description:
      "What travel insurance covers for medical tourists, what it doesn't, and what to check before you buy.",
    excerpt: "What it covers, what it doesn't, and what to check before you buy.",
    image: "../../src/images/plane-bg.jpg",
    imageAlt: "Travel insurance for medical tourism in India",
    readTime: "5 min read",
  },
  {
    file: "blog-recovery-time-surgery-india.html",
    category: "Recovery Guide",
    cardCategory: "Recovery",
    title: "How Long Does Recovery Take If I Get Surgery in India?",
    cardTitle: "Recovery Time After Surgery in India",
    description:
      "A realistic procedure-by-procedure breakdown of time in India and time to full recovery.",
    excerpt: "Procedure-by-procedure recovery timelines and fit-to-fly guidance.",
    image: "../../src/images/doctor-work.webp",
    imageAlt: "Patient recovery after surgery in India",
    readTime: "5 min read",
  },
  {
    file: "blog-combine-treatment-vacation-india.html",
    category: "Travel & Recovery Guide",
    cardCategory: "Travel",
    title: "Can I Combine My Medical Treatment with a Vacation in India?",
    cardTitle: "Combining Treatment with a Vacation in India",
    description:
      "Yes — and for many patients it's one of the unexpectedly good parts. Here's how to do it safely.",
    excerpt: "How to add gentle travel to your recovery without compromising your treatment.",
    image: "../../src/images/auruyveda.webp",
    imageAlt: "Combining medical treatment with travel in India",
    readTime: "5 min read",
  },
  {
    file: "blog-quality-of-doctors-india-vs-home-country.html",
    category: "Patient Trust & Safety Guide",
    cardCategory: "Trust & Safety",
    title: "What's the Quality of Doctors in Indian Hospitals Compared to My Country?",
    cardTitle: "Quality of Doctors in India vs. Your Home Country",
    description:
      "An honest look at training, accreditation, case volume, and what to verify before you travel.",
    excerpt: "Training, accreditation, and how to verify surgeon credentials before you travel.",
    image: "../../src/images/doctor-page-hero.png",
    imageAlt: "Specialist doctor consulting an international patient in India",
    readTime: "6 min read",
  },
  {
    file: "blog-india-medical-visa-guide.html",
    category: "Travel & Visa Guide",
    cardCategory: "Travel & Visa Guide",
    title: "How to Get an Indian Medical Visa: A Step-by-Step Guide for Patients and Families",
    cardTitle: "How to Get an Indian Medical Visa: A Step-by-Step Guide for Patients and Families",
    description:
      "Everything you need about India's e-Medical Visa - documents, steps, timelines, and the mistakes to avoid.",
    excerpt:
      "Everything international patients and families need to know about India's e-Medical Visa, documents, timelines, and common mistakes.",
    image: "../../src/images/blog-medical-visa-featured.png",
    imageAlt: "Indian medical visa documents with passport and healthcare travel paperwork",
    readTime: "5 min read",
  },
  {
    file: "blog-cancer-treatment-india.html",
    category: "Oncology",
    cardCategory: "Oncology",
    title: "Cancer Treatment in India: What International Patients Need to Know",
    cardTitle: "Cancer Treatment in India: What International Patients Need to Know",
    description:
      "A practical guide to cancer treatment in India - costs, available treatments, how to choose a hospital, and what the journey looks like.",
    excerpt:
      "A practical guide to cancer treatment in India, including costs, available treatments, hospital selection, and the patient journey.",
    image: "../../src/images/blog-cancer-treatment-featured.png",
    imageAlt: "Oncology doctor consulting an international patient for cancer treatment in India",
    readTime: "5 min read",
  },
  {
    file: "blog-ivf-fertility-india.html",
    category: "Fertility & IVF",
    cardCategory: "Fertility & IVF",
    title: "IVF in India: An Honest Guide for Couples Considering Treatment Abroad",
    cardTitle: "IVF in India: An Honest Guide for Couples Considering Treatment Abroad",
    description:
      "An honest guide to IVF in India, covering costs, success rates, clinic quality, legal notes, and practical travel planning.",
    excerpt:
      "An honest guide to IVF in India, covering costs, success rates, clinic quality, legal notes, and practical travel planning.",
    image: "../../src/images/blog-ivf-fertility-featured.png",
    imageAlt: "Fertility specialist discussing IVF treatment options with a couple in India",
    readTime: "5 min read",
  },
  {
    file: "blog-heal-in-india-program-guide.html",
    category: "Medical Tourism",
    cardCategory: "Medical Tourism",
    title: "Heal in India Program: Affordable Medical Tourism Guide",
    cardTitle: "Heal in India Program: Affordable Medical Tourism Guide",
    description:
      "Discover how the Heal in India Program helps international patients access NABH accredited hospitals with major cost savings and zero waiting.",
    excerpt:
      "How the Heal in India Program helps international patients access NABH accredited hospitals with major cost savings, fast visas, and end-to-end care coordination.",
    image: "../../src/images/blog-indian-hospital-featured.png",
    imageAlt: "Professional Indian hospital facility for international medical tourism patients",
    readTime: "5 min read",
  },
];

function fixContent(html) {
  let out = html;
  out = out.replace(/src="\/images\/blog\/([^"]+)"/g, (_, img) => {
    const fallback = IMAGE_FALLBACK[img] || "../../src/images/blog-indian-hospital-featured.png";
    return `src="${fallback}"`;
  });
  const blogSlugs = ALL_BLOGS.map((b) => b.file.replace(".html", ""));
  for (const slug of blogSlugs) {
    const short = slug.replace(/^blog-/, "");
    out = out.replaceAll(`href="/blog/${short}"`, `href="${slug}.html"`);
  }
  out = out.replaceAll('href="/about"', 'href="about.html"');
  out = out.replaceAll('href="/treatments"', 'href="treatments.html"');
  out = out.replaceAll('href="/destinations"', 'href="destinations.html"');
  out = out.replaceAll('href="/news"', 'href="news.html"');
  return out;
}

function extractBodyFromNext(key) {
  const raw = fs.readFileSync(path.join(NEXT_HTML, `${key}.html`), "utf8");
  return fixContent(raw.trim());
}

function pageStyles() {
  return `<style>
    body { font-family: Lexend, sans-serif; }
    article h2, article .text-2xl { font-size: 1.75rem; line-height: 1.25; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1rem; color: #0f172a; }
    article h3, article .text-xl { font-size: 1.1rem; line-height: 1.4; font-weight: 700; margin-top: 1.5rem; margin-bottom: .5rem; color: #0f172a; }
    article p, article .text-slate-700 { margin-bottom: 1rem; color: #334155; line-height: 1.85; }
    article ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; color: #334155; line-height: 1.85; }
    article table { margin: 1.25rem 0; }
    article section { margin-bottom: 1.5rem; }
  </style>`;
}

function moreArticles(currentFile) {
  const others = ALL_BLOGS.filter((b) => b.file !== currentFile);
  const cards = others
    .map(
      (b) => `        <a href="${b.file}" class="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition hover:shadow-lg hover:-translate-y-0.5">
          <div class="aspect-[16/10] bg-slate-100 overflow-hidden">
            <img src="${b.image}" alt="${b.imageAlt}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
          </div>
          <div class="p-5">
            <p class="text-xs uppercase tracking-wide text-teal-600 font-medium mb-2">${b.cardCategory}</p>
            <h3 class="text-base font-semibold text-slate-900 leading-snug">${b.cardTitle}</h3>
          </div>
        </a>`,
    )
    .join("\n");

  return `    <section class="mt-12">
      <h2 class="text-2xl font-semibold text-slate-900 mb-6">More articles</h2>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
${cards}
      </div>
    </section>`;
}

function buildNewPage(blog, bodyHtml) {
  const slug = blog.file.replace(".html", "");
  const ogImage = blog.image.replace("../../", "https://www.arogyayatri.com/");
  const sectionMatch = bodyHtml.match(/<p class="text-xs uppercase[^>]*>([^<]+)<\/p>/);
  const h1Match = bodyHtml.match(/<h1 class="text-3xl[^>]*>([\s\S]*?)<\/h1>/);
  const introMatch = bodyHtml.match(/<p class="text-slate-600 mb-10">([\s\S]*?)<\/p>/);
  const category = sectionMatch?.[1]?.trim() || blog.category;
  const title = h1Match?.[1]?.replace(/\s+/g, " ").trim() || blog.title;
  const intro = introMatch?.[1]?.replace(/\s+/g, " ").trim() || blog.description;

  let inner = bodyHtml;
  inner = inner.replace(/<p class="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">[^<]+<\/p>\s*/, "");
  inner = inner.replace(/<h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6">[\s\S]*?<\/h1>\s*/, "");
  inner = inner.replace(/<p class="text-slate-600 mb-10">[\s\S]*?<\/p>\s*/, "");
  inner = inner.replace(/<img[\s\S]*?class="w-full rounded-2xl shadow mb-10"\s*>\s*/, "");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${blog.title} | Sano Healthcare and Tourism</title>
  <meta name="description" content="${blog.description}">
  <link rel="canonical" href="https://www.arogyayatri.com/app/pages/${blog.file}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${blog.title}">
  <meta property="og:description" content="${blog.description}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  ${pageStyles()}
</head>
<body class="bg-slate-50 text-slate-900">
  <main class="max-w-4xl mx-auto px-6 py-12">
    <a href="news.html" class="inline-flex items-center text-sm text-teal-700 font-medium mb-8">&larr; Back to News & Blogs</a>
    <p class="text-xs uppercase tracking-widest text-teal-600 font-semibold mb-4">${category}</p>
    <h1 class="text-3xl md:text-5xl font-bold leading-tight mb-6">${title}</h1>
    <p class="text-slate-600 text-lg mb-8">${intro}</p>
    <img src="${blog.image}" alt="${blog.imageAlt}" class="w-full rounded-2xl shadow mb-10">
    <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-10">
${inner}
      <section class="bg-teal-50 border border-teal-100 rounded-2xl p-6 mt-10">
        <h2 class="!mt-0 text-2xl font-semibold text-slate-900 mb-3">Start With Sano</h2>
        <p class="text-slate-700 mb-4">Share your reports or questions with Sano Healthcare and Tourism for a free consultation and personalised treatment guidance.</p>
        <a href="https://forms.gle/Snkvg8H7byeD8cXj7" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-full bg-teal-600 text-white px-6 py-3 font-medium hover:bg-teal-700 transition">Book a Free Consultation</a>
      </section>
    </div>

${moreArticles(blog.file)}
  </main>
</body>
</html>
`;
}

function newsCard(blog) {
  return `          <article
            class="group bg-white rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="relative aspect-[16/10] bg-slate-100 overflow-hidden">
              <img src="${blog.image}" alt="${blog.imageAlt}"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span class="uppercase tracking-wide text-teal-600 font-medium">${blog.cardCategory}</span>
                <span>•</span>
                <span>${blog.readTime}</span>
              </div>
              <h3 class="text-lg font-semibold text-slate-900 leading-snug mb-3">
                ${blog.cardTitle}
              </h3>
              <p class="text-sm text-slate-600 leading-relaxed mb-5">
                ${blog.excerpt}
              </p>
              <a href="${blog.file}" class="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
                Read article
                <i class="bx bx-right-arrow-alt text-lg"></i>
              </a>
            </div>
          </article>`;
}

function updateExistingMoreArticles(file) {
  const filePath = path.join(PAGES, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, "utf8");
  html = html.replace(
    /\s*<section class="mt-12">[\s\S]*?<\/section>\s*(?=<\/main>)/,
    `\n\n${moreArticles(file)}\n`,
  );
  fs.writeFileSync(filePath, html);
}

for (const key of NEW_BLOG_KEYS) {
  const blog = ALL_BLOGS.find((b) => b.file === `${key}.html`);
  const body = extractBodyFromNext(key);
  fs.writeFileSync(path.join(PAGES, blog.file), buildNewPage(blog, body));
  console.log(`Created ${blog.file}`);
}

for (const blog of ALL_BLOGS) {
  if (!NEW_BLOG_KEYS.includes(blog.file.replace(".html", ""))) {
    updateExistingMoreArticles(blog.file);
    console.log(`Updated more-articles in ${blog.file}`);
  }
}

const newsPath = path.join(PAGES, "news.html");
let news = fs.readFileSync(newsPath, "utf8");
const grid = ALL_BLOGS.map(newsCard).join("\n\n");
news = news.replace(
  /<!-- Articles Grid -->[\s\S]*?<\/div>\s*\n\s*<\/div>\s*\n\s*<\/section>\s*\n\s*\n\s*<!-- ================= FEATURED STORIES/,
  `<!-- Articles Grid -->\n        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">\n\n${grid}\n\n        </div>\n      </div>\n    </section>\n\n\n    <!-- ================= FEATURED STORIES`,
);
fs.writeFileSync(newsPath, news);
console.log("Updated news.html with all blog cards");
