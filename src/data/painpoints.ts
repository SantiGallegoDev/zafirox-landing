export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export const painpoints: PainPoint[] = [
  {
    icon: 'calendar-x',
    title: 'Citas perdidas, clientes frustrados',
    description: 'Anotar citas en papel o en la cabeza lleva a olvidos, cruces y clientes que no vuelven.',
  },
  {
    icon: 'clock',
    title: 'Horas muertas sin control',
    description: 'No sabes cuántas citas tienes mañana, ni qué barbero está libre. Tu agenda es un caos.',
  },
  {
    icon: 'chart-down',
    title: 'Plata que se pierde sin darte cuenta',
    description: 'Sin reportes, no sabes cuánto facturaste, quién es tu mejor barbero, ni cuánto dejaste de ganar.',
  },
];
