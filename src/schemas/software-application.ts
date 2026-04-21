import type { SoftwareApplication, WithContext } from 'schema-dts';

export const softwareSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Zafirox',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Software de agendamiento online para negocios de servicios (barberías, salones de belleza, estudios de tatuajes, uñas, spa). Gestiona citas, equipo, servicios y clientes con notificaciones automáticas por WhatsApp.',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '59000',
    highPrice: '159000',
    priceCurrency: 'COP',
    offerCount: 3,
  },
};
