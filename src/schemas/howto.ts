import type { HowTo, WithContext } from 'schema-dts';

export const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo empezar a usar Zafirox en tu negocio de servicios',
  description: 'Tres pasos para organizar tu negocio con Zafirox, la plataforma de agendamiento online para barberías, salones, tatuajes y más.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Crea tu cuenta',
      text: 'Registra tu negocio, agrega tus servicios y tu equipo con foto. Listo en 10 minutos.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Comparte tu link',
      text: 'Envía el link de tu página por WhatsApp, Instagram o redes. Tu cliente elige servicio, profesional, día y hora.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Controla todo',
      text: 'Recibe citas automáticamente, el cliente recibe confirmación por WhatsApp y tú lo ves todo desde tu panel.',
    },
  ],
};
