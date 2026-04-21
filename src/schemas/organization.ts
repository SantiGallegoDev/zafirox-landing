import type { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zafirox',
  url: 'https://zafirox-landing.vercel.app/',
  logo: 'https://zafirox-landing.vercel.app/favicon.svg',
  description: 'Plataforma de agendamiento online para negocios de servicios en Colombia: barberías, salones de belleza, estudios de tatuajes, uñas, spa y más. Gestiona citas, equipo, servicios y clientes desde un solo lugar.',
  foundingDate: '2026',
  areaServed: {
    '@type': 'Place',
    name: 'Colombia',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Armenia',
      addressRegion: 'Quindío',
      addressCountry: 'CO',
    },
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hola@zafirox.com',
    availableLanguage: 'Spanish',
  },
};
