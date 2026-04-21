export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export const painpoints: PainPoint[] = [
  {
    icon: 'calendar-x',
    title: 'Citas que se pierden entre WhatsApps',
    description: 'Agendar en libreta o por chat lleva a olvidos, dobles reservas y clientes que no vuelven por la mala experiencia.',
  },
  {
    icon: 'clock',
    title: 'Horas muertas sin que lo notes',
    description: 'No sabes cuántas citas tienes mañana, ni qué profesional está libre. Tu agenda depende de tu memoria.',
  },
  {
    icon: 'chart-down',
    title: 'Plata que se fuga sin explicación',
    description: 'Sin reportes claros, no sabes cuánto facturaste, quién produce más, ni cuánto dejas de ganar por inasistencias.',
  },
];
