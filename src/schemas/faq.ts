import type { FAQPage, WithContext } from 'schema-dts';
import { faq } from '../data/faq';

export const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer' as const,
      text: item.answer,
    },
  })),
};
