export interface FAQItem {
  question: string;
  answer: string;
}

export const faq: FAQItem[] = [
  {
    question: '¿Qué es Zafirox?',
    answer: 'Zafirox es una plataforma de agendamiento online diseñada específicamente para barberías. Permite que tus clientes agenden desde el celular, gestiona tus barberos, servicios, horarios y te da reportes claros de tu negocio.',
  },
  {
    question: '¿Necesito saber de tecnología para usarlo?',
    answer: 'No. Zafirox está diseñado para ser tan fácil como usar WhatsApp. Registras tu barbería, agregas servicios y barberos, y listo. En 10 minutos estás operando.',
  },
  {
    question: '¿Cómo pago la suscripción?',
    answer: 'Pagas mensual por Nequi o Daviplata. Sin pasarela de pago, sin tarjeta de crédito. Simple.',
  },
  {
    question: '¿Mis clientes tienen que descargar una app?',
    answer: 'No. Todo funciona desde el navegador del celular. Tú compartes un link y tu cliente agenda en segundos.',
  },
  {
    question: '¿Cómo funcionan los recordatorios de WhatsApp?',
    answer: 'Cuando un cliente agenda, recibe automáticamente un mensaje de confirmación por WhatsApp con todos los detalles. Antes de la cita, recibe un recordatorio. Tú no tienes que hacer nada.',
  },
  {
    question: '¿Puedo probar gratis?',
    answer: 'Actualmente no ofrecemos prueba gratuita, pero puedes ver una demo personalizada y comenzar a usar Zafirox desde $59.000 al mes.',
  },
  {
    question: '¿Qué pasa si un barbero necesita bloquear un horario?',
    answer: 'El admin puede bloquear cualquier franja horaria de cualquier barbero en cualquier momento. Los clientes solo ven las horas disponibles.',
  },
  {
    question: '¿Puedo cancelar cuando quiera?',
    answer: 'Sí. No hay contratos ni permanencia. Pagas mes a mes y puedes cancelar cuando lo necesites.',
  },
];
