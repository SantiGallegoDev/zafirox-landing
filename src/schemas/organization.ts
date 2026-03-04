import type { Organization, WithContext } from 'schema-dts';

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zafirox',
  url: 'https://santigallegodev.github.io/zafirox-landing/',
  logo: 'https://santigallegodev.github.io/zafirox-landing/favicon.svg',
  description: 'Plataforma de agendamiento online para barberías en Colombia. Gestiona citas, barberos, servicios y clientes desde un solo lugar.',
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
