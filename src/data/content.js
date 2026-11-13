// =====================================================================
//  CONTENIDO EDITABLE DEL SITIO
//  Todos los textos, títulos, autores, alertas y videos viven acá.
//  Editá este archivo y el sitio se actualiza solo; no hace falta
//  tocar los componentes.
//  Fuente del contenido: Word "Tratamiento kinesiológico en artroplastia
//  total de cadera: fase posquirúrgica inmediata" y banner del autor.
// =====================================================================

export const site = {
  nombre: "Artroplastia de Cadera",
  catedra: "Cátedra: Kinefisiatría Traumatológica y Reumatológica",
  tema: "Artroplastia de Cadera",
  subtema: "Abordaje Kinésico – Fase Aguda",
  institucion:
    "Universidad Católica de Santiago del Estero, Departamento Académico San Salvador de Jujuy — Carrera de Kinesiología y Fisiatría",
  anio: 2026,
  descripcion:
    "Abordaje kinésico en la fase posquirúrgica inmediata (aguda) de la artroplastia total de cadera.",
  loaderTexto: "Cargando cátedra", // texto de la pantalla de carga
};

// Menú superior: el orden de este array es el orden en la Navbar
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/banner", label: "Banner" },
  { href: "/evaluacion-kinesica", label: "Evaluación kinésica" },
  { href: "/banderas-rojas", label: "Banderas Rojas" },
  { href: "/precauciones", label: "Precauciones" },
  { href: "/objetivos", label: "Objetivos" },
  { href: "/abordaje-kinesico", label: "Abordaje kinésico" },
  { href: "/videos", label: "Videos" },
];

// ---------------------------------------------------------------------
//  EQUIPO (se usa en el Banner y en el pie de página)
// ---------------------------------------------------------------------
export const autor = {
  nombre: "Facundo Nahuel Llanes Severich",
  rol: "Autor",
  detalle: "Estudiante de Kinesiología y Fisiatría",
};

export const desarrollador = {
  nombre: "Erick Enrique Miranda",
  rol: "Diseño y desarrollo web",
  detalle: "",
  contacto: "erickmiranda.rz@gmail.com",
};

// ---------------------------------------------------------------------
//  ABORDAJE KINÉSICO: ejercicio terapéutico de la fase aguda (semana 1)
//  video: archivo dentro de /public/videos ("" = video próximamente)
//  imagen: ilustración del ejercicio (recortada del banner)
// ---------------------------------------------------------------------
export const abordaje = {
  titulo: "Abordaje kinésico",
  descripcion:
    "Módulo de ejercicio terapéutico (kinesiterapia) en la fase posquirúrgica inmediata: días 1 a 7.",
  principio:
    "Durante la primera semana, el ejercicio terapéutico debe guiarse por principios de contracción isométrica de baja carga, rangos protegidos y neuroplasticidad cruzada.",
  ejercicios: [
    {
      id: "bombeo-tobillo",
      nombre: "Bombeo de tobillo",
      nombreEn: "Ankle Pumps",
      dosis: "3 × 20 · cada hora",
      descripcion: "En decúbito supino, realizar dorsiflexión y plantiflexión activa máxima continua.",
      objetivo: "Favorece el retorno venoso, activa la bomba muscular de la pantorrilla y previene la TVP.",
      video: "/videos/bombeo-tobillo.mp4",
      imagen: "/carrusel/bombeo-tobillo.jpg",
    },
    {
      id: "isometria-cuadriceps",
      nombre: "Isometría de cuádriceps",
      nombreEn: "Quad Sets",
      dosis: "3 × 12 · sostener 5 a 10 s",
      descripcion:
        "En decúbito supino con la pierna extendida, presionar el hueco poplíteo contra la camilla manteniendo una contracción firme durante 5 a 10 segundos.",
      objetivo: "Esencial para romper el bloqueo reflejo por inhibición muscular artrogénica (IMA).",
      video: "/videos/isometria-cuadriceps.mp4",
      imagen: "/carrusel/isometria-cuadriceps.jpg",
    },
    {
      id: "isometria-gluteos",
      nombre: "Isometría de glúteos",
      nombreEn: "Glute Squeezes",
      dosis: "3 × 15 · sostener 5 a 8 s",
      descripcion:
        "En decúbito supino, apretar ambos glúteos de forma simultánea sosteniendo la contracción 5 a 8 segundos.",
      objetivo: "Activa el glúteo mayor y prepara la estabilidad posterior de la pelvis.",
      video: "/videos/isometria-gluteos.mp4",
      imagen: "/carrusel/isometria-gluteos.jpg",
    },
    {
      id: "deslizamiento-talon",
      nombre: "Deslizamiento de talón en supino",
      nombreEn: "Heel Slides",
      dosis: "3 × 10 a 12",
      descripcion:
        "Flexión activa-asistida de cadera y rodilla deslizando el talón sobre la superficie, hasta un máximo de 90° de flexión de cadera.",
      objetivo: "Recupera el ROM sin estrés capsular.",
      video: "/videos/deslizamiento-talon.mp4",
      imagen: "/carrusel/deslizamiento-talon.jpg",
    },
    {
      id: "pendulares-sedente",
      nombre: "Movimientos pendulares en sedente",
      nombreEn: "",
      dosis: "3 × 15",
      descripcion:
        "Paciente sentado a la orilla de la camilla con el muslo apoyado: realizar flexo-extensión suave de rodilla por efecto de la gravedad.",
      objetivo: "Mejora la nutrición del cartílago de la rodilla y modula la rigidez.",
      video: "/videos/pendulares-sedente.mp4",
      imagen: "/carrusel/pendulares-sedente.jpg",
    },
    {
      id: "entrenamiento-cruzado",
      nombre: "Entrenamiento cruzado contralateral",
      nombreEn: "Cross-Training",
      dosis: "3 × 10",
      descripcion:
        "Ejercicios de fuerza resistida en la extremidad SANA no operada (extensiones de rodilla y abducción).",
      objetivo:
        "Aprovecha el fenómeno neurofisiológico de cross-education para transferir activación de motoneuronas a la extremidad operada sin sobrecargarla.",
      video: "/videos/entrenamiento-cruzado.mp4",
      imagen: "/carrusel/entrenamiento-cruzado.jpg",
    },
    {
      id: "sedente-a-bipedo",
      nombre: "Reeducación de la transición sedente a bípedo",
      nombreEn: "",
      dosis: "",
      descripcion:
        "Desde una silla alta con brazos: inclinar el tronco recto, desplazar el pie sano ligeramente atrás e impulsarse con los brazos y el miembro sano, manteniendo la extremidad operada en ligera extensión / apoyo neutro.",
      objetivo: "",
      video: "/videos/sedente-a-bipedo.mp4",
      imagen: "/carrusel/sedente-a-bipedo.jpg",
    },
  ],
};

// ---------------------------------------------------------------------
//  INICIO
// ---------------------------------------------------------------------
export const inicio = {
  hero: {
    etiqueta: "Abordaje kinésico · Fase aguda",
    // Cada elemento es una línea del título grande de la portada
    tituloLineas: ["Artroplastia", "de cadera"],
    subtitulo: "“Una rehabilitación temprana, segura y bien guiada favorece la recuperación funcional.”",
    botonPrincipal: { href: "/abordaje-kinesico", label: "Ver abordaje kinésico" },
    botonSecundario: { href: "/videos", label: "Ver videos" },
    pieIzquierda: "Kinefisiatría Traumatológica y Reumatológica",
  },
  // Tarjetas del carrusel curvo de la portada (degradado violeta + ícono).
  // icono: un emoji. iconoImagen: un ícono propio dentro de /public (reemplaza al emoji).
  carrusel: [
    { titulo: "Patologías degenerativas de cadera", icono: "🦴" },
    { titulo: "Artroplastia de cadera", iconoImagen: "/iconos/artroplastia-cadera.svg" },
    { titulo: "Abordajes quirúrgicos", icono: "🩺" },
    { titulo: "Marcha asistida", icono: "🚶" },
    { titulo: "Fortalecimiento", icono: "💪" },
    { titulo: "Banderas rojas", icono: "🚩" },
    { titulo: "Transferencias", icono: "🪑" },
    { titulo: "Educación al paciente", icono: "📋" },
  ],
  bienvenida: {
    titulo: "Bienvenida",
    subtitulo: "Abordaje kinésico en la fase posquirúrgica inmediata.",
    parrafos: [
      "La artroplastia total de cadera (ATC) consiste en el reemplazo quirúrgico de las superficies articulares coxofemorales deterioradas (cabeza femoral y acetábulo) por componentes protésicos modulares (vástago, cabeza, acetábulo y cotilo de fricción).",
      "En esta propuesta, el foco se establece exclusivamente en la fase posquirúrgica inmediata: la etapa aguda, correspondiente a la primera semana de evolución postoperatoria (días 1 a 7).",
    ],
    destacado: {
      titulo: "Eje central: la seguridad del paciente en la fase aguda",
      texto:
        "El principio rector en las primeras 24 a 72 horas es garantizar la seguridad del paciente. Antes de prescindir de asistencia o forzar la deambulación, el kinesiólogo debe validar criterios hemodinámicos y clínicos objetivos.",
    },
  },
  // Bloques animados de la portada (estilo tarjetas con demo).
  // categorias: pestañas para filtrar. Cada tarjeta indica en qué categorías aparece.
  // color: color del brillo superior de la tarjeta (formato #RRGGBB).
  bloques: {
    titulo: "Todo lo que necesitás, en un solo lugar.",
    subtitulo: "Explorá los ejes del abordaje sin perderte en apuntes sueltos.",
    categorias: [
      { id: "todo", label: "Todo" },
      { id: "clinica", label: "Clínica" },
      { id: "rehabilitacion", label: "Rehabilitación" },
      { id: "recursos", label: "Recursos" },
    ],
    tarjetas: [
      {
        id: "evaluacion",
        titulo: "Evaluación kinésica",
        icono: "📋",
        color: "#db2777",
        href: "/evaluacion-kinesica",
        categorias: ["clinica"],
        descripcion: "Dolor, movilidad, fuerza, marcha y criterios de seguridad para movilizar.",
      },
      {
        id: "banderas",
        titulo: "Banderas Rojas",
        icono: "🚩",
        color: "#b91c1c",
        href: "/banderas-rojas",
        categorias: ["clinica"],
        descripcion: "Signos de alarma específicos de la semana 1 que obligan a suspender y derivar.",
      },
      {
        id: "precauciones",
        titulo: "Precauciones",
        icono: "⛔",
        color: "#0e7490",
        href: "/precauciones",
        categorias: ["clinica"],
        descripcion: "Movimientos prohibidos y posicionamiento según el abordaje quirúrgico.",
      },
      {
        id: "objetivos",
        titulo: "Objetivos",
        icono: "🎯",
        color: "#1d4ed8",
        href: "/objetivos",
        categorias: ["clinica"],
        descripcion: "Las metas del tratamiento kinésico en la fase aguda.",
        items: [
          "Disminuir el dolor y el edema",
          "Educar al paciente",
          "Recuperar el ROM",
          "Reeducar la marcha",
          "Favorecer la independencia funcional",
        ],
      },
      {
        id: "ejercicio",
        titulo: "Abordaje kinésico",
        icono: "🏋️",
        color: "#15803d",
        href: "/abordaje-kinesico",
        categorias: ["rehabilitacion"],
        descripcion: "Ejercicio terapéutico de la semana 1 con su dosificación.",
        items: [
          { nombre: "Bombeo de tobillo", series: 3, reps: 20, nota: "Previene la TVP" },
          { nombre: "Isometría de cuádriceps", series: 3, reps: 12, nota: "Sostener 5 a 10 segundos" },
          { nombre: "Isometría de glúteos", series: 3, reps: 15, nota: "Sostener 5 a 8 segundos" },
          { nombre: "Deslizamiento de talón", series: 3, reps: 10, nota: "Hasta 90° de flexión de cadera" },
          { nombre: "Pendulares en sedente", series: 3, reps: 15, nota: "Por efecto de la gravedad" },
          { nombre: "Entrenamiento cruzado", series: 3, reps: 10, nota: "En la pierna sana" },
        ],
      },
      {
        id: "fases",
        titulo: "Fases de rehabilitación",
        icono: "📈",
        color: "#b45309",
        href: "/fases-de-rehabilitacion",
        categorias: ["rehabilitacion"],
        descripcion: "Del preoperatorio al retorno a las actividades.",
        items: [
          { nombre: "Preoperatoria", detalle: "Educación y preparación física" },
          { nombre: "Aguda (semana 1)", detalle: "Foco de este material" },
          { nombre: "Intermedia", detalle: "Fuerza, rango y marcha" },
          { nombre: "Avanzada", detalle: "Retorno a las actividades" },
        ],
      },
      {
        id: "fisioterapia",
        titulo: "Fisioterapia aplicada",
        icono: "⚡",
        color: "#4338ca",
        href: "/fisioterapia-aplicada",
        categorias: ["rehabilitacion"],
        descripcion: "Crioterapia, electroanalgesia y electroestimulación con sus parámetros.",
      },
      {
        id: "esquema",
        titulo: "Esquema de progresión día a día",
        icono: "🗓️",
        color: "#c2410c",
        href: "/esquema-de-progresion",
        categorias: ["rehabilitacion"],
        descripcion: "Qué hacer en cada día de la primera semana y cuándo progresar.",
      },
      {
        id: "videos",
        titulo: "Videos",
        icono: "🎬",
        color: "#a21caf",
        href: "/videos",
        categorias: ["recursos"],
        descripcion: "Cada ejercicio de la fase aguda, explicado en video.",
      },
      {
        id: "bibliografia",
        titulo: "Bibliografía",
        icono: "📚",
        color: "#64748b",
        href: "/bibliografia",
        categorias: ["recursos"],
        descripcion: "Referencias bibliográficas que fundamentan el abordaje.",
      },
      {
        id: "banner",
        titulo: "Banner",
        icono: "🖼️",
        color: "#7e22ce",
        href: "/banner",
        categorias: ["recursos"],
        descripcion: "La infografía completa del abordaje kinésico en la fase aguda.",
      },
    ],
  },
  // Resumen general del tema (tarjetas informativas)
  resumen: {
    titulo: "Resumen general.",
    subtitulo: "Lo esencial de la artroplastia de cadera en la fase aguda.",
    temas: [
      {
        titulo: "¿Qué es?",
        texto:
          "Es el reemplazo de las superficies articulares de la articulación coxofemoral por una prótesis, debido a patologías degenerativas que comprometen la función de la cadera.",
      },
      {
        titulo: "Indicaciones",
        texto:
          "Coxartrosis avanzada primaria o secundaria, necrosis avascular de la cabeza femoral y fracturas mediales del cuello femoral en adultos mayores, cuando el manejo conservador falló.",
      },
      {
        titulo: "Componentes protésicos",
        texto: "Vástago, cabeza, acetábulo y cotilo de fricción: componentes modulares que reemplazan la cabeza femoral y el acetábulo.",
      },
      {
        titulo: "Fase aguda",
        texto: "Fase posquirúrgica inmediata: la primera semana de evolución postoperatoria (días 1 a 7). Es el foco de este material.",
      },
      {
        titulo: "Seguridad del paciente",
        texto:
          "En las primeras 24 a 72 horas, antes de movilizar, se validan criterios hemodinámicos y clínicos objetivos.",
      },
      {
        titulo: "Riesgos de un abordaje mal ejecutado",
        texto:
          "Luxación de la prótesis, caídas intrahospitalarias, hipotensión ortostática y exacerbación del derrame periarticular.",
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  BANNER
// ---------------------------------------------------------------------
export const banner = {
  titulo: "Banner",
  descripcion: "Infografía del abordaje kinésico en la fase aguda de la artroplastia de cadera.",
  imagen: "/banner.jpg",
  alt: "Banner: Artroplastia de cadera, abordaje kinésico en fase aguda. Incluye qué es, evaluación kinésica, objetivos, precauciones y banderas rojas, los 7 ejercicios del abordaje y la bibliografía.",
  creditos: [autor, desarrollador],
};

// ---------------------------------------------------------------------
//  EVALUACIÓN KINÉSICA
// ---------------------------------------------------------------------
export const evaluacion = {
  titulo: "Evaluación kinésica",
  descripcion: "Qué evaluar y qué criterios de seguridad verificar antes de la movilización precoz.",
  componentes: {
    titulo: "Qué evaluar.",
    subtitulo: "Los cuatro ejes de la evaluación en la fase aguda.",
    items: [
      { icono: "🌡️", titulo: "Dolor", texto: "Escala Visual Analógica (EVA) de 0 a 10." },
      { icono: "📐", titulo: "Movilidad", texto: "Rango de movimiento (ROM) mediante goniometría." },
      { icono: "💪", titulo: "Fuerza", texto: "Escala de Daniels de 0 a 5." },
      { icono: "🚶", titulo: "Marcha", texto: "Apoyo, ayuda técnica y compensaciones." },
    ],
  },
  seguridad: {
    titulo: "Algoritmo de seguridad para la bipedestación temprana.",
    subtitulo: "Antes de la primera bipedestación (día 1 o 2), todos los criterios son obligatorios.",
    intro:
      "Antes de iniciar la primera sesión de bipedestación y reeducación de la marcha, el kinesiólogo debe evaluar de manera obligatoria el expediente médico y el estado sistémico del paciente.",
    filas: [
      { parametro: "Nivel de hemoglobina", criterio: "≥ 10,0 g/dL (o autorización escrita del médico tratante si es < 10 g/dL)" },
      { parametro: "Presión arterial", criterio: "Sistólica 100–140 mmHg / Diastólica 60–90 mmHg" },
      { parametro: "Saturación de oxígeno", criterio: "SpO2 > 90 % a aire ambiente o con apoyo de cánula nasal" },
      { parametro: "Dolor (EVA)", criterio: "EVA < 8/10 en reposo antes de iniciar la movilización" },
      {
        parametro: "Estado sistémico / herida",
        criterio: "Sin sangrado activo en drenaje o apósito, sin náuseas ni vómitos en 2 h, paciente orientado en 4 esferas",
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  BANDERAS ROJAS
// ---------------------------------------------------------------------
export const banderasRojas = {
  titulo: "Banderas Rojas",
  descripcion: "Signos de alarma específicos de la semana 1 en el paciente con artroplastia de cadera.",
  aviso:
    "Ante la presencia de cualquiera de estos signos, suspender el tratamiento y derivar. Este material es educativo y no reemplaza el criterio clínico.",
  alertas: [
    {
      titulo: "Trombosis venosa profunda (TVP)",
      gravedad: "urgente",
      signos: [
        "Signo de Homans positivo",
        "Aumento asimétrico del perímetro de la pantorrilla",
        "Calor local",
        "Edema con fóvea indurado",
        "Dolor vivo al tacto",
      ],
    },
    {
      titulo: "Inestabilidad o desplazamiento protésico",
      gravedad: "urgente",
      signos: [
        "Acortamiento repentino del miembro operado",
        "Rotación externa fija del pie",
        "Dolor agudo e inaguantable a la carga",
      ],
    },
    {
      titulo: "Infección periarticular temprana",
      gravedad: "urgente",
      signos: [
        "Eritema progresivo en los bordes de la herida quirúrgica",
        "Secreción purulenta o fétida",
        "Dehiscencia de la herida",
        "Picos febriles continuos (> 38 °C)",
      ],
    },
  ],
};

// ---------------------------------------------------------------------
//  PRECAUCIONES
//  tipo: "absoluta" (no se realiza) | "relativa" (con precaución / caso a caso)
// ---------------------------------------------------------------------
export const precauciones = {
  titulo: "Precauciones",
  descripcion:
    "El kinesiólogo debe adaptar la movilidad y la higiene postural según la vía de abordaje quirúrgico utilizada por el cirujano traumatólogo.",
  // Recuadro que explica la diferencia con las banderas rojas
  diferencia: [
    {
      titulo: "Bandera roja",
      icono: "🚩",
      texto:
        "Es un signo de alarma que aparece en el paciente (por ejemplo, una TVP o una luxación). Indica una posible complicación: se suspende la sesión y se deriva.",
      href: "/banderas-rojas",
    },
    {
      titulo: "Precaución",
      icono: "⛔",
      texto:
        "Es una condición conocida que impide o limita un movimiento, una técnica o un procedimiento. Se tiene en cuenta antes de intervenir.",
    },
  ],
  // Precauciones según el abordaje quirúrgico
  movimiento: {
    titulo: "Precauciones según el abordaje quirúrgico",
    nota: "Las precauciones definitivas las indica el cirujano tratante.",
    items: [
      {
        abordaje: "Posterolateral (Kocher-Langenbeck)",
        evitar: [
          "Flexión de cadera mayor a 90°",
          "Aducción cruzada sobre la línea media",
          "Rotación interna más allá de la neutra",
        ],
        posicionamiento: [
          "Cojín abductor entre las piernas en la cama",
          "Silla y WC elevados",
          "No cruzar las piernas",
        ],
      },
      {
        abordaje: "Anterior directo (DAA)",
        evitar: [
          "Hiperextensión de cadera mayor a 10°",
          "Rotación externa más allá de la neutra",
          "Extensión combinada con rotación externa",
        ],
        posicionamiento: ["Evitar pasos largos hacia atrás", "Cuidar la tensión de la cápsula anterior"],
      },
    ],
  },
  grupos: [
    {
      titulo: "De la artroplastia de cadera",
      items: [
        { texto: "Infección activa local o sistémica", tipo: "absoluta" },
        { texto: "Condición clínica que impide la anestesia o la cirugía", tipo: "absoluta" },
        { texto: "Insuficiencia grave de la musculatura abductora", tipo: "relativa" },
        { texto: "Enfermedad vascular periférica grave", tipo: "relativa" },
      ],
    },
    {
      titulo: "De los agentes físicos",
      items: [
        { texto: "Diatermia (onda corta o microondas) sobre el implante metálico", tipo: "absoluta" },
        { texto: "Calor o frío directo sobre la herida quirúrgica sin cicatrizar", tipo: "absoluta" },
        { texto: "Electroestimulación en zonas con alteración de la sensibilidad", tipo: "relativa" },
      ],
    },
    {
      titulo: "Del ejercicio y la movilización",
      items: [
        { texto: "Superar la carga de peso indicada por el cirujano", tipo: "absoluta" },
        { texto: "Movimientos que violan las precauciones según el abordaje", tipo: "absoluta" },
        { texto: "Movilizar sin cumplir el algoritmo de seguridad", tipo: "absoluta" },
        { texto: "Ejercicio intenso con dolor agudo no controlado", tipo: "relativa" },
      ],
    },
  ],
};

// ---------------------------------------------------------------------
//  OBJETIVOS
// ---------------------------------------------------------------------
export const objetivos = {
  titulo: "Objetivos",
  descripcion: "Objetivos del tratamiento kinésico en la fase aguda (semana 1).",
  general: {
    titulo: "Objetivo general de la fase aguda",
    texto:
      "Optimizar la recuperación tisular primaria y la seguridad hemodinámica del paciente en los primeros 7 días posquirúrgicos, modulando el dolor y el edema postoperatorio, revirtiendo la inhibición muscular artrogénica (IMA) mediante activación neuromuscular precoz, y logrando la independencia en transferencias básicas y deambulación asistida con marcha simétrica y carga parcial autorizada.",
  },
  especificos: {
    titulo: "Objetivos específicos.",
    subtitulo: "Días 1 a 7 postoperatorios.",
    items: [
      {
        icono: "🧊",
        titulo: "Disminuir el dolor y la inflamación",
        texto:
          "Reducir el dolor postoperatorio a valores EVA ≤ 3/10 en reposo y controlar el edema periarticular mediante agentes físicos (crioterapia y electroanalgesia).",
      },
      {
        icono: "⚡",
        titulo: "Contribuir a la reversión de la inhibición muscular artrogénica",
        texto:
          "Reactivar de forma temprana las unidades motoras del cuádriceps femoral, glúteo medio y glúteo mayor mediante contracciones isométricas de baja carga y estimulación neuromuscular.",
      },
      {
        icono: "📐",
        titulo: "Restaurar el rango de movimiento",
        texto:
          "Alcanzar y mantener una flexión activa-asistida de cadera de hasta 90°, abducción suave y movilidad activa libre de rodilla y tobillo sin compensaciones lumbo-pélvicas.",
      },
      {
        icono: "🪑",
        titulo: "Reeducar transferencias y bipedestación",
        texto:
          "Lograr la independencia técnica para pasar de decúbito supino a sedente a la orilla de la cama, y de sedente a bípedo usando adecuadamente los apoyos.",
      },
      {
        icono: "🚶",
        titulo: "Reeducar la marcha con ayuda técnica",
        texto:
          "Restablecer la marcha tridáctila o bidáctila con andador de 4 puntos o bastones canadienses, con distancias progresivas (de 10 a 40+ metros) y carga parcial segura.",
      },
      {
        icono: "🏡",
        titulo: "Educar en higiene articular y autogestión",
        texto:
          "Capacitar al paciente y a su familia en la prevención de movimientos luxantes, el uso de adaptaciones del entorno y las pautas de ejercicios domiciliarios.",
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  FISIOTERAPIA APLICADA (agentes físicos)
// ---------------------------------------------------------------------
export const fisioterapia = {
  titulo: "Fisioterapia aplicada",
  descripcion:
    "Módulo de agentes físicos en la fase aguda: subordinado a objetivos analgésicos y de facilitación neuromuscular para potenciar la kinesiterapia.",
  agentes: [
    {
      nombre: "Crioterapia",
      detalle: "Ice packs / compresión fría",
      icono: "❄️",
      dosis: "Bolsa de hielo o compresión fría a 10–15 °C durante 15 a 20 minutos.",
      efecto: "Vasoconstricción, disminución de la conducción nerviosa nociceptiva y reducción del hematoma posquirúrgico.",
      momento: "Al finalizar cada sesión de ejercicio (3 a 4 veces por día).",
    },
    {
      nombre: "Electroanalgesia",
      detalle: "TENS / interferenciales",
      icono: "〰️",
      dosis: "TENS convencional o corrientes interferenciales (80–120 Hz, 15 a 20 min).",
      efecto: "Mecanismo de compuerta (gate control) a nivel medular L3-L5; reduce el espasmo antiálgico periarticular.",
      momento: "Antes de la kinesiterapia, o en reposo si la EVA es ≥ 6/10.",
    },
    {
      nombre: "Electroestimulación",
      detalle: "NMES / corrientes rusas",
      icono: "⚡",
      dosis: "Frecuencia 50–80 Hz, ciclo 10 s ON / 30 s OFF, intensidad hasta contracción visible.",
      efecto: "Supera el bloqueo medular inhibitorio de la IMA en cuádriceps y glúteo medio, reclutando fibras tipo II.",
      momento: "Combinada con isometría activa en la sesión kinésica.",
    },
  ],
};

// ---------------------------------------------------------------------
//  ESQUEMA DE PROGRESIÓN Y ACTUACIÓN DÍA A DÍA
// ---------------------------------------------------------------------
export const esquema = {
  titulo: "Esquema de progresión y actuación día a día",
  descripcion:
    "Cronología de la intervención kinésica durante la estancia intrahospitalaria y la primera semana de alta (días 1 a 7).",
  periodos: [
    {
      periodo: "Día 1",
      etiqueta: "Posoperatorio inmediato",
      acciones: [
        "Verificación del algoritmo de seguridad (Hb, PA, SpO2, EVA)",
        "Crioterapia local 20 min",
        "Ejercicios en cama: bombeo de tobillo, isometría de cuádriceps y glúteo",
        "Transferencia a sedente a la orilla de la cama",
        "Bipedestación asistida si el paciente cumple los criterios hemodinámicos",
      ],
      meta: "Tolerancia a la sedestación durante 15 a 30 min sin mareo ni hipotensión.",
    },
    {
      periodo: "Día 2",
      etiqueta: "Posoperatorio temprano",
      acciones: [
        "Repetición del módulo en cama + deslizamientos de talón protegidos (≤ 90° de flexión)",
        "Inicio del entrenamiento cruzado en la pierna sana",
        "TENS / interferenciales si persiste el dolor periarticular",
        "Reeducación de la marcha con andador dentro de la habitación (10 a 20 metros)",
      ],
      meta: "Marcha intrahabitacional con apoyo parcial simétrico y EVA ≤ 4/10.",
    },
    {
      periodo: "Día 3",
      etiqueta: "Pre-alta",
      acciones: [
        "Transición a bipedestación con menor asistencia manual",
        "Marcha por el pasillo (30 a 40+ metros con andador o bastones)",
        "Puentes glúteos asistidos con apoyo prioritario en la pierna sana",
        "Práctica de transferencias a silla alta y WC adaptado",
      ],
      meta: "Independencia en transferencias y deambulación mayor a 40 metros.",
    },
    {
      periodo: "Días 4 y 5",
      etiqueta: "Alta domiciliaria",
      acciones: [
        "Inicio del protocolo domiciliario (2 a 3 sesiones por día de la pauta aprendida)",
        "Bicicleta estática sin resistencia, con asiento elevado para evitar flexión > 90° (si se dispone)",
        "Reeducación de escaleras (3 escalones): subir con el miembro sano, bajar con el operado",
        "Refuerzo de las precauciones de luxación en las AVD",
      ],
      meta: "Subir y bajar 3 escalones de forma segura con baranda y bastón.",
    },
    {
      periodo: "Días 6 y 7",
      etiqueta: "Consolidación",
      acciones: [
        "Progresión de la caminata domiciliaria a 50–80 metros discontinuos",
        "Isometría con mantención de 10 segundos",
        "Manejo e inspección de la cicatriz (control de edema y signos de infección)",
        "Evaluación de la preparación para la fase II (subaguda)",
      ],
      meta: "EVA ≤ 3/10 en reposo, deambulación segura y control neuromuscular de rodilla.",
    },
  ],
};

// ---------------------------------------------------------------------
//  FASES DE REHABILITACIÓN (visión general)
// ---------------------------------------------------------------------
export const fases = {
  titulo: "Fases de rehabilitación",
  descripcion:
    "Visión general del proceso de rehabilitación. Este material se centra en la fase aguda (semana 1). Plazos orientativos: se progresa según criterios clínicos y las indicaciones del cirujano.",
  lista: [
    {
      nombre: "Preoperatoria",
      periodo: "Antes de la cirugía",
      intervenciones: [
        "Educación sobre la cirugía, las precauciones y la evolución esperada",
        "Fortalecimiento de cadera y miembro inferior",
        "Entrenamiento de la marcha con andador y de las transferencias",
      ],
      progresion: "Paciente informado y preparado para la cirugía.",
    },
    {
      nombre: "Aguda: posquirúrgica inmediata",
      periodo: "Días 1 a 7",
      foco: true,
      intervenciones: [
        "Algoritmo de seguridad antes de movilizar",
        "Ejercicio terapéutico: isometría de baja carga y rangos protegidos",
        "Fisioterapia: crioterapia, electroanalgesia y electroestimulación",
        "Transferencias y marcha con ayuda técnica y carga parcial",
      ],
      progresion: "EVA ≤ 3/10 en reposo, deambulación segura y control neuromuscular de rodilla.",
      enlaces: [
        { href: "/abordaje-kinesico", label: "Abordaje kinésico" },
        { href: "/esquema-de-progresion", label: "Esquema día a día" },
      ],
    },
    {
      nombre: "Subaguda / intermedia",
      periodo: "Semanas 2 a 6 aprox.",
      intervenciones: [
        "Fortalecimiento progresivo de abductores y extensores de cadera",
        "Movilidad activa dentro de las precauciones",
        "Progresión de la marcha: de andador a bastón",
        "Propiocepción y equilibrio",
      ],
      progresion: "Marcha con bastón sin dolor y con buen control de la pelvis.",
    },
    {
      nombre: "Avanzada",
      periodo: "Desde la semana 6 aprox.",
      intervenciones: [
        "Marcha sin asistencia y corrección de la claudicación",
        "Escaleras y actividades funcionales",
        "Retorno a actividades de bajo impacto",
      ],
      progresion: "Independencia funcional y retorno a las actividades habituales.",
    },
  ],
};

// ---------------------------------------------------------------------
//  BIBLIOGRAFÍA
//  El texto entre *asteriscos* se muestra en cursiva.
// ---------------------------------------------------------------------
export const bibliografia = {
  titulo: "Bibliografía",
  descripcion: "Referencias bibliográficas seleccionadas.",
  items: [
    "Sara, L. K., & Lewis, C. L. (2023). Rehabilitation phases, precautions, and mobility goals following total hip arthroplasty. *HSS Journal®: The Musculoskeletal Journal of Hospital for Special Surgery*.",
    "Nickel, K., Lobos, E., Jacque, T., & Barra, F. (2026). *Protocolo de intervención basado en ejercicio terapéutico en pacientes post artroplastia total cadera en etapa 1 y 2* [Tesis de maestría, Universidad Andrés Bello]. Santiago, Chile.",
    "Honfi, A. E., Acosta, L. R., & Lescano, K. I. (2024). Protocolos de rehabilitación para pacientes con artroplastia total de cadera, Corrientes-Argentina y Araranguá-Brasil en los años 2022 al 2024. *Revista de Investigación Científica y Tecnológica*, *8*(2), 183–193.",
    "Brito-de León, M. E., Beristain-Meza, S. M., Gutiérrez-Medina, N., Medina-Elizalde, A. P., & Lara-López, T. L. (2023). Programa de rehabilitación multimodal para pacientes intervenidos de artroplastia de cadera y rodilla.",
    "Pilatuña López, K. M., & Dillon Cacuango, M. E. (2026). Impacto del ejercicio terapéutico en adultos mayores con coxartrosis post-artroplastia de cadera. *Revista Social Fronteriza*, *6*(4), e1199.",
  ],
};

// ---------------------------------------------------------------------
//  VIDEOS: uno por cada ejercicio del abordaje kinésico (fase aguda)
// ---------------------------------------------------------------------
export const videos = {
  titulo: "Videos",
  descripcion: "Cada ejercicio del abordaje kinésico en la fase aguda, con su descripción y su video.",
  lista: abordaje.ejercicios.map((e) => ({
    id: e.id,
    titulo: e.nombre,
    descripcion: e.descripcion,
    dosis: e.dosis,
    archivo: e.video,
    imagen: e.imagen,
    categoria: "Fase aguda",
  })),
};

export const footer = {
  texto: "Material educativo de la cátedra. Su contenido no reemplaza la consulta profesional.",
  // Créditos que se muestran en el pie de página
  creditos: [autor, desarrollador],
  contacto: desarrollador.contacto,
};
