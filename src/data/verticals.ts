export interface Vertical {
  icon: string;
  name: string;
  example: string;
}

export const verticals: Vertical[] = [
  {
    icon: 'scissors',
    name: 'Barberías',
    example: 'Corte, barba, cejas y combos con tu barbero de confianza.',
  },
  {
    icon: 'sparkles',
    name: 'Salones de belleza',
    example: 'Color, keratina, peinados y paquetes con la estilista que eligen.',
  },
  {
    icon: 'needle',
    name: 'Estudios de tatuajes',
    example: 'Sesiones por hora, reservas con depósito y agenda por tatuador.',
  },
  {
    icon: 'nail',
    name: 'Uñas y estética',
    example: 'Manicura, pedicura, pestañas y tratamientos con horarios reales.',
  },
  {
    icon: 'spa',
    name: 'Spa y bienestar',
    example: 'Masajes, faciales y rituales con duraciones variables bien manejadas.',
  },
];
