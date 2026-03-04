import type { HowTo, WithContext } from 'schema-dts';

export const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo empezar a usar Zafirox para tu barbería',
  description: 'Tres pasos para organizar tu barbería con Zafirox, la plataforma de agendamiento online.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Crea tu cuenta',
      text: 'Registra tu barbería, agrega tus servicios y tus barberos con foto. Listo en 10 minutos.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Comparte tu link',
      text: 'Envía el link de tu página por WhatsApp o redes. Tu cliente elige servicio, barbero, día y hora.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Controla todo',
      text: 'Recibe citas automáticamente, el cliente recibe confirmación por WhatsApp y tú ves todo en tu panel.',
    },
  ],
};
