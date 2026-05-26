Schema Markup Implementation Guide

Blog Post: Heal in India Program · Article #1

arogyayatri.com

What This Document Contains
This handoff document contains 4 ready-to-paste JSON-LD schema markup blocks for the first Sano Healthcare and Tourism
blog post, plus a step-by-step implementation checklist. No guessing is required — each section tells you exactly
where each block goes, which fields to update, and how to validate it.
⚠ Important: Replace all placeholder values (URLs, dates, image paths) with real data before publishing.
�� The MedicalOrganization schema can be added site-wide — not just on this post.
✅ After adding, always validate using Google&#39;s Rich Results Test before requesting indexing.
Why These 4 Schema Types?
1. BlogPosting — Tells Google this is an article with a specific author, publish date, and topic. Enables article
rich results in search.
2. FAQPage — Powers the FAQ accordion in Google search results (People Also Ask). Each Q&amp;A must
match visible text on the page exactly.
3. MedicalOrganization — Establishes Sano Healthcare and Tourism&#39;s E-E-A-T authority as a medical entity. Critical for health-
related content under Google&#39;s YMYL (Your Money Your Life) guidelines.
4. BreadcrumbList — Displays Home &gt; Blog &gt; Article in the search result snippet, improving CTR (click-
through rate) by showing users where they are in your site.
Schema Block 1 — BlogPosting
Where to paste: Inside the &lt;head&gt; of this blog post only
Update the image URL, datePublished, dateModified, and mainEntityOfPage @id fields before going live.
&lt;script type=&quot;application/ld+json&quot;&gt;
{
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;BlogPosting&quot;,
&quot;headline&quot;: &quot;Why Thousands of International Patients
Choose India&#39;s Heal in India Program for World-Class,
Affordable Care&quot;,
&quot;description&quot;: &quot;A complete guide to the Heal in India
Program — costs, hospitals, visa process and step-by-
step journey for international medical tourists.&quot;,
&quot;image&quot;: &quot;https://www.arogyayatri.com/images/heal-in-
india-program-blog.jpg&quot;,
&quot;author&quot;: {
&quot;@type&quot;: &quot;Organization&quot;,
&quot;name&quot;: &quot;Sano Healthcare and Tourism&quot;,
&quot;url&quot;: &quot;https://www.arogyayatri.com&quot;
},
&quot;publisher&quot;: {
&quot;@type&quot;: &quot;Organization&quot;,
&quot;name&quot;: &quot;Sano Healthcare and Tourism&quot;,
&quot;logo&quot;: {
&quot;@type&quot;: &quot;ImageObject&quot;,
&quot;url&quot;: &quot;https://www.arogyayatri.com/logo.png&quot;
}
},
&quot;datePublished&quot;: &quot;2025-05-01&quot;,
&quot;dateModified&quot;: &quot;2025-05-01&quot;,
&quot;mainEntityOfPage&quot;: {
&quot;@type&quot;: &quot;WebPage&quot;,
&quot;@id&quot;: &quot;https://www.arogyayatri.com/blog/

heal-in-india-program-guide&quot;
},
&quot;keywords&quot;: &quot;Heal in India Program, medical tourism India,
best hospitals India for foreigners&quot;,
&quot;inLanguage&quot;: &quot;en&quot;,
&quot;articleSection&quot;: &quot;Medical Tourism&quot;
}
&lt;/script&gt;
Schema Block 2 — FAQPage
Where to paste: Inside the &lt;head&gt; of this blog post only
The 5 questions here map to the H2 headings and key paragraphs in the article. Do not change the answer text
without also updating the visible article copy — Google checks both.
&lt;script type=&quot;application/ld+json&quot;&gt;
{
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;FAQPage&quot;,
&quot;mainEntity&quot;: [
{
&quot;@type&quot;: &quot;Question&quot;,
&quot;name&quot;: &quot;What is the Heal in India Program?&quot;,
&quot;acceptedAnswer&quot;: {
&quot;@type&quot;: &quot;Answer&quot;,
&quot;text&quot;: &quot;The Heal in India Program is a Government
of India initiative that helps international
patients access NABH and JCI accredited hospitals
with fast e-Medical Visa processing, airport
assistance, and multilingual care support.&quot;
}
},
{
&quot;@type&quot;: &quot;Question&quot;,
&quot;name&quot;: &quot;How much can I save on surgery in India?&quot;,
&quot;acceptedAnswer&quot;: {
&quot;@type&quot;: &quot;Answer&quot;,
&quot;text&quot;: &quot;Patients typically save 60–80% compared to
the US or UK. For example, a knee replacement
costing $30,000–$50,000 in the US costs
$5,000–$8,000 in India at equivalent quality.&quot;
}
},
{
&quot;@type&quot;: &quot;Question&quot;,
&quot;name&quot;: &quot;How do I get a medical visa for India?&quot;,
&quot;acceptedAnswer&quot;: {
&quot;@type&quot;: &quot;Answer&quot;,
&quot;text&quot;: &quot;You can apply for an e-Medical Visa online.
Under the Heal in India Program, processing takes
as little as 72 hours. Sano Healthcare and Tourism supports your
application as part of our free service.&quot;
}
},
{
&quot;@type&quot;: &quot;Question&quot;,
&quot;name&quot;: &quot;Which hospitals in India treat international patients?&quot;,
&quot;acceptedAnswer&quot;: {
&quot;@type&quot;: &quot;Answer&quot;,
&quot;text&quot;: &quot;NABH and JCI accredited hospitals across
Delhi, Mumbai, Chennai, Bengaluru, and Pune
regularly treat international patients. Sano Healthcare and Tourism matches you with the right hospital based
on your specific condition and budget.&quot;
}
},
{
&quot;@type&quot;: &quot;Question&quot;,

&quot;name&quot;: &quot;What does our medical tourism
service include?&quot;,
&quot;acceptedAnswer&quot;: {
&quot;@type&quot;: &quot;Answer&quot;,
&quot;text&quot;: &quot;Sano Healthcare and Tourism provides free report analysis,
hospital and doctor matching, visa assistance,
airport pickup, 24/7 multilingual support in 120+
languages, accommodation help, and post-treatment
follow-up after you return home.&quot;
}
}
]
}
&lt;/script&gt;
Schema Block 3 — MedicalOrganization
Where to paste: Global &lt;head&gt; (all pages) OR this blog post &lt;head&gt;
This can be added once globally in your site&#39;s &lt;head&gt; template so it applies to every page. Confirm the address,
social URLs, and contact details are accurate before deploying.
&lt;script type=&quot;application/ld+json&quot;&gt;
{
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;MedicalOrganization&quot;,
&quot;name&quot;: &quot;Sano Healthcare and Tourism&quot;,
&quot;url&quot;: &quot;https://www.arogyayatri.com&quot;,
&quot;logo&quot;: &quot;https://www.arogyayatri.com/logo.png&quot;,
&quot;description&quot;: &quot;India&#39;s trusted medical tourism facilitator
helping international patients access NABH accredited
hospitals for affordable, world-class treatment.&quot;,
&quot;medicalSpecialty&quot;: [
&quot;Cardiology&quot;, &quot;Orthopedics&quot;, &quot;Oncology&quot;,
&quot;Neurology&quot;, &quot;Transplant Surgery&quot;, &quot;Ayurveda&quot;
],
&quot;address&quot;: {
&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;addressLocality&quot;: &quot;Pune&quot;,
&quot;addressRegion&quot;: &quot;Maharashtra&quot;,
&quot;addressCountry&quot;: &quot;IN&quot;
},
&quot;contactPoint&quot;: {
&quot;@type&quot;: &quot;ContactPoint&quot;,
&quot;contactType&quot;: &quot;Customer Support&quot;,
&quot;availableLanguage&quot;: &quot;English, Arabic, French, Swahili&quot;
},
&quot;sameAs&quot;: [
&quot;https://www.facebook.com/sano.healthcareandtourism&quot;,
&quot;https://www.linkedin.com/company/sanohealthcareandtourism&quot;,
&quot;https://www.instagram.com/sano.healthcareandtourism/&quot;,
&quot;https://x.com/sano_healthcare&quot;
]
}
&lt;/script&gt;
Schema Block 4 — BreadcrumbList
Where to paste: Inside the &lt;head&gt; of this blog post only
The third breadcrumb item URL must exactly match the canonical URL of the published post.
&lt;script type=&quot;application/ld+json&quot;&gt;
{
&quot;@context&quot;: &quot;https://schema.org&quot;,
&quot;@type&quot;: &quot;BreadcrumbList&quot;,
&quot;itemListElement&quot;: [
{
&quot;@type&quot;: &quot;ListItem&quot;,
&quot;position&quot;: 1,

&quot;name&quot;: &quot;Home&quot;,
&quot;item&quot;: &quot;https://www.arogyayatri.com&quot;
},
{
&quot;@type&quot;: &quot;ListItem&quot;,
&quot;position&quot;: 2,
&quot;name&quot;: &quot;Blog&quot;,
&quot;item&quot;: &quot;https://www.arogyayatri.com/blog&quot;
},
{
&quot;@type&quot;: &quot;ListItem&quot;,
&quot;position&quot;: 3,
&quot;name&quot;: &quot;Heal in India Program Guide&quot;,
&quot;item&quot;: &quot;https://www.arogyayatri.com/blog/
heal-in-india-program-guide&quot;
}
]
}
&lt;/script&gt;
Developer Implementation Checklist
Complete each step in order. Steps 2–6 require editing the schema code above before pasting.
Ste
p
Where to Add What to Add Platform Note

1 Inside &lt;head&gt; of the
blog post page

Paste all 4 &lt;script
type=&quot;application/ld+json&quot;&gt; blocks. Order
doesn&#39;t matter — keep them grouped
together for easy future editing.

WordPress: use a
plugin like &#39;Insert
Headers and
Footers&#39; or the Yoast
SEO custom
schema field.
Webflow: Page
Settings → Custom
Code → Head.
Custom CMS:
directly in the
&lt;head&gt; template.

2 BlogPosting schema →
&#39;datePublished&#39;

Replace &#39;2025-05-01&#39; with the actual publish
date in YYYY-MM-DD format. Update
&#39;dateModified&#39; every time the article is
significantly edited.

All platforms

3 BlogPosting schema →
&#39;image&#39;

Replace the placeholder URL with the actual
featured image URL for this blog post. Use a
1200×630px JPG for best results with
Google&#39;s rich results.

All platforms

4 BlogPosting schema →
&#39;mainEntityOfPage @id&#39;

Replace with the final canonical URL of the
published blog post. This must exactly match
the canonical tag in the &lt;head&gt;.

All platforms

5 MedicalOrganization
schema → &#39;address&#39;
and &#39;sameAs&#39;

Confirm the Pune address fields are correct
and add the actual social media profile URLs
for Sano Healthcare and Tourism.

All platforms. This
schema block can
be shared globally
across all pages —
not just this blog
post.

6 FAQPage schema → all
&#39;text&#39; values

Ensure the answer text in each FAQ
matches what is written in the live blog post.
Google cross-references schema answers
with visible page content — mismatches can
cause rich result rejection.

All platforms

7 After publishing —
Google Search Console

Use the Rich Results Test
(search.google.com/test/rich-results) to
validate all 4 schemas. Then submit the URL
for indexing in Google Search Console →
URL Inspection → Request Indexing.

No CMS access
needed — browser-
based validation tool

Validation &amp; Testing
→ Rich Results Test: https://search.google.com/test/rich-results
→ Schema Markup Validator: https://validator.schema.org
→ Google Search Console: URL Inspection → Request Indexing after publishing
✅ All 4 schema types should show 0 errors and 0 warnings before going live.

• BlogPosting — should show a valid &#39;Article&#39; result in the Rich Results Test
• FAQPage — should show &#39;FAQ rich result detected&#39; with all 5 questions listed
• MedicalOrganization — validates in schema.org validator (not a visual rich result, but crawled for E-E-A-
T)
• BreadcrumbList — should show &#39;Breadcrumbs&#39; detected in Rich Results Test

Ongoing Maintenance Notes
1. Update dateModified in the BlogPosting schema whenever you make significant edits to the article body.
2. Add new FAQs to the FAQPage schema as you add Q&amp;A content to the page — keep schema and
visible copy in sync.
3. Reuse the MedicalOrganization block as a site-wide global include so it appears on every blog post
and treatment page automatically.
4. Build BreadcrumbList for every new article using the same structure — just update position 3&#39;s name
and item URL.

Questions? Contact the Sano Healthcare and Tourism content team before publishing. arogyayatri.com




TARGET KEYWORDS: Heal in India Program | Medical Tourism India | Best Hospitals India for Foreigners
WORD COUNT: ~1,050 words | INTENT: Informational + Navigational | FORMAT: Blog Post

Why Thousands of International Patients Choose
India&#39;s Heal in India Program for World-Class,
Affordable Care
If you&#39;ve been told you need a complex surgery — a knee replacement, a bypass, a
cancer treatment — and you&#39;re staring at a waiting list stretching months into the future,
you&#39;re not alone. Thousands of patients across Africa, the Middle East, Europe, and
beyond face the same reality: excellent healthcare exists, but it&#39;s either too expensive,
too slow, or both.
That&#39;s exactly why India has become the world&#39;s most chosen destination for medical
travel. And the Heal in India Program — a dedicated government initiative — is the
official system designed to make your journey safe, smooth, and surprisingly affordable.
Here&#39;s everything you need to know before you take the first step.

What Is the Heal in India Program — and Why Does It Matter to
You?
The Heal in India Program is a Government of India initiative launched to position India
as a global hub for affordable, high-quality healthcare. It streamlines the entire
experience for international patients — from visa processing to hospital access.
What this means practically:
• e-Medical Visa in as little as 72 hours — no long bureaucratic waits
• Fast-track airport assistance — a dedicated lane for medical travelers
• Official helplines in multiple languages to support patients before and during
their visit
• NABH and JCI accredited hospitals — the same international quality
benchmarks used in the US, UK, and Europe
Think of it as the Indian government removing every speed bump from your path to
treatment. When you travel through an accredited medical tourism facilitator like
Sano Healthcare and Tourism, you get all this — plus a human team holding your hand through every
step.
�� INTERLINK: &quot;Learn about NABH accredited hospitals in India&quot; Insert link to /treatments page

Which Treatments Bring Patients to India — and How Much Can
You Save?
Medical tourism in India covers a remarkably wide range of specialties. The best
hospitals in India for foreigners are equipped for procedures that often have multi-
month waiting periods in other countries.
✅ Cardiac Surgery (Bypass, Valve Replacement) — Save up to 80% vs US/UK
costs
✅ Orthopaedics (Knee &amp; Hip Replacement) — Comparable outcomes, fraction
of the price
✅ Oncology (Cancer Treatment) — Advanced immunotherapy &amp; targeted
therapy at world-class centres
✅ Neurosurgery — Cutting-edge procedures with internationally trained
surgeons
✅ Liver &amp; Kidney Transplants — Shorter waiting time, internationally certified
teams
✅ Fertility Treatments (IVF) — High success rates at a cost most countries
can&#39;t match
✅ Ayurveda &amp; Wellness — Holistic recovery in serene, traditional settings
To put numbers to this: a knee replacement that costs $30,000–$50,000 in the United
States typically costs $5,000–$8,000 in India — at the same level of surgical expertise
and post-op care. That&#39;s not a compromise. That&#39;s an advantage.
�� INTERLINK: &quot;Compare treatment costs and calculate your savings&quot; Insert link to cost
comparison tool
Zero waiting period is another difference that matters. Many patients reach Sano Healthcare and Tourism
after waiting 6–12 months for a procedure at home. In India, treatment can be
scheduled within days of arrival.

What Does the Journey Actually Look Like? (Step by Step)
We know the idea of travelling abroad for medical care can feel daunting. So let&#39;s walk
through what the experience actually looks like when you travel with a trusted facilitator.
• Step 1 — Free Report Analysis: Upload your medical reports. Sano Healthcare and Tourism&#39;s
expert panel reviews them within 24–48 hours and provides an honest treatment
recommendation and cost estimate — at no charge.
�� INTERLINK: &quot;Upload your reports for a free second opinion&quot; Insert link to consultation form
• Step 2 — Hospital &amp; Doctor Match: Based on your condition, you&#39;re matched to
the right NABH accredited hospital and specialist — not just any hospital, the
right one.

• Step 3 — Visa &amp; Travel Assistance: Your e-Medical Visa application is
supported, flights are coordinated, and your companion can travel with you
(accommodation support included).
• Step 4 — Treatment with 24/7 Support: A multilingual care coordinator —
available in 120+ languages — accompanies you throughout your treatment and
hospital stay.
• Step 5 — Follow-Up After You Return Home: Remote consultations and
medicine courier services keep your recovery on track even after you&#39;ve left
India.
This isn&#39;t a transactional service. It&#39;s end-to-end care — from the moment you make
contact to the moment you&#39;re fully recovered.

How Do You Know You&#39;re Choosing the Right Hospital and
Facilitator?
This is the question that deserves a direct answer. In medical tourism in India, not
every facilitator is equal. Here&#39;s what to look for — and what Sano Healthcare and Tourism specifically
offers:
• Accreditation matters: Only consider hospitals with NABH (National
Accreditation Board for Hospitals) or JCI certification. These are the gold
standards for patient safety.
• Transparent pricing: There should be no hidden fees. A trustworthy facilitator
provides a written cost estimate before you commit to anything.
• Language support: Your medical decisions should never be made through
broken communication. Sano Healthcare and Tourism provides hospital interpreters in 120+
languages.
• Post-treatment follow-up: The journey doesn&#39;t end at discharge. Ask any
facilitator how they support you after you return home.
�� INTERLINK: &quot;Read patient testimonials and real recovery stories&quot; Insert link to /testimonials
page
Sano Healthcare and Tourism is trusted by patients from 50+ countries — and every service is built
around one idea: that you deserve the same quality of care regardless of your passport
or your budget.

Your Next Step — It Starts With One Conversation
You&#39;ve already done the hardest part — researching your options. Taking the next step
doesn&#39;t have to be overwhelming. It starts with a simple, free consultation.

Share your medical reports with our team. We&#39;ll review them, give you an honest
recommendation, and walk you through what treatment in India would look like — costs,
timeline, hospital options, everything.
No commitment. No pressure. Just clarity.

Ready to Begin Your Healing Journey?

Fill out the free consultation form at arogyayatri.com and our care team will respond
within 24 hours — with a personalised cost estimate, hospital recommendation, and

step-by-step guidance.

�� Book Your Free Consultation → arogyayatri.com
� www.arogyayatri.com | Trusted by Patients from 50+ Countries

SEO &amp; AEO OPTIMIZATION NOTES (For Editor / Web Team)
Meta Title (60 chars): Heal in India Program: Affordable Medical Tourism Guide | Sano Healthcare and Tourism
Meta Description (155 chars): Discover how the Heal in India Program helps international patients access
NABH accredited hospitals with 80% cost savings and zero waiting. Start with a free consultation.
Primary Keyword: Heal in India Program (used in H1, H2, intro, body)
Secondary Keywords: medical tourism India, best hospitals India for foreigners, NABH accredited hospitals, e-
Medical Visa India, affordable surgery India
AEO (Answer Engine Optimization): H2 headings are phrased as direct questions patients ask on Google/AI
search. Step-by-step H2 and callout box are designed to be extracted as featured snippets / AI overviews.
Schema Markup Recommended: Article, FAQPage (from H2 questions), MedicalOrganization, BreadcrumbList
Internal Links: 5 interlink placeholders placed on descriptive anchor text throughout the article (marked in
yellow boxes above).