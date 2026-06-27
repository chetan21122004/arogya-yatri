import fs from 'fs';

const indexHtml = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const treatmentsHtml = fs.readFileSync(new URL('../app/pages/treatments.html', import.meta.url), 'utf8');

const costMatch = indexHtml.match(/const costData = \{([\s\S]*?)\};\s*\n\s*\/\/ Country names/);
if (!costMatch) throw new Error('costData not found');
const costData = Function(`"use strict"; return ({${costMatch[1].replace(/\/\/[^\n]*/g, '')}});`)();

const pricingMatch = treatmentsHtml.match(/const pricingData = \{([\s\S]*?)\};\s*\n\s*\/\/ Initialize calculator/);
if (!pricingMatch) throw new Error('pricingData not found');
const pricingData = Function(`"use strict"; return ({${pricingMatch[1].replace(/\/\/[^\n]*/g, '')}});`)();

const checks = [
  ['Kenya', 'Chemotherapy', '$3,000 - $6,000', '$1,500 - $3,000'],
  ['Bangladesh', 'Bypass Surgery (CABG)', '$5,000 - $7,000', '$4,000 - $7,000'],
  ['Oman', 'Liver Transplant', '$35,000 - $45,000', '$22,000 - $30,000'],
];

for (const [country, treatment, expCountry, expIndia] of checks) {
  const c = pricingData[country]?.[treatment]?.usd;
  const i = pricingData['India']?.[treatment]?.usd;
  console.log(c === expCountry && i === expIndia ? 'OK' : 'FAIL', country, treatment, { c, i, expCountry, expIndia });
}

const indexChecks = [
  ['kenya', 'chemotherapy', 4500, 2250],
  ['oman', 'liver-transplant', 40000, 26000],
];
for (const [country, treatment, expOther, expIndia] of indexChecks) {
  const d = costData[treatment];
  const ok = d?.[country] === expOther && d?.india === expIndia;
  console.log(ok ? 'OK' : 'FAIL', 'index', country, treatment, d?.[country], d?.india);
}

const newCountries = ['kenya', 'nigeria', 'oman', 'bangladesh', 'uzbekistan', 'tanzania'];
for (const c of newCountries) {
  console.log(indexHtml.includes(`value="${c}"`) ? 'OK' : 'FAIL', 'dropdown', c);
}
