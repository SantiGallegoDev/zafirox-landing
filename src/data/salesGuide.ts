/**
 * Contenido de la Guía de Venta interna de Zafirox.
 * Se consume desde /guia-de-venta (src/pages/guia-de-venta.astro).
 *
 * Mantén este archivo como única fuente de verdad — si cambian precios,
 * features o argumentos de venta, se actualiza aquí.
 */

export interface PitchVariant {
  duration: string;
  text: string;
}

export const pitches: PitchVariant[] = [
  {
    duration: '10 segundos',
    text:
      'Zafirox es la agenda online con WhatsApp automático para barberías, salones y estudios de tatuajes. Tus clientes reservan solos, tú atiendes.',
  },
  {
    duration: '30 segundos',
    text:
      'Zafirox es una plataforma colombiana que convierte tu negocio de servicios en una operación profesional: tu propia página de reservas, agenda online 24/7, WhatsApp automático para confirmación y recordatorio, control de cada profesional y reportes claros. Todo desde $59.000 al mes. 3 días gratis, sin tarjeta.',
  },
  {
    duration: '60 segundos (la versión que convence)',
    text:
      '¿Cuántas citas se te pierden por no contestar el WhatsApp a tiempo? ¿Cuántas veces tu profesional no sabe a quién le toca primero? Zafirox resuelve eso. Tu cliente entra a tu link, elige servicio, elige profesional, elige hora — y recibe confirmación por WhatsApp al instante. Tres horas antes le llega el recordatorio con botón de confirmar o cancelar. Tú solo llegas a cortar, peinar o tatuar. Desde $59.000 al mes, con 3 días de prueba gratis. Y si no te convence, no pagas nada.',
  },
];

// ─────────────────────────────────────────────────────────
//  ICP (Ideal Customer Profile)
// ─────────────────────────────────────────────────────────

export interface ICPItem {
  title: string;
  items: string[];
}

export const idealProspect: ICPItem = {
  title: 'Prospecto ideal (lo queremos)',
  items: [
    'Barbería, salón de belleza, estudio de tatuajes, spa o centro de uñas',
    'Opera en Armenia, Pereira, Manizales o el Eje Cafetero',
    '2 a 6 profesionales (el sweet spot del plan Profesional)',
    'Tiene cuenta activa de WhatsApp Business o personal',
    'Ya pierde citas por descoordinación con su agenda',
    'El dueño es joven-medio (25-45) o tiene un familiar que lo asesora',
    'Quiere verse profesional ante su cliente',
    'Factura entre $4M y $20M mensuales',
  ],
};

export const badProspect: ICPItem = {
  title: 'Señales de que NO es el prospecto (no forzar)',
  items: [
    'Dueño mayor de 60 años sin familiar tech que lo acompañe',
    'Ubicado en zona sin cobertura de internet estable',
    'Factura menos de $2M/mes — probablemente no pueda pagar',
    'No quiere que sus clientes reserven solos (quiere control manual)',
    'Ya tiene un sistema contable/operativo que no piensa cambiar',
    'Está de paso / arrienda por días / negocio informal sin intención de crecer',
    'Pide descuento agresivo antes de ver la demo',
  ],
};

// ─────────────────────────────────────────────────────────
//  Propuesta de valor: pain → solution
// ─────────────────────────────────────────────────────────

export interface ValuePair {
  pain: string;
  solution: string;
  proof?: string;
}

export const valueProps: ValuePair[] = [
  {
    pain: '"Se me pierden citas porque no alcanzo a contestar WhatsApp a tiempo."',
    solution:
      'Tu cliente agenda solo desde tu link, sin esperarte. Recibe confirmación automática. Tú dejas de depender de tu velocidad de respuesta.',
    proof: 'Una cita perdida de $25.000 ya pagó 40% de tu mensualidad.',
  },
  {
    pain: '"Mis profesionales se pelean por quién atiende primero."',
    solution:
      'Cada profesional tiene su propia agenda visible. El cliente elige al profesional que quiere. Cero discusión.',
  },
  {
    pain: '"No sé cuánto facturé este mes ni qué servicio me deja más plata."',
    solution:
      'Reportes en tiempo real: ingresos por día, por profesional, por servicio, horas pico, clientes frecuentes. Descargas en Excel o PDF.',
    proof: 'Saber qué servicio deja más te permite subirle el precio al que más pides.',
  },
  {
    pain: '"Mi competencia ya tiene página web y yo no."',
    solution:
      'En 10 minutos tienes tu página pública con tu marca, servicios, profesionales y botón de "Agendar ahora". Mejor que muchas barberías en Medellín.',
  },
  {
    pain: '"No quiero complicarme con pagos por internet ni pasarelas."',
    solution:
      'Pagas la mensualidad por Nequi o Daviplata. Sin tarjeta de crédito, sin comisiones de pasarela. Igual que le pagas al lavador del carro.',
  },
  {
    pain: '"Los clientes se me olvidan la cita y pierdo la plata."',
    solution:
      'Tres horas antes, WhatsApp automático con botón de confirmar o cancelar. Si cancela, tu horario queda libre y lo puede tomar otro.',
    proof: 'Negocios similares reportan hasta 40% menos inasistencias con recordatorios.',
  },
];

// ─────────────────────────────────────────────────────────
//  Framework de contacto: 5 pasos
// ─────────────────────────────────────────────────────────

export interface Step {
  number: string;
  title: string;
  goal: string;
  scripts: string[];
  tips: string[];
}

export const callFramework: Step[] = [
  {
    number: '01',
    title: 'Saludo + permiso',
    goal: 'Abrir la conversación sin sonar a vendedor molestón.',
    scripts: [
      '"Hola [Nombre], qué más. Te escribo de Zafirox, una plataforma colombiana de agenda online para barberías/salones. ¿Tienes 2 minutos para contarte brevemente?"',
      '"Bueno días / buenas tardes. ¿Hablo con el dueño de [Nombre del negocio]?"',
    ],
    tips: [
      'Usa el nombre del negocio, no un saludo genérico.',
      'Pide permiso antes de atacar con información.',
      'Si te dicen "ahora no", agenda fecha/hora concreta para volver.',
    ],
  },
  {
    number: '02',
    title: 'Descubrimiento',
    goal: 'Encontrar el dolor. El que más duele es el que cierra la venta.',
    scripts: [
      '"¿Cómo manejan las citas hoy? ¿WhatsApp, cuaderno, otra app?"',
      '"¿Cuántos profesionales trabajan con usted?"',
      '"¿Le ha pasado que se le pierden citas por no contestar a tiempo o por cruce de horarios?"',
      '"¿Manda recordatorios? ¿Cuántos clientes se le quedan sin venir?"',
    ],
    tips: [
      'Escucha más de lo que hablas. Si el prospecto habla 70%, vas bien.',
      'Anota el dolor específico — lo vas a repetir cuando le muestres la solución.',
      'No vendas todavía. Solo pregunta.',
    ],
  },
  {
    number: '03',
    title: 'Presentación enfocada',
    goal: 'Mostrar SOLO lo que resuelve el dolor que mencionó. No recites features.',
    scripts: [
      '"Lo que me cuenta pasa mucho. Mira lo que hace Zafirox: [muestra la pieza específica]."',
      '"Esto resolvería exactamente lo del cruce de horarios que me mencionaste."',
    ],
    tips: [
      'Si puedes, abre app.zafirox.com.co y muéstrale una demo en vivo.',
      'No menciones features que no le importan (ej: no hables de reportes a alguien que lo que le duele es agenda).',
      'Usa sus palabras al describir el beneficio.',
    ],
  },
  {
    number: '04',
    title: 'Cierre suave',
    goal: 'Convertir el interés en acción inmediata.',
    scripts: [
      '"Te propongo algo: activemos los 3 días gratis ahora. Si te sirve, pagas el mes. Si no, no nos debes nada."',
      '"Mientras hablamos, creo tu negocio y te mando el link en 5 minutos. ¿Qué email usas?"',
      '"¿Qué te parece si empezamos con el Profesional? Incluye login para tus [N] profesionales y reportes. Son $99.000 al mes."',
    ],
    tips: [
      'Siempre ofrece los 3 días gratis primero.',
      'Toma el compromiso pequeño: el email. De ahí el setup lo haces tú.',
      'Si dice "lo pienso", acepta — pero agenda el próximo contacto.',
    ],
  },
  {
    number: '05',
    title: 'Onboarding post-sí',
    goal: 'Dejar al cliente operando el día 1. Un cliente que no usa la app cancela en semana 2.',
    scripts: [
      '"Listo, te mando las credenciales. ¿Cuándo podemos hacer un video de 20 minutos para dejarte todo armado?"',
      '"Hagamos juntos el primer profesional, el primer servicio y agendamos una cita de prueba en 5 minutos."',
    ],
    tips: [
      'Agenda el setup el mismo día o el siguiente — no lo dejes para "la próxima semana".',
      'Dile "vamos a agendar tu primera cita de prueba" en vivo para que vea cómo se siente.',
      'Seguimiento día 1, día 3 y día 7. Ahí se queda o se va.',
    ],
  },
];

// ─────────────────────────────────────────────────────────
//  Objeciones — respuestas profundas
// ─────────────────────────────────────────────────────────

export interface Objection {
  objection: string;
  context: string;
  responses: string[];
  followup?: string;
}

export const objections: Objection[] = [
  {
    objection: '"Yo llevo años con WhatsApp y me va bien, no necesito eso."',
    context:
      'La objeción más común. El prospecto no niega el problema, solo dice que ya lo "resuelve". En realidad está perdiendo plata sin saberlo.',
    responses: [
      'Reconoce: "Claro, WhatsApp funciona — es lo que todos usamos. Pero déjame hacerte una pregunta: en un día cualquiera, ¿cuántos mensajes recibes mientras estás cortando?"',
      'Amplifica: "Zafirox no reemplaza a WhatsApp; lo vuelve automático. El cliente agenda solo, y WhatsApp manda la confirmación por ti. Sigue siendo WhatsApp, pero sin que tú tengas que responder."',
      'Cierra: "Pruébalo 3 días. Si al final me dices que WhatsApp manual te servía igual, no pagas nada."',
    ],
    followup:
      'Si insiste: pregúntale cuánto cuesta una cita promedio y cuántas pierde al mes. Haz la cuenta en voz alta.',
  },
  {
    objection: '"Está caro. Yo no puedo pagar eso todos los meses."',
    context:
      'Casi siempre es una objeción de valor, no de precio. No ha visto por qué paga.',
    responses: [
      'Reencuadra: "$59.000 al mes son menos de $2.000 al día. Dos mil pesos. Con que recuperes UNA cita de $25.000 al mes, ya te pagó el plan 10 veces."',
      'Alternativa: "Si $59.000 es mucho ahorita, arranca con los 3 días gratis. En ese tiempo vas a ver cuánta plata estás dejando de hacer sin esto."',
      'Compara: "Lo que gastas en un corte de cabello tú mismo — una vez al mes — te paga el plan básico completo."',
    ],
    followup:
      'Si sigue en "es caro", pregunta: "¿Cuánto esperarías pagar por algo así?". A veces el techo es menor y ahí sabes si es plan básico o no aplica.',
  },
  {
    objection: '"No sé manejar esas cosas, soy muy malo con la tecnología."',
    context: 'Miedo, no desinterés. Necesita que alguien lo acompañe.',
    responses: [
      'Tranquilízalo: "Para eso estoy yo. Te armo el negocio completo contigo al lado en 20 minutos por videollamada. Agregamos tus servicios, tus profesionales, y listo."',
      'Minimiza: "Si sabes usar WhatsApp, sabes usar Zafirox. Es más fácil que Waze."',
      'Comprométete: "Los primeros 15 días estoy yo por WhatsApp para lo que necesites. Cualquier duda me preguntas."',
    ],
  },
  {
    objection: '"¿Y si mis clientes no saben usar eso?"',
    context:
      'Duda legítima. El prospecto no quiere complicar la vida de su clientela.',
    responses: [
      '"Tus clientes no tienen que descargar nada. Reciben tu link, hacen clic, eligen — listo. Es tan fácil como pedir un Uber."',
      '"Mira." — muéstrale en tu celular cómo se ve desde el lado del cliente. Que lo viva.',
      '"Y si un cliente quiere seguir agendando por WhatsApp, lo puede seguir haciendo. Esto es para los que prefieren no escribir."',
    ],
  },
  {
    objection: '"Déjame pensarlo / hablar con mi esposa / consultar."',
    context:
      'El 60% de las veces significa "no". El 40% son genuinos. Hay que manejar ambas.',
    responses: [
      'Acepta: "Clarísimo. ¿Qué parte específicamente te da dudas? A veces es más fácil despejarlo ya."',
      'Agenda: "Perfecto. ¿Te llamo el [día concreto] a las [hora concreta]?" No dejes abierto.',
      'Enganche: "Mientras lo piensas, te activo los 3 días gratis. Así cuando decidas ya tienes el sistema probado, no estás imaginando."',
    ],
    followup:
      'NUNCA cierres el contacto sin una fecha concreta de seguimiento. "Cualquier cosa me avisas" es el cementerio de ventas.',
  },
  {
    objection: '"Ya vi otra app que ofrece lo mismo."',
    context: 'Diferenciación es clave. No ataques al competidor, posiciónate.',
    responses: [
      'Pregunta: "¿Cuál viste? Me interesa saber para entender con qué comparas."',
      'Diferenciate: "Zafirox está hecho aquí, en Colombia, con soporte en español y pago por Nequi o Daviplata. Nada de pasarelas internacionales ni soporte en inglés."',
      'Enfatiza soporte: "Yo te respondo personalmente por WhatsApp. No es un ticket a un call center."',
    ],
  },
  {
    objection: '"¿Y si me retiran la app? ¿Qué pasa con mis datos?"',
    context: 'Cliente desconfiado/quisquilloso. Buena señal — le importa.',
    responses: [
      '"Tus datos son tuyos. Puedes exportar tu historial de clientes y citas cuando quieras, en Excel o PDF."',
      '"Si algún día quieres cancelar, lo haces y te vas con toda tu información."',
      '"No firmamos contrato ni te amarramos. Pagas mes a mes — si dejas de pagar, listo, no pasa nada, pero tus datos siguen siendo tuyos."',
    ],
  },
  {
    objection: '"Mándame información y yo reviso."',
    context:
      'Técnica de escape. Si mandas un PDF sin volver a llamar, se perdió.',
    responses: [
      'Acepta + enlaza: "Te mando el link de la landing — zafirox.com.co — y te llamo mañana a las [hora] para resolverte dudas. ¿Te va?"',
      'Invierte: "Mejor te hago una demo de 10 minutos ahora mismo, así me haces las preguntas en vivo. ¿Ahora o en 30 minutos?"',
      'Filtra: "Si me dices tu negocio, te mando un link ya preconfigurado con tu nombre, para que veas cómo se vería."',
    ],
  },
  {
    objection: '"Después de navidad / después de vacaciones / el próximo mes."',
    context:
      'Postergación. Casi siempre significa "no me animo todavía".',
    responses: [
      '"Entiendo. Pero si arrancas antes de navidad, navidad la haces con la agenda llena y organizada. Si arrancas después, pierdes la temporada alta."',
      '"Activemos los 3 días gratis hoy, aunque sea para que veas. El pago formal lo arrancas en [fecha]. Así no perdemos el envión."',
    ],
  },
  {
    objection: '"Eso funciona en Bogotá o Medellín, no en Armenia."',
    context:
      'Desconfianza geográfica. Colombia regionalista.',
    responses: [
      '"Zafirox está hecho pensando en Armenia, Manizales y Pereira. Los fundadores son quindianos."',
      '"Los pagos por Nequi, el idioma, las barberías del Eje Cafetero — todo pensado para aquí, no para Bogotá."',
    ],
  },
];

// ─────────────────────────────────────────────────────────
//  Preguntas típicas del cliente NORMAL
// ─────────────────────────────────────────────────────────

export interface QA {
  q: string;
  a: string;
}

export const normalClientFAQ: QA[] = [
  {
    q: '¿Qué es exactamente Zafirox?',
    a: 'Una página web donde tus clientes pueden reservar sus citas solos, 24 horas al día, sin tener que escribirte. Tú ves todo lo que agendan en tu celular o computador.',
  },
  {
    q: '¿Mis clientes tienen que descargar una app?',
    a: 'No. Abren el link que tú les mandas (por WhatsApp, Instagram, Google o donde sea) y agendan ahí mismo desde el celular. Es como pedir un Rappi — sin instalar nada.',
  },
  {
    q: '¿Necesito computador?',
    a: 'No. Todo lo puedes manejar desde el celular. También funciona en computador si prefieres.',
  },
  {
    q: '¿Tengo que dejar los datos de mi tarjeta?',
    a: 'No. Se paga la mensualidad por Nequi o Daviplata. Sin tarjeta de crédito ni nada raro.',
  },
  {
    q: '¿Y si no me gusta después de los 3 días?',
    a: 'No pagas nada. No hay contrato ni penalidad. Se cierra la cuenta y listo.',
  },
  {
    q: '¿Sirve para uñas / cejas / masajes / tatuajes?',
    a: 'Sí. Es para cualquier negocio que venda servicios por cita. Solo tú defines tus servicios, cuánto duran y cuánto cuestan.',
  },
  {
    q: '¿Cuánto demora montarlo?',
    a: 'Entre 10 y 30 minutos. Si quieres yo te ayudo por videollamada y lo dejamos armado juntos en menos de media hora.',
  },
  {
    q: '¿Mis profesionales pueden ver sus propias citas?',
    a: 'Sí, desde el plan Profesional. Cada profesional tiene su login y ve solo sus citas y sus reportes.',
  },
  {
    q: '¿Los clientes se pueden registrar o tienen que hacer cuenta?',
    a: 'No se tienen que registrar. Ponen su nombre, su teléfono, y reservan. Con el teléfono ya los identificamos para la próxima vez.',
  },
  {
    q: '¿Cómo le llega el recordatorio al cliente?',
    a: 'Por WhatsApp, automático, 3 horas antes de la cita, con botón para confirmar o cancelar. Tú no tienes que hacer nada.',
  },
  {
    q: '¿Puedo bloquear un día (vacaciones, enfermedad, etc.)?',
    a: 'Sí. Puedes bloquear días completos o franjas horarias específicas de cualquier profesional. Los clientes ven solo las horas disponibles.',
  },
  {
    q: '¿Se ve bonito? ¿Puedo poner mi logo?',
    a: 'La página pública se ve profesional, en negro y dorado. En el plan Premium (próximamente) podrás usar tu dominio y tu marca propia.',
  },
  {
    q: '¿Cuántos clientes / citas puedo tener?',
    a: 'Ilimitados en todos los planes. La diferencia entre planes es el número de profesionales.',
  },
  {
    q: '¿Qué pasa si falla el internet?',
    a: 'El que se queda sin internet es quien esté intentando agendar en ese momento. Cuando vuelve, puede agendar. Tu agenda ya guardada no se pierde.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. Avisas, pagas el mes que estés usando, y listo. Sin drama.',
  },
];

// ─────────────────────────────────────────────────────────
//  Preguntas del cliente TÉCNICO / QUISQUILLOSO
// ─────────────────────────────────────────────────────────

export const technicalFAQ: QA[] = [
  {
    q: '¿Dónde se almacenan los datos? ¿Servidores propios o cloud?',
    a: 'Base de datos PostgreSQL en Railway (infraestructura gestionada sobre AWS). La aplicación corre en Railway también; el frontend en Vercel. Backups automáticos diarios.',
  },
  {
    q: '¿Qué tecnologías usan?',
    a: 'Backend: FastAPI (Python 3.13) con SQLAlchemy asíncrono. Frontend: Astro + islas interactivas. PostgreSQL 16. Autenticación JWT. Tailwind para UI. Todo moderno, no stack obsoleto.',
  },
  {
    q: '¿Cumplen con la Ley 1581 (Habeas Data) de Colombia?',
    a: 'Sí. Solo almacenamos los datos mínimos necesarios (nombre, teléfono, email opcional). No compartimos con terceros. El cliente final puede solicitar la eliminación de sus datos. La política de privacidad está publicada en el sitio.',
  },
  {
    q: '¿Cómo protegen los datos? ¿Está encriptado?',
    a: 'Tráfico HTTPS (TLS 1.3) de extremo a extremo. Passwords con bcrypt. Base de datos con encripción at-rest gestionada por Railway. Headers de seguridad activos (HSTS, CSP, X-Frame-Options).',
  },
  {
    q: '¿Tienen API pública?',
    a: 'Tenemos una API interna REST bajo /api/v1/. Exponerla como pública con llaves por cliente está en el roadmap, pero aún no está disponible. Sí exponemos el endpoint público de reservas /public/booking/{slug}.',
  },
  {
    q: '¿Puedo exportar todos mis datos?',
    a: 'Sí. Desde el panel de reportes exportas a Excel o PDF tu historial de citas, ingresos, clientes y servicios. Si necesitas un dump completo en CSV, lo solicitas por soporte y te lo mandamos.',
  },
  {
    q: '¿Multi-tenant? ¿Cómo garantizan que mis datos no los vea otro negocio?',
    a: 'Sí, arquitectura multi-tenant. Cada negocio (tenant) tiene su business_id. Todos los queries filtran por ese ID y los permisos están validados en cada endpoint. Está cubierto con pruebas automatizadas de aislamiento.',
  },
  {
    q: '¿Qué uptime manejan? ¿Hay SLA?',
    a: 'Targeting 99.5% uptime mensual. No firmamos SLA formal en los planes básicos; en Premium podemos conversar. La plataforma (Railway + Vercel) garantiza 99.9% a nivel de infraestructura.',
  },
  {
    q: '¿Puedo tener mi propio dominio?',
    a: 'En el plan Premium. Apuntas un CNAME y tu página queda como agenda.tunegocio.com.',
  },
  {
    q: '¿Hay integración con Google Calendar / iCal?',
    a: 'Aún no — está en el roadmap. Por ahora exportas las citas manualmente. Si es bloqueador, dime y priorizamos.',
  },
  {
    q: '¿Integran con pasarelas de pago para cobrarle al cliente final?',
    a: 'No. El cobro al cliente final sigue siendo manual (efectivo, transferencia, lo que tú prefieras). Lo que nosotros cobramos es la mensualidad de la plataforma. Esto baja costos para ti — no nos llevamos comisión por cada cita.',
  },
  {
    q: '¿Pueden hacer backup de mis datos y restaurar si borro algo sin querer?',
    a: 'Railway hace backups diarios automáticos. Si borras algo por error, dentro de las primeras 24h podemos recuperarlo. Después de 7 días el backup rota.',
  },
  {
    q: '¿El código es open source?',
    a: 'No. Es propietario. Pero lo mantiene un equipo real (no un proyecto hobby).',
  },
  {
    q: '¿Qué pasa si tu empresa quiebra o la venden?',
    a: 'Con 30 días de aviso te damos acceso a exportar todo. No te dejamos atrapado. Si la venden, seguirá operando — no se apaga de la noche a la mañana.',
  },
  {
    q: '¿WhatsApp oficial o no oficial? ¿Me pueden banear?',
    a: 'WhatsApp Business API oficial vía Twilio / Meta. Usamos un único número Zafirox centralizado. No se usa la cuenta personal del negocio, así que no hay riesgo de baneo para ti.',
  },
  {
    q: '¿Manejan concurrencia si dos clientes reservan la misma hora al tiempo?',
    a: 'Sí. El endpoint de creación valida el slot contra la agenda en el momento del commit y devuelve 409 (Conflict) si otro lo tomó primero. Hay pruebas automatizadas que validan exactamente ese escenario.',
  },
  {
    q: '¿Soportan múltiples sucursales?',
    a: 'Actualmente cada negocio es una unidad. Si tienes 2 sucursales, manejas 2 cuentas separadas. Soporte nativo de multi-sede está en roadmap.',
  },
  {
    q: '¿Qué logs guardan de mi actividad?',
    a: 'Logs de auditoría de creación/modificación/cancelación de citas. No logs de tu navegación ni tracking invasivo.',
  },
];

// ─────────────────────────────────────────────────────────
//  Recomendación de planes
// ─────────────────────────────────────────────────────────

export interface PlanRecommendation {
  plan: string;
  price: string;
  when: string[];
  upsellTrigger: string;
}

export const planGuide: PlanRecommendation[] = [
  {
    plan: 'Básico — $59.000/mes',
    price: '$59.000',
    when: [
      'Barbero/estilista/tatuador solo, sin equipo',
      'Factura menos de $5M/mes',
      'Solo quiere la agenda online y WhatsApp automático',
      'Probando por primera vez una herramienta digital',
    ],
    upsellTrigger:
      'Cuando contrate su primer profesional adicional → subir a Profesional.',
  },
  {
    plan: 'Profesional — $99.000/mes (el más vendido)',
    price: '$99.000',
    when: [
      'Tiene entre 2 y 6 profesionales',
      'Quiere que cada profesional tenga su login y vea solo lo suyo',
      'Necesita reportes completos y exportación a Excel/PDF',
      'Combina servicios (combos) o maneja duraciones variables',
      'Es el 80% de los casos — siempre empieza mencionando este',
    ],
    upsellTrigger:
      'Cuando pase de 6 profesionales o pida dominio propio → Premium.',
  },
  {
    plan: 'Premium — $159.000/mes',
    price: '$159.000',
    when: [
      'Tiene más de 6 profesionales (salones grandes, cadenas)',
      'Quiere dominio propio (agenda.tunegocio.com)',
      'Quiere soporte dedicado (respuesta < 1h en horario laboral)',
      'Está dispuesto a pagar extra por estatus de marca',
    ],
    upsellTrigger: 'Plan tope — upsell va a features add-on cuando estén disponibles.',
  },
];

// ─────────────────────────────────────────────────────────
//  Técnicas de cierre
// ─────────────────────────────────────────────────────────

export interface CloseTechnique {
  name: string;
  when: string;
  script: string;
}

export const closeTechniques: CloseTechnique[] = [
  {
    name: 'Cierre asumido',
    when: 'Cuando el prospecto muestra interés pero duda en decidir.',
    script:
      '"Listo, para armarte el negocio necesito el nombre completo tuyo, el email y la dirección del local. ¿Me los das?"',
  },
  {
    name: 'Cierre de la alternativa',
    when: 'Evita la respuesta "no". Da dos opciones de sí.',
    script: '"¿Arrancas con el Básico o con el Profesional que es el más completo?"',
  },
  {
    name: 'Cierre del "sin riesgo"',
    when: 'Prospecto indeciso que teme equivocarse.',
    script:
      '"Probemos los 3 días gratis. Si al final del tercer día me dices que no sirve, no pagas nada. Riesgo cero para ti."',
  },
  {
    name: 'Cierre de la urgencia real',
    when: 'Cuando hay temporada alta próxima (navidad, graduaciones, feria).',
    script:
      '"Si arrancamos hoy, en dos semanas ya tienes agenda organizada para [temporada]. Si arrancas después, pierdes el pico."',
  },
  {
    name: 'Cierre de la prueba social',
    when: 'Si tienes casos de éxito — úsalos.',
    script:
      '"[Barbería X] arrancó hace un mes. La semana pasada me dijo que ya no pierde citas y que los fines de semana están llenos."',
  },
  {
    name: 'Cierre de la escasez legítima',
    when: 'Solo si es verdad (no inventar).',
    script:
      '"El precio de lanzamiento de $59.000 es por los primeros [N] negocios. Después sube a $79.000. Tienes el cupo si arrancas esta semana."',
  },
];

// ─────────────────────────────────────────────────────────
//  Do's & Don'ts
// ─────────────────────────────────────────────────────────

export interface Rule {
  text: string;
}

export const dos: Rule[] = [
  { text: 'Llama al prospecto por su nombre y al negocio por su nombre real.' },
  { text: 'Escucha más de lo que hablas (regla 70/30).' },
  { text: 'Siempre ofrece los 3 días gratis como entrada.' },
  { text: 'Muestra la app en vivo cuando puedas. Una imagen vale más que 100 features.' },
  { text: 'Agenda fecha concreta de seguimiento ("cualquier cosa me avisas" es muerte).' },
  { text: 'Haz el setup con el cliente — no le dejes la chamba de arrancar solo.' },
  { text: 'Responde por WhatsApp en menos de 1 hora hábil.' },
  { text: 'Anota en cada conversación: dolor, plan ofrecido, objeción principal, próximo paso.' },
  { text: 'Usa WhatsApp Business con perfil "Zafirox — Agenda para barberías".' },
  { text: 'Hazle seguimiento día 1, día 3 y día 7 después del sí. Ahí se retiene.' },
];

export const donts: Rule[] = [
  { text: 'No recites features. Vende beneficios conectados al dolor que mencionó.' },
  { text: 'No prometas lo que no está construido (dominio propio, integraciones Google Calendar, etc. — di "próximamente").' },
  { text: 'No bajes el precio al primer pujón. Mejor da un mes más de prueba.' },
  { text: 'No hables mal de la competencia. Posicionate positivo.' },
  { text: 'No ignores al prospecto "quisquilloso" tech. Suelen ser el mejor cliente si entienden que es serio.' },
  { text: 'No mandes PDFs gigantes. Manda el link de la landing + demo.' },
  { text: 'No cierres la conversación sin próximo paso concreto (fecha+hora).' },
  { text: 'No insistas 5 veces. Si dijo no dos veces, muévete y vuelve en 1 mes.' },
  { text: 'No uses palabras como "plataforma SaaS multitenant con JWT" con un dueño de barbería. Habla en español claro.' },
  { text: 'No vendas a quien claramente no puede pagar. Mejor relación a largo plazo.' },
];

// ─────────────────────────────────────────────────────────
//  Cheat sheet para imprimir
// ─────────────────────────────────────────────────────────

export interface Fact {
  label: string;
  value: string;
}

export const cheatSheetFacts: Fact[] = [
  { label: 'Producto', value: 'Zafirox — agenda online + WhatsApp automático' },
  { label: 'Verticales', value: 'Barberías, salones, estudios de tatuajes (spa, uñas, masajes también)' },
  { label: 'Planes', value: 'Básico $59.000 · Profesional $99.000 · Premium $159.000' },
  { label: 'Pago', value: 'Nequi o Daviplata. Mensual. Sin tarjeta.' },
  { label: 'Prueba', value: '3 días gratis, sin tarjeta, sin compromiso' },
  { label: 'Contrato', value: 'Mes a mes. Cancelas cuando quieras.' },
  { label: 'Soporte', value: 'WhatsApp directo. Respuesta en < 1h hábil.' },
  { label: 'Landing', value: 'https://zafirox.com.co' },
  { label: 'App', value: 'https://app.zafirox.com.co' },
  { label: 'Login', value: 'https://app.zafirox.com.co/login' },
];
