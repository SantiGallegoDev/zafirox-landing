export interface RoiMetric {
  value: string;
  label: string;
  detail: string;
  countTo: number;
  prefix?: string;
  suffix?: string;
}

export const roiMetrics: RoiMetric[] = [
  {
    value: '6h',
    label: 'Horas recuperadas por semana',
    detail: 'Tu equipo deja de contestar WhatsApps para agendar. La agenda se llena sola.',
    countTo: 6,
    suffix: 'h',
  },
  {
    value: '40%',
    label: 'Menos inasistencias',
    detail: 'Los recordatorios automáticos por WhatsApp reducen hasta 40% los "no llegó".',
    countTo: 40,
    suffix: '%',
  },
  {
    value: '3x',
    label: 'Más reservas fuera de horario',
    detail: 'Tus clientes agendan a las 11pm desde el celular. Tú despiertas con la agenda llena.',
    countTo: 3,
    suffix: 'x',
  },
  {
    value: '$1.2M',
    label: 'Facturación extra al mes*',
    detail: 'Con 2-3 citas recuperadas por semana, el plan se paga solo y te queda ganancia.',
    countTo: 1.2,
    prefix: '$',
    suffix: 'M',
  },
];

export const roiDisclaimer =
  '*Estimado basado en negocios con ticket promedio de $45.000 COP. Resultados varían según tu operación.';
