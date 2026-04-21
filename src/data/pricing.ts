export interface PricingTier {
  name: string;
  price: string;
  priceNum: number;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    name: 'Básico',
    price: '$59.000',
    priceNum: 59000,
    period: 'COP / mes',
    featured: false,
    features: [
      'Acceso como administrador',
      'Agenda online 24/7',
      'Página pública propia',
      'WhatsApp (confirmación + recordatorio)',
      'Reportes básicos',
      'Soporte por WhatsApp',
    ],
    cta: 'Elegir Básico',
  },
  {
    name: 'Profesional',
    price: '$99.000',
    priceNum: 99000,
    period: 'COP / mes',
    featured: true,
    badge: 'Recomendado',
    features: [
      'Hasta 6 profesionales',
      'Todo del Básico +',
      'Login propio para cada profesional',
      'Reportes completos + exportación',
      'Servicios y combos',
      'Bloqueo flexible de horarios',
      'Soporte prioritario',
    ],
    cta: 'Elegir Profesional',
  },
  {
    name: 'Premium',
    price: '$159.000',
    priceNum: 159000,
    period: 'COP / mes',
    featured: false,
    features: [
      'Profesionales ilimitados',
      'Todo del Profesional +',
      'Dominio propio (próximamente)',
      'Funciones avanzadas (próximamente)',
      'Soporte dedicado',
    ],
    cta: 'Elegir Premium',
  },
];
