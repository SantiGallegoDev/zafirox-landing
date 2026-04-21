export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'calendar',
    title: 'Agenda inteligente 24/7',
    description: 'Tus clientes reservan desde el celular a cualquier hora. El sistema bloquea horarios ocupados. Cero cruces.',
  },
  {
    icon: 'users',
    title: 'Gestión de tu equipo',
    description: 'Cada profesional con su horario, su foto y sus citas. Organiza tu equipo sin preguntar por WhatsApp.',
  },
  {
    icon: 'scissors',
    title: 'Servicios y combos',
    description: 'Desde un corte simple hasta paquetes completos. El precio y la duración se calculan solos.',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp automático',
    description: 'Confirmación y recordatorio por WhatsApp sin que muevas un dedo. Tu cliente llega a tiempo.',
  },
  {
    icon: 'globe',
    title: 'Tu página web propia',
    description: 'Página profesional con tus servicios, tu equipo y tu link de agendamiento. Lista en minutos.',
  },
  {
    icon: 'chart',
    title: 'Reportes que hablan claro',
    description: 'Cuánto facturaste, cuántas citas completaste, quién produce más. Todo exportable y al día.',
  },
];
