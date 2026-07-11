import fs from 'fs';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

// ─── Article database (all 17 blogs) ─────────────────────────────────────────
const ARTICLES = {
  'blog-how-much-can-i-save-surgery-india': {
    title: 'How Much Can I Save on Surgery in India?',
    category: 'Cost Guide',
    img: 'blog-indian-hospital-featured.png',
  },
  'blog-best-hospitals-india-international-patients': {
    title: 'Best Hospitals in India for International Patients',
    category: 'Hospital Guide',
    img: 'hospital.webp',
  },
  'blog-which-indian-city-medical-procedure': {
    title: 'Which Indian City Should I Choose for My Procedure?',
    category: 'Destination',
    img: 'india.webp',
  },
  'blog-travel-insurance-medical-tourism-india': {
    title: 'Travel Insurance for Medical Tourism in India',
    category: 'Insurance',
    img: 'plane-bg.jpg',
  },
  'blog-recovery-time-surgery-india': {
    title: 'Recovery Time After Surgery in India',
    category: 'Recovery',
    img: 'doctor-work.webp',
  },
  'blog-combine-treatment-vacation-india': {
    title: 'Combining Treatment with a Vacation in India',
    category: 'Travel',
    img: 'auruyveda.webp',
  },
  'blog-quality-of-doctors-india-vs-home-country': {
    title: 'Quality of Doctors in India vs. Your Home Country',
    category: 'Trust &amp; Safety',
    img: 'doctor-page-hero.png',
  },
  'blog-india-medical-visa-guide': {
    title: 'How to Get an Indian Medical Visa',
    category: 'Travel &amp; Visa Guide',
    img: 'blog-medical-visa-featured.png',
  },
  'blog-cancer-treatment-india': {
    title: 'Cancer Treatment in India',
    category: 'Oncology',
    img: 'blog-cancer-treatment-featured.png',
  },
  'blog-ivf-fertility-india': {
    title: 'IVF in India: An Honest Guide',
    category: 'Fertility &amp; IVF',
    img: 'blog-ivf-fertility-featured.png',
  },
  'blog-heal-in-india-program-guide': {
    title: 'Heal in India Program Guide',
    category: 'Medical Tourism',
    img: 'blog-indian-hospital-featured.png',
  },
  'blog-follow-up-care-after-returning-home': {
    title: 'How Do Indian Hospitals Handle Follow-Up Care After I Return Home?',
    category: 'Post-Treatment Care',
    img: 'blog-follow-up-care-featured.jpg',
  },
  'blog-most-popular-medical-procedures-india': {
    title: 'What Medical Procedures Are Most Popular for Medical Tourism in India?',
    category: 'Treatment Guide',
    img: 'blog-popular-procedures-featured.jpg',
  },
  'blog-hip-replacement-cost-india': {
    title: 'How Much Does a Hip Replacement Cost in India vs. My Country?',
    category: 'Cost Guide',
    img: 'blog-hip-replacement-featured.jpg',
  },
  'blog-dental-work-india-reliable-international-patients': {
    title: 'Is Dental Work in India Reliable for International Patients?',
    category: 'Dental Guide',
    img: 'blog-dental-treatment-featured.jpg',
  },
  'blog-find-legitimate-hospitals-india': {
    title: 'How Do I Find Legitimate Medical Tourism Hospitals in India?',
    category: 'Trust &amp; Safety',
    img: 'blog-hospital-safety-featured.jpg',
  },
  'blog-language-barriers-indian-hospitals': {
    title: 'What Language Barriers Should I Expect in Indian Hospitals?',
    category: 'Patient Guide',
    img: 'blog-language-support-featured.jpg',
  },
};

// ─── Per-blog config ──────────────────────────────────────────────────────────
const BLOG_CONFIG = {
  'blog-18-follow-up-care-after-returning-home.md': {
    slug: 'blog-follow-up-care-after-returning-home',
    img: 'blog-follow-up-care-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-recovery-time-surgery-india',
      'blog-how-much-can-i-save-surgery-india',
      'blog-india-medical-visa-guide',
    ],
    more: [
      'blog-recovery-time-surgery-india',
      'blog-how-much-can-i-save-surgery-india',
      'blog-best-hospitals-india-international-patients',
      'blog-india-medical-visa-guide',
      'blog-combine-treatment-vacation-india',
      'blog-travel-insurance-medical-tourism-india',
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-hip-replacement-cost-india',
      'blog-cancer-treatment-india',
      'blog-language-barriers-indian-hospitals',
    ],
  },
  'blog-20-most-popular-medical-procedures-india.md': {
    slug: 'blog-most-popular-medical-procedures-india',
    img: 'blog-popular-procedures-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-cancer-treatment-india',
      'blog-ivf-fertility-india',
      'blog-how-much-can-i-save-surgery-india',
    ],
    more: [
      'blog-cancer-treatment-india',
      'blog-ivf-fertility-india',
      'blog-how-much-can-i-save-surgery-india',
      'blog-hip-replacement-cost-india',
      'blog-dental-work-india-reliable-international-patients',
      'blog-best-hospitals-india-international-patients',
      'blog-recovery-time-surgery-india',
      'blog-heal-in-india-program-guide',
      'blog-which-indian-city-medical-procedure',
      'blog-find-legitimate-hospitals-india',
    ],
  },
  'blog-21-hip-replacement-cost-india.md': {
    slug: 'blog-hip-replacement-cost-india',
    img: 'blog-hip-replacement-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-how-much-can-i-save-surgery-india',
      'blog-recovery-time-surgery-india',
      'blog-quality-of-doctors-india-vs-home-country',
    ],
    more: [
      'blog-how-much-can-i-save-surgery-india',
      'blog-recovery-time-surgery-india',
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-find-legitimate-hospitals-india',
      'blog-india-medical-visa-guide',
      'blog-best-hospitals-india-international-patients',
      'blog-follow-up-care-after-returning-home',
      'blog-most-popular-medical-procedures-india',
      'blog-combine-treatment-vacation-india',
      'blog-which-indian-city-medical-procedure',
    ],
  },
  'blog-22-dental-work-india-reliable-international-patients.md': {
    slug: 'blog-dental-work-india-reliable-international-patients',
    img: 'blog-dental-treatment-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-how-much-can-i-save-surgery-india',
      'blog-best-hospitals-india-international-patients',
      'blog-find-legitimate-hospitals-india',
    ],
    more: [
      'blog-how-much-can-i-save-surgery-india',
      'blog-best-hospitals-india-international-patients',
      'blog-find-legitimate-hospitals-india',
      'blog-which-indian-city-medical-procedure',
      'blog-most-popular-medical-procedures-india',
      'blog-india-medical-visa-guide',
      'blog-recovery-time-surgery-india',
      'blog-combine-treatment-vacation-india',
      'blog-travel-insurance-medical-tourism-india',
      'blog-quality-of-doctors-india-vs-home-country',
    ],
  },
  'blog-23-find-legitimate-hospitals-india.md': {
    slug: 'blog-find-legitimate-hospitals-india',
    img: 'blog-hospital-safety-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-best-hospitals-india-international-patients',
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-most-popular-medical-procedures-india',
    ],
    more: [
      'blog-best-hospitals-india-international-patients',
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-how-much-can-i-save-surgery-india',
      'blog-most-popular-medical-procedures-india',
      'blog-india-medical-visa-guide',
      'blog-hip-replacement-cost-india',
      'blog-dental-work-india-reliable-international-patients',
      'blog-cancer-treatment-india',
      'blog-recovery-time-surgery-india',
      'blog-language-barriers-indian-hospitals',
    ],
  },
  'blog-24-language-barriers-indian-hospitals.md': {
    slug: 'blog-language-barriers-indian-hospitals',
    img: 'blog-language-support-featured.jpg',
    date: 'July 2026',
    related: [
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-follow-up-care-after-returning-home',
      'blog-find-legitimate-hospitals-india',
    ],
    more: [
      'blog-quality-of-doctors-india-vs-home-country',
      'blog-follow-up-care-after-returning-home',
      'blog-find-legitimate-hospitals-india',
      'blog-best-hospitals-india-international-patients',
      'blog-how-much-can-i-save-surgery-india',
      'blog-india-medical-visa-guide',
      'blog-most-popular-medical-procedures-india',
      'blog-combine-treatment-vacation-india',
      'blog-heal-in-india-program-guide',
      'blog-recovery-time-surgery-india',
    ],
  },
};

// ─── URL normalizer ───────────────────────────────────────────────────────────
function normUrl(url) {
  if (!url) return url;
  return url
    .replace('https://www.sanohealth.co.in/#compare', '../../index.html#compare')
    .replace('https://www.sanohealth.co.in/app/pages/', '')
    .replace(/^https:\/\/www\.sanohealth\.co\.in\/?$/, 'about.html');
}

// ─── Inline formatting ────────────────────────────────────────────────────────
function inlineFormat(text) {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => {
      const nu = normUrl(u);
      const isExternal = /^https?:\/\//.test(nu) && !nu.includes('arogyayatri.com');
      const ext = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${nu}"${ext} class="text-teal-700 font-medium underline">${t}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

// ─── Markdown → HTML converter ────────────────────────────────────────────────
function mdToHtml(markdown) {
  const lines = markdown.split('\n');
  let html = '';
  let sectionOpen = false;
  let listBuffer = [];
  let tableBuffer = [];
  let paraBuffer = [];

  function flushPara() {
    if (!paraBuffer.length) return;
    const t = paraBuffer.join(' ').trim();
    if (t) html += `<p>${inlineFormat(t)}</p>\n`;
    paraBuffer = [];
  }
  function flushList() {
    if (!listBuffer.length) return;
    html += '<ul>' + listBuffer.map(l => `<li>${inlineFormat(l)}</li>`).join('') + '</ul>\n';
    listBuffer = [];
  }
  function flushTable() {
    if (!tableBuffer.length) return;
    html += '<table>\n';
    let bodyStarted = false;
    tableBuffer.forEach((row, idx) => {
      // Skip separator rows
      if (row.every(c => /^[-:\s]+$/.test(c))) return;
      if (idx === 0) {
        html += '<thead><tr>' + row.map(c => `<th>${inlineFormat(c)}</th>`).join('') + '</tr></thead>\n<tbody>\n';
        bodyStarted = true;
      } else {
        if (!bodyStarted) { html += '<tbody>\n'; bodyStarted = true; }
        html += '<tr>' + row.map(c => `<td>${inlineFormat(c)}</td>`).join('') + '</tr>\n';
      }
    });
    if (bodyStarted) html += '</tbody>\n';
    html += '</table>\n';
    tableBuffer = [];
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();

    // Skip top-level H1
    if (/^# [^#]/.test(t)) continue;
    // Skip YAML fence
    if (t === '---') { flushList(); flushTable(); flushPara(); continue; }

    // H2
    if (t.startsWith('## ')) {
      flushList(); flushTable(); flushPara();
      if (sectionOpen) html += '</section>\n';
      html += `<section><h2>${inlineFormat(t.slice(3))}</h2>\n`;
      sectionOpen = true;
      continue;
    }

    // H3
    if (t.startsWith('### ')) {
      flushList(); flushTable(); flushPara();
      html += `<h3>${inlineFormat(t.slice(4))}</h3>\n`;
      continue;
    }

    // Table row
    if (t.startsWith('|')) {
      flushPara(); flushList();
      const cells = t.split('|').map(c => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);
      tableBuffer.push(cells);
      continue;
    }
    if (tableBuffer.length && !t.startsWith('|')) {
      flushTable();
    }

    // List item
    if (t.startsWith('- ')) {
      flushPara(); flushTable();
      listBuffer.push(t.slice(2));
      continue;
    }
    if (listBuffer.length && !t.startsWith('- ') && t !== '') {
      flushList();
    }

    // Empty line
    if (t === '') { flushList(); flushTable(); flushPara(); continue; }

    // Standalone bold line = treat as h3 (bold question/subheading)
    if (/^\*\*[^*]+\*\*$/.test(t)) {
      flushPara(); flushList(); flushTable();
      html += `<h3>${inlineFormat(t.replace(/^\*\*/, '').replace(/\*\*$/, ''))}</h3>\n`;
      continue;
    }

    // Regular text
    paraBuffer.push(t);
  }

  flushList(); flushTable(); flushPara();
  if (sectionOpen) html += '</section>\n';
  return html;
}

// ─── FAQ extractor (for JSON-LD schema) ──────────────────────────────────────
function extractFaqs(markdown) {
  const faqs = [];
  const lines = markdown.split('\n');
  let inFaq = false;
  let currentQ = null;
  let currentA = [];

  function saveQ() {
    if (currentQ && currentA.length) {
      faqs.push({ q: currentQ, a: currentA.join(' ').trim() });
      currentQ = null; currentA = [];
    }
  }

  for (const line of lines) {
    const t = line.trim();
    if (t === '## Frequently Asked Questions') { inFaq = true; continue; }
    if (!inFaq) continue;
    if (t.startsWith('## ') && t !== '## Frequently Asked Questions') { saveQ(); break; }
    if (/^\*\*[^*]+\*\*$/.test(t)) {
      saveQ();
      currentQ = t.replace(/^\*\*/, '').replace(/\*\*$/, '');
      continue;
    }
    if (t && !t.startsWith('---') && currentQ) {
      const plain = t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/\*/g, '');
      currentA.push(plain);
    }
  }
  saveQ();
  return faqs;
}

// ─── YAML frontmatter parser ──────────────────────────────────────────────────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: content };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w_]*):\s*"?([^"]+)"?$/);
    if (m) meta[m[1]] = m[2].replace(/^"/, '').replace(/"$/, '');
    const arr = line.match(/^(\w[\w_]*):\s*\[(.+)\]$/);
    if (arr) meta[arr[1]] = arr[2].split(',').map(s => s.trim().replace(/^"/, '').replace(/"$/, ''));
  }
  return { meta, body: match[2] };
}

// ─── Category → display label (without HTML entities in cat-pill) ─────────────
function catLabel(cat) {
  const map = {
    'Post-Treatment Care Guide': 'Post-Treatment Care',
    'Treatment Guide': 'Treatment Guide',
    'Cost & Savings Guide': 'Cost Guide',
    'Dental Treatment Guide': 'Dental Guide',
    'Patient Safety Guide': 'Trust & Safety',
    'Patient Guide': 'Patient Guide',
  };
  return map[cat] || cat;
}

// ─── HTML generator ───────────────────────────────────────────────────────────
function buildPage(meta, bodyHtml, faqSchema, config) {
  const { slug, img, date, related, more } = config;
  const cat = catLabel(meta.category);
  const catHtml = cat.replace(/&/g, '&amp;');
  const title = meta.title;
  const desc = meta.meta_description;
  const canonUrl = `https://www.arogyayatri.com/app/pages/${slug}.html`;
  const ogImg = `https://www.arogyayatri.com/src/images/${img}`;

  const faqSchemaJson = faqSchema.length ? `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ${faqSchema.map(f => `{
        "@type": "Question",
        "name": ${JSON.stringify(f.q)},
        "acceptedAnswer": { "@type": "Answer", "text": ${JSON.stringify(f.a)} }
      }`).join(',\n      ')}
    ]
  }
  </script>` : '';

  function relCard(s) {
    const a = ARTICLES[s];
    if (!a) return '';
    return `
                <a href="${s}.html" class="rel-card">
                  <img src="../../src/images/${a.img}" alt="${a.category.replace(/&amp;/g, '&')}" loading="lazy" decoding="async">
                  <div><span class="cat-pill text-[0.65rem]">${a.category}</span><p class="text-xs font-semibold text-slate-800 mt-1 leading-snug">${a.title}</p></div>
                </a>`;
  }

  function moreCard(s) {
    const a = ARTICLES[s];
    if (!a) return '';
    return `
        <a href="${s}.html" class="more-card">
          <div class="aspect-[16/10] bg-slate-100 overflow-hidden"><img src="../../src/images/${a.img}" alt="${a.title}" class="w-full h-full object-cover" loading="lazy" decoding="async"></div>
          <div class="p-4"><span class="cat-pill">${a.category}</span><h3 class="text-sm font-semibold text-slate-900 leading-snug mt-2">${a.title}</h3></div>
        </a>`;
  }

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Sano Healthcare and Tourism</title>
  <meta name="description" content="${desc}">
  <link rel="canonical" href="${canonUrl}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${ogImg}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lexend:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../style/basic-nav.css">
  <link rel="stylesheet" href="../style/tailwind.css">
  <link rel="stylesheet" href="../style/blog.css">
${faqSchemaJson}
</head>
<body class="font-body bg-slate-50 text-black">

  <div id="readProgress"></div>

  <header id="siteHeader" class="fixed top-0 inset-x-0 z-50">
    <nav class="relative max-w-7xl mx-auto px-6 h-20 flex items-center">
      <a href="../../index.html" class="flex items-center">
        <img src="../../src/logo.png" alt="Sano Healthcare and Tourism" class="h-12 md:h-14 w-auto object-contain">
      </a>
      <ul class="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 text-base font-medium items-center">
        <li><a href="treatments.html" class="nav-link inline-flex items-center leading-none">Treatment</a></li>
        <li><a href="doctor.html" class="nav-link inline-flex items-center leading-none">Doctor</a></li>
        <li><a href="destinations.html" class="nav-link inline-flex items-center leading-none">Destinations</a></li>
        <li class="relative group flex items-center">
          <button class="nav-link inline-flex items-center gap-1 leading-none">Explore <i class='bx bx-chevron-down text-sm relative top-[1px]'></i></button>
          <div class="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-52 rounded-xl bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a href="about.html" class="block px-5 py-3 text-sm text-slate-800 rounded-t-xl hover:bg-slate-50">About SANO</a>
            <a href="faq.html" class="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50">FAQ</a>
            <a href="testimonial.html" class="block px-5 py-3 text-sm text-slate-800 hover:bg-slate-50">Testimonials</a>
            <a href="news.html" class="block px-5 py-3 text-sm text-slate-800 rounded-b-xl hover:bg-slate-50">News/Blogs</a>
          </div>
        </li>
      </ul>
      <div class="ml-auto hidden md:flex items-center">
        <a class="openConsultantModal nav-cta inline-flex items-center gap-3 px-5 py-2 rounded-full border transition leading-none cursor-pointer">
          <span class="h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center"><i class='bx bx-right-arrow-alt'></i></span>
          <span class="text-sm font-medium">Book Consultation</span>
        </a>
      </div>
      <button id="menuBtn" class="ml-auto md:hidden text-2xl flex items-center"><i class='bx bx-menu'></i></button>
    </nav>
  </header>

  <div id="mobileMenu" class="fixed inset-y-0 left-0 w-80 bg-white z-50 transform -translate-x-full transition-transform duration-300 md:hidden shadow-2xl">
    <div class="p-6 border-b border-gray-200 flex justify-between items-start">
      <a href="../../index.html"><img src="../../src/logo.png" alt="Sano Healthcare and Tourism" class="h-11 w-auto object-contain"></a>
      <button id="closeBtn" class="text-2xl text-black"><i class='bx bx-x'></i></button>
    </div>
    <nav class="px-6 py-8 space-y-6 text-lg font-medium text-primaryDark">
      <a href="treatments.html" class="block">Treatment</a>
      <a href="doctor.html" class="block">Doctor</a>
      <a href="destinations.html" class="block">Destinations</a>
      <div>
        <button id="mobileExploreBtn" class="w-full flex items-center justify-between"><span>Explore</span><i id="mobileExploreIcon" class='bx bx-chevron-down text-xl'></i></button>
        <div id="mobileExploreMenu" class="mt-4 ml-4 space-y-4 hidden text-base">
          <a href="about.html" class="block">About SANO</a>
          <a href="faq.html" class="block">FAQ</a>
          <a href="testimonial.html" class="block">Testimonials</a>
          <a href="news.html" class="block">News/Blogs</a>
        </div>
      </div>
      <div class="pt-6 border-t border-gray-200"></div>
      <a class="openConsultantModal flex items-center justify-between px-5 py-2 rounded-full border border-primaryDark hover:bg-primaryDark hover:text-white transition cursor-pointer">
        <span>Book Consultation</span>
        <span class="h-10 w-10 flex items-center justify-center rounded-full bg-teal-500 text-white"><i class='bx bx-right-arrow-alt text-xl'></i></span>
      </a>
    </nav>
  </div>

  <main class="page-wrapper">

    <div class="bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-6 pt-10 pb-8">
        <nav class="flex items-center gap-2 text-xs text-slate-400 mb-5 flex-wrap">
          <a href="../../index.html" class="hover:text-teal-600 transition">Home</a>
          <i class='bx bx-chevron-right text-xs'></i>
          <a href="news.html" class="hover:text-teal-600 transition">Blogs</a>
          <i class='bx bx-chevron-right text-xs'></i>
          <span class="text-slate-600">${catHtml}</span>
        </nav>
        <div class="flex items-center gap-3 mb-4">
          <span class="cat-pill">${catHtml}</span>
          <span class="text-xs text-slate-400">${meta.read_time} read</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-slate-900 leading-tight mb-5 max-w-4xl">${title}</h1>
        <p class="text-slate-500 text-base max-w-3xl leading-relaxed mb-6">${desc}</p>
        <div class="flex items-center gap-3 text-sm text-slate-400">
          <span class="flex items-center gap-1.5">
            <span class="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center"><i class='bx bx-user text-teal-600 text-sm'></i></span>
            Sano Healthcare &amp; Tourism
          </span>
          <span>·</span>
          <span>${date}</span>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-6">
      <img src="../../src/images/${img}" alt="${title}" class="w-full h-64 md:h-[420px] object-cover rounded-2xl shadow-sm" width="1200" height="420">
    </div>

    <div class="max-w-7xl mx-auto px-6 pb-16">
      <div class="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

        <div>
          <div class="bg-white rounded-2xl border border-slate-200 p-7 md:p-10">
            <article id="articleContent" class="prose">
${bodyHtml}
            </article>
          </div>

          <div class="mt-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white">
            <h2 class="text-2xl font-bold mb-3">Ready to Plan Your Treatment?</h2>
            <p class="text-teal-100 mb-6 leading-relaxed">Share your reports with Sano Healthcare and Tourism — free consultation, personalised guidance within 48 hours.</p>
            <div class="flex flex-wrap gap-3">
              <a href="https://forms.gle/Snkvg8H7byeD8cXj7" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-full hover:bg-teal-50 transition text-sm">
                <i class='bx bx-calendar-check'></i> Book Free Consultation
              </a>
              <a href="https://wa.me/918530054299" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/30 text-white border border-white/30 font-medium rounded-full hover:bg-teal-500/50 transition text-sm">
                <i class='bx bxl-whatsapp'></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <aside>
          <div class="sticky top-24 space-y-5">
            <div class="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">In This Article</h3>
              <nav id="toc" class="space-y-1"></nav>
            </div>
            <div class="bg-teal-600 rounded-2xl p-5 text-white">
              <p class="text-sm font-semibold mb-1">Free Second Opinion</p>
              <p class="text-xs opacity-80 mb-4 leading-relaxed">Get a free specialist review of your case — 24/7, 120+ languages.</p>
              <a href="https://wa.me/918530054299" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-teal-700 text-xs font-semibold hover:bg-teal-50 transition">
                <i class="bx bxl-whatsapp text-base text-green-600"></i> WhatsApp Us
              </a>
            </div>
            <div class="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Related Articles</h3>
              <div class="space-y-1">${related.map(relCard).join('')}
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>

    <section class="max-w-7xl mx-auto px-6 pb-20">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-2xl font-semibold text-slate-900">More Articles</h2>
        <a href="news.html" class="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1">View all <i class='bx bx-right-arrow-alt'></i></a>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">${more.map(moreCard).join('')}
      </div>
    </section>

  </main>

  <div id="consultantModal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm px-4">
    <div class="relative w-full max-w-md rounded-[28px] bg-white shadow-2xl overflow-hidden">
      <button onclick="closeConsultantModal()" class="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-slate-100 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="px-4 py-4">
        <div class="w-full h-[520px] rounded-2xl overflow-hidden border border-slate-200">
          <iframe src="https://forms.gle/Snkvg8H7byeD8cXj7" class="w-full h-full" frameborder="0">Loading…</iframe>
        </div>
      </div>
    </div>
  </div>

  <a href="https://wa.me/918530054299" target="_blank" aria-label="Chat on WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-xl hover:scale-105 hover:bg-green-600 transition-transform duration-300">
    <i class='bx bxl-whatsapp text-white text-3xl'></i>
  </a>

  <footer class="relative bg-slate-900 text-slate-300 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid gap-14 md:grid-cols-2 lg:grid-cols-5 mb-16">
        <div class="lg:col-span-2">
          <a href="../../index.html">
            <span class="inline-block bg-white rounded-lg p-3 mb-3"><img src="../../src/logo.png" alt="Sano Healthcare and Tourism" class="h-12 w-auto object-contain" loading="lazy"></span>
            <p class="text-sm text-slate-400 max-w-md leading-relaxed mb-6">Sano Healthcare and Tourism is India's trusted medical tourism facilitator Pune, connecting international patients with NABH accredited hospitals India for affordable heart surgery, cancer treatment, knee replacement, panchakarma retreats, and more. Zero waiting. 120+ languages. Complete end-to-end support.</p>
          </a>
          <div class="flex items-center gap-4">
            <a href="https://www.facebook.com/sano.healthcareandtourism" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"><i class="bx bxl-facebook text-lg"></i></a>
            <a href="https://www.linkedin.com/company/sanohealthcareandtourism/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"><i class="bx bxl-linkedin text-lg"></i></a>
            <a href="https://www.instagram.com/sano.healthcareandtourism?igsh=amthbzZrMXkwb2kw" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"><i class="bx bxl-instagram text-lg"></i></a>
            <a href="https://x.com/sano_healthcare" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition"><i class="bx bxl-twitter text-lg"></i></a>
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-5">Quick Links</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="../../index.html" class="hover:text-white transition">Home</a></li>
            <li><a href="treatments.html" class="hover:text-white transition">Treatment</a></li>
            <li><a href="doctor.html" class="hover:text-white transition">Doctor</a></li>
            <li><a href="destinations.html" class="hover:text-white transition">Destinations</a></li>
            <li><a href="about.html" class="hover:text-white transition">About SANO</a></li>
            <li><a href="news.html" class="hover:text-white transition">News/Blogs</a></li>
          </ul>
        </div>
        <div class="footer-contact-col">
          <h4 class="text-white font-semibold mb-5">Get in Touch</h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3"><i class="bx bx-phone text-teal-400 text-lg mt-0.5"></i><a href="tel:8530054299" class="hover:text-white transition">+91 85300 54299</a></li>
            <li class="flex items-start gap-3"><i class="bx bx-envelope text-teal-400 text-lg mt-0.5"></i><a href="mailto:apoorva@sanohealth.co.in" class="footer-contact-email hover:text-white transition">apoorva@sanohealth.co.in</a></li>
            <li class="pt-2"><a href="https://wa.me/918530054299" target="_blank" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white transition"><i class="bx bxl-whatsapp text-lg"></i> WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-white/10 mb-8"></div>
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>&copy; 2026 Sano Healthcare and Tourism. India's Medical Tourism Facilitator. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-2"><i class="bx bx-shield-quarter text-teal-400"></i>Secure &amp; Confidential</span>
          <span class="flex items-center gap-2"><i class="bx bx-world text-teal-400"></i>Global Healthcare Network</span>
        </div>
      </div>
    </div>
  </footer>
  <script src="../script/blog.js"></script>
</body>
</html>`;
}

// ─── Main ──────────────────────────────────────────────────────────────────────
const contextDir = path.join(root, 'context');
const outDir = path.join(root, 'app', 'pages');

for (const [filename, config] of Object.entries(BLOG_CONFIG)) {
  const mdPath = path.join(contextDir, filename);
  const raw = fs.readFileSync(mdPath, 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const bodyHtml = mdToHtml(body);
  const faqs = extractFaqs(body);
  const page = buildPage(meta, bodyHtml, faqs, config);
  const outPath = path.join(outDir, `${config.slug}.html`);
  fs.writeFileSync(outPath, page);
  console.log(`Generated: ${config.slug}.html (${faqs.length} FAQs)`);
}

console.log('\nAll 6 blog pages generated.');
