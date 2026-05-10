# Sano Healthcare and Tourism FAQ + Schema Alignment (Pass 3)

## AEO-Optimized FAQ Replacements

1. **What is Sano Healthcare and Tourism?**  
Sano Healthcare and Tourism is a care coordination platform that helps you plan Ayurveda treatment and retreat-based healing journeys in India with verified experts.

2. **Who should consider Ayurveda treatment in India?**  
People seeking holistic support for stress, lifestyle disorders, pain, digestive concerns, and preventive wellness often choose Ayurveda programs in India.

3. **How do I know which treatment is right for me?**  
You start with a doctor review. Based on your condition, history, and goals, we recommend a practical treatment path and retreat format.

4. **Can I consult online before I travel?**  
Yes. You can take an online consultation first, share reports, and confirm suitability before finalizing travel.

5. **How long do Ayurveda programs usually take?**  
Program duration varies by need. Short wellness plans can be 7-10 days, while deeper detox and recovery plans often run 14-28 days.

6. **Is Panchakarma safe for everyone?**  
Not for everyone. Suitability depends on age, condition, and clinical profile, so doctor screening is always required before starting.

7. **What results should I expect?**  
Most people report gradual improvements in sleep, stress, digestion, pain management, and overall energy when they follow the full plan.

8. **Do you help with accommodation and logistics?**  
Yes. We support treatment planning, retreat coordination, stay options, and practical travel guidance.

9. **How much does an Ayurveda retreat cost?**  
Cost depends on destination, program duration, and inclusions. We provide transparent options so you can compare before booking.

10. **Can international patients book through Sano Healthcare and Tourism?**  
Yes. International patients can consult remotely, confirm programs, and travel with structured pre-arrival guidance.

11. **Will I get a personalized diet and routine plan?**  
Yes. Most programs include personalized food and daily routine guidance based on your constitution and treatment goals.

12. **Do you provide follow-up after the retreat?**  
Yes. Follow-up helps maintain results and adjust your plan for long-term continuity after you return home.

## FAQPage JSON-LD (Aligned)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Sano Healthcare and Tourism?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sano Healthcare and Tourism is a care coordination platform that helps you plan Ayurveda treatment and retreat-based healing journeys in India with verified experts."
      }
    },
    {
      "@type": "Question",
      "name": "Can I consult online before I travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can take an online consultation first, share reports, and confirm suitability before finalizing travel."
      }
    },
    {
      "@type": "Question",
      "name": "How long do Ayurveda programs usually take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Program duration varies by need. Short wellness plans can be 7-10 days, while deeper detox and recovery plans often run 14-28 days."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an Ayurveda retreat cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cost depends on destination, program duration, and inclusions. We provide transparent options so you can compare before booking."
      }
    }
  ]
}
```

## Organization/Service Schema Consistency Notes
- Use one brand string everywhere: `Sano Healthcare and Tourism`.
- Keep treatment claims realistic; avoid guaranteed cure language.
- Keep keywords consistent with page intent: `Ayurveda treatment in India`, `Ayurveda retreats in India`, `Ayurveda doctors in India`.
- Ensure FAQs on page match schema question text exactly.
