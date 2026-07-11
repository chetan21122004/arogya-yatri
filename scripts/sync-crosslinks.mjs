/**
 * Updates the "More Articles" grids on all 11 existing blog pages
 * and wires companion sidebar "Related Articles" links.
 */
import fs from 'fs';
import path from 'path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const pagesDir = path.join(root, 'app', 'pages');

// ─── Article metadata ─────────────────────────────────────────────────────────
const ARTICLES = {
  'blog-how-much-can-i-save-surgery-india': {
    title: 'How Much Can I Save on Surgery in India?', category: 'Cost Guide', img: 'blog-indian-hospital-featured.png',
  },
  'blog-best-hospitals-india-international-patients': {
    title: 'Best Hospitals in India for International Patients', category: 'Hospital Guide', img: 'hospital.webp',
  },
  'blog-which-indian-city-medical-procedure': {
    title: 'Which Indian City Should I Choose for My Procedure?', category: 'Destination', img: 'india.webp',
  },
  'blog-travel-insurance-medical-tourism-india': {
    title: 'Travel Insurance for Medical Tourism in India', category: 'Insurance', img: 'plane-bg.jpg',
  },
  'blog-recovery-time-surgery-india': {
    title: 'Recovery Time After Surgery in India', category: 'Recovery', img: 'doctor-work.webp',
  },
  'blog-combine-treatment-vacation-india': {
    title: 'Combining Treatment with a Vacation in India', category: 'Travel', img: 'auruyveda.webp',
  },
  'blog-quality-of-doctors-india-vs-home-country': {
    title: 'Quality of Doctors in India vs. Your Home Country', category: 'Trust &amp; Safety', img: 'doctor-page-hero.png',
  },
  'blog-india-medical-visa-guide': {
    title: 'How to Get an Indian Medical Visa', category: 'Travel &amp; Visa Guide', img: 'blog-medical-visa-featured.png',
  },
  'blog-cancer-treatment-india': {
    title: 'Cancer Treatment in India', category: 'Oncology', img: 'blog-cancer-treatment-featured.png',
  },
  'blog-ivf-fertility-india': {
    title: 'IVF in India: An Honest Guide', category: 'Fertility &amp; IVF', img: 'blog-ivf-fertility-featured.png',
  },
  'blog-heal-in-india-program-guide': {
    title: 'Heal in India Program Guide', category: 'Medical Tourism', img: 'blog-indian-hospital-featured.png',
  },
  'blog-follow-up-care-after-returning-home': {
    title: 'How Do Indian Hospitals Handle Follow-Up Care After I Return Home?', category: 'Post-Treatment Care', img: 'blog-follow-up-care-featured.jpg',
  },
  'blog-most-popular-medical-procedures-india': {
    title: 'What Medical Procedures Are Most Popular for Medical Tourism in India?', category: 'Treatment Guide', img: 'blog-popular-procedures-featured.jpg',
  },
  'blog-hip-replacement-cost-india': {
    title: 'How Much Does a Hip Replacement Cost in India vs. My Country?', category: 'Cost Guide', img: 'blog-hip-replacement-featured.jpg',
  },
  'blog-dental-work-india-reliable-international-patients': {
    title: 'Is Dental Work in India Reliable for International Patients?', category: 'Dental Guide', img: 'blog-dental-treatment-featured.jpg',
  },
  'blog-find-legitimate-hospitals-india': {
    title: 'How Do I Find Legitimate Medical Tourism Hospitals in India?', category: 'Trust &amp; Safety', img: 'blog-hospital-safety-featured.jpg',
  },
  'blog-language-barriers-indian-hospitals': {
    title: 'What Language Barriers Should I Expect in Indian Hospitals?', category: 'Patient Guide', img: 'blog-language-support-featured.jpg',
  },
};

// ─── Updated More Articles lists for each existing page ───────────────────────
const MORE_ARTICLES = {
  'blog-how-much-can-i-save-surgery-india': [
    'blog-hip-replacement-cost-india',
    'blog-dental-work-india-reliable-international-patients',
    'blog-most-popular-medical-procedures-india',
    'blog-recovery-time-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-cancer-treatment-india',
    'blog-ivf-fertility-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-which-indian-city-medical-procedure',
    'blog-india-medical-visa-guide',
  ],
  'blog-best-hospitals-india-international-patients': [
    'blog-find-legitimate-hospitals-india',
    'blog-how-much-can-i-save-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-which-indian-city-medical-procedure',
    'blog-india-medical-visa-guide',
    'blog-recovery-time-surgery-india',
    'blog-cancer-treatment-india',
    'blog-ivf-fertility-india',
    'blog-language-barriers-indian-hospitals',
    'blog-heal-in-india-program-guide',
  ],
  'blog-which-indian-city-medical-procedure': [
    'blog-most-popular-medical-procedures-india',
    'blog-best-hospitals-india-international-patients',
    'blog-how-much-can-i-save-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-india-medical-visa-guide',
    'blog-recovery-time-surgery-india',
    'blog-find-legitimate-hospitals-india',
    'blog-cancer-treatment-india',
    'blog-combine-treatment-vacation-india',
    'blog-heal-in-india-program-guide',
  ],
  'blog-travel-insurance-medical-tourism-india': [
    'blog-how-much-can-i-save-surgery-india',
    'blog-hip-replacement-cost-india',
    'blog-most-popular-medical-procedures-india',
    'blog-india-medical-visa-guide',
    'blog-best-hospitals-india-international-patients',
    'blog-recovery-time-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-which-indian-city-medical-procedure',
    'blog-cancer-treatment-india',
    'blog-combine-treatment-vacation-india',
  ],
  'blog-recovery-time-surgery-india': [
    'blog-follow-up-care-after-returning-home',
    'blog-hip-replacement-cost-india',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-cancer-treatment-india',
    'blog-ivf-fertility-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-combine-treatment-vacation-india',
    'blog-india-medical-visa-guide',
    'blog-which-indian-city-medical-procedure',
  ],
  'blog-combine-treatment-vacation-india': [
    'blog-which-indian-city-medical-procedure',
    'blog-most-popular-medical-procedures-india',
    'blog-hip-replacement-cost-india',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-recovery-time-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-india-medical-visa-guide',
    'blog-cancer-treatment-india',
    'blog-heal-in-india-program-guide',
  ],
  'blog-quality-of-doctors-india-vs-home-country': [
    'blog-find-legitimate-hospitals-india',
    'blog-language-barriers-indian-hospitals',
    'blog-best-hospitals-india-international-patients',
    'blog-how-much-can-i-save-surgery-india',
    'blog-recovery-time-surgery-india',
    'blog-cancer-treatment-india',
    'blog-ivf-fertility-india',
    'blog-india-medical-visa-guide',
    'blog-which-indian-city-medical-procedure',
    'blog-heal-in-india-program-guide',
  ],
  'blog-india-medical-visa-guide': [
    'blog-most-popular-medical-procedures-india',
    'blog-hip-replacement-cost-india',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-recovery-time-surgery-india',
    'blog-travel-insurance-medical-tourism-india',
    'blog-combine-treatment-vacation-india',
    'blog-cancer-treatment-india',
    'blog-which-indian-city-medical-procedure',
  ],
  'blog-cancer-treatment-india': [
    'blog-most-popular-medical-procedures-india',
    'blog-follow-up-care-after-returning-home',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-recovery-time-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-find-legitimate-hospitals-india',
    'blog-india-medical-visa-guide',
    'blog-ivf-fertility-india',
    'blog-heal-in-india-program-guide',
  ],
  'blog-ivf-fertility-india': [
    'blog-most-popular-medical-procedures-india',
    'blog-dental-work-india-reliable-international-patients',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-recovery-time-surgery-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-which-indian-city-medical-procedure',
    'blog-cancer-treatment-india',
    'blog-india-medical-visa-guide',
    'blog-heal-in-india-program-guide',
  ],
  'blog-heal-in-india-program-guide': [
    'blog-most-popular-medical-procedures-india',
    'blog-find-legitimate-hospitals-india',
    'blog-how-much-can-i-save-surgery-india',
    'blog-best-hospitals-india-international-patients',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-recovery-time-surgery-india',
    'blog-which-indian-city-medical-procedure',
    'blog-cancer-treatment-india',
    'blog-ivf-fertility-india',
    'blog-language-barriers-indian-hospitals',
  ],
};

// ─── Companion sidebar updates (slug → new related articles) ──────────────────
const RELATED_UPDATES = {
  'blog-recovery-time-surgery-india': [
    'blog-follow-up-care-after-returning-home',
    'blog-how-much-can-i-save-surgery-india',
    'blog-travel-insurance-medical-tourism-india',
  ],
  'blog-how-much-can-i-save-surgery-india': [
    'blog-hip-replacement-cost-india',
    'blog-dental-work-india-reliable-international-patients',
    'blog-most-popular-medical-procedures-india',
  ],
  'blog-best-hospitals-india-international-patients': [
    'blog-find-legitimate-hospitals-india',
    'blog-quality-of-doctors-india-vs-home-country',
    'blog-how-much-can-i-save-surgery-india',
  ],
};

// ─── HTML fragment builders ────────────────────────────────────────────────────
function moreCard(slug) {
  const a = ARTICLES[slug];
  if (!a) { console.warn(`Unknown article: ${slug}`); return ''; }
  return `
        <a href="${slug}.html" class="more-card">
          <div class="aspect-[16/10] bg-slate-100 overflow-hidden"><img src="../../src/images/${a.img}" alt="${a.title}" class="w-full h-full object-cover" loading="lazy" decoding="async"></div>
          <div class="p-4"><span class="cat-pill">${a.category}</span><h3 class="text-sm font-semibold text-slate-900 leading-snug mt-2">${a.title}</h3></div>
        </a>`;
}

function relCard(slug) {
  const a = ARTICLES[slug];
  if (!a) return '';
  return `
                <a href="${slug}.html" class="rel-card">
                  <img src="../../src/images/${a.img}" alt="${a.category.replace(/&amp;/g, '&')}" loading="lazy" decoding="async">
                  <div><span class="cat-pill text-[0.65rem]">${a.category}</span><p class="text-xs font-semibold text-slate-800 mt-1 leading-snug">${a.title}</p></div>
                </a>`;
}

// ─── Main ──────────────────────────────────────────────────────────────────────
let updated = 0;

for (const [slug, moreList] of Object.entries(MORE_ARTICLES)) {
  const filePath = path.join(pagesDir, `${slug}.html`);
  if (!fs.existsSync(filePath)) { console.warn(`Missing: ${slug}.html`); continue; }

  let html = fs.readFileSync(filePath, 'utf8');

  // Replace More Articles grid
  const moreGridHtml = moreList.map(moreCard).join('');
  const newGridBlock = `<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">${moreGridHtml}\n      </div>`;

  // Match the existing grid block
  const gridRe = /<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">[\s\S]*?<\/div>\s*<\/section>/;
  if (gridRe.test(html)) {
    html = html.replace(gridRe, newGridBlock + '\n    </section>');
    updated++;
  } else {
    console.warn(`Could not find More Articles grid in ${slug}.html`);
  }

  // Update sidebar Related Articles if this is a companion page
  if (RELATED_UPDATES[slug]) {
    const relHtml = RELATED_UPDATES[slug].map(relCard).join('');
    const relRe = /<div class="space-y-1">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/aside>/;
    if (relRe.test(html)) {
      html = html.replace(relRe,
        `<div class="space-y-1">${relHtml}\n              </div>\n            </div>\n          </div>\n        </aside>`);
    } else {
      console.warn(`Could not find Related Articles block in ${slug}.html`);
    }
  }

  fs.writeFileSync(filePath, html);
}

console.log(`Updated More Articles grids: ${updated} pages`);
console.log(`Companion sidebar links updated for: ${Object.keys(RELATED_UPDATES).join(', ')}`);
