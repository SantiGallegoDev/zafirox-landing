import type { Offer, WithContext } from 'schema-dts';

export const offersSchema: WithContext<Offer>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Zafirox Básico',
    price: '59000',
    priceCurrency: 'COP',
    description: 'Plan básico para barberías con acceso como administrador. Incluye agenda online, página pública, WhatsApp automático y reportes básicos.',
    eligibleRegion: {
      '@type': 'Place',
      name: 'Colombia',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Zafirox Profesional',
    price: '99000',
    priceCurrency: 'COP',
    description: 'Plan profesional para barberías con hasta 6 barberos. Incluye login para barberos, reportes completos con exportación, servicios combinados y soporte prioritario.',
    eligibleRegion: {
      '@type': 'Place',
      name: 'Colombia',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Zafirox Premium',
    price: '159000',
    priceCurrency: 'COP',
    description: 'Plan premium para barberías con barberos ilimitados. Incluye dominio propio, funciones avanzadas y soporte dedicado.',
    eligibleRegion: {
      '@type': 'Place',
      name: 'Colombia',
    },
  },
];
