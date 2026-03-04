export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Antes anotaba todo en el celular y se me olvidaba la mitad. Ahora mis clientes agendan solos y yo me concentro en cortar.',
    name: 'Carlos M.',
    business: 'Barbería Los Cracks',
    location: 'Armenia',
  },
  {
    quote: 'Lo mejor es el WhatsApp automático. Mis clientes llegan a tiempo porque les llega el recordatorio. Se acabó el "se me olvidó".',
    name: 'Andrés R.',
    business: 'Studio Barber',
    location: 'Armenia',
  },
  {
    quote: 'Los reportes me abrieron los ojos. No sabía cuánto estaba facturando realmente hasta que vi los números.',
    name: 'Felipe G.',
    business: 'The King Barbershop',
    location: 'Armenia',
  },
];

export const stats = [
  { value: 150, prefix: '+', label: 'Barberías activas' },
  { value: 2500, prefix: '+', label: 'Citas agendadas al mes' },
  { value: 98, suffix: '%', label: 'Clientes puntuales' },
  { value: 4.9, suffix: '/5', label: 'Satisfacción de admins' },
];
