export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'calendar',
    title: 'Agenda inteligente',
    description: 'Tus clientes agendan solos desde el celular. El sistema bloquea horarios automáticamente. Cero cruces.',
  },
  {
    icon: 'users',
    title: 'Gestión de barberos',
    description: 'Cada barbero con su horario, su foto y sus citas. Organiza tu equipo sin preguntar por WhatsApp.',
  },
  {
    icon: 'scissors',
    title: 'Servicios y combos',
    description: 'Corte + barba + cejas en un solo click. El precio y la duración se calculan solos.',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp automático',
    description: 'Confirmación y recordatorio de cita por WhatsApp. Tu cliente llega a tiempo sin que tú hagas nada.',
  },
  {
    icon: 'globe',
    title: 'Tu página web propia',
    description: 'Página profesional con tus servicios, tus barberos y tu link de agendamiento. Lista en minutos.',
  },
  {
    icon: 'chart',
    title: 'Reportes que hablan claro',
    description: 'Cuánto facturaste, cuántas citas completaste, quién es tu mejor barbero. Todo exportable.',
  },
];
