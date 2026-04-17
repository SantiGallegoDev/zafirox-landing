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
      'Agenda online',
      'Página pública',
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
      'Hasta 6 barberos',
      'Todo del Básico +',
      'Login propio para barberos',
      'Reportes completos + exportación',
      'Servicios combinados',
      'Bloqueo de horarios',
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
      'Barberos ilimitados',
      'Todo del Profesional +',
      'Dominio propio (próximamente)',
      'Funciones avanzadas (próximamente)',
      'Soporte dedicado',
    ],
    cta: 'Elegir Premium',
  },
];
