// =====================================================================
//  CONTENIDO EDITABLE DEL SITIO
//  Todos los textos, títulos, autores, alertas y videos viven acá.
//  Editá este archivo y el sitio se actualiza solo; no hace falta
//  tocar los componentes.
//  ⚠️ El contenido clínico es un borrador base: debe ser revisado y
//  validado por el equipo docente de la cátedra antes de publicarse.
// =====================================================================

export const site = {
  nombre: "Artroplastía de Cadera",
  catedra: "Cátedra: Kinefisiatría Traumatológica y Reumatológica",
  tema: "Artroplastía de Cadera",
  institucion: "Universidad — Carrera de Kinesiología y Fisiatría",
  anio: 2026,
  descripcion:
    "Material educativo sobre la rehabilitación kinésica en pacientes con artroplastía de cadera.",
  loaderTexto: "Cargando cátedra", // texto de la pantalla de carga
};

// Menú superior: el orden de este array es el orden en la Navbar
export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/investigacion", label: "Investigación" }, // ⚠️ pendiente: en el audio dicen "banner"
  { href: "/evaluacion-kinesica", label: "Evaluación kinésica" },
  { href: "/banderas-rojas", label: "Banderas Rojas" },
  { href: "/precauciones", label: "Precauciones" },
  { href: "/objetivos", label: "Objetivos" },
  { href: "/abordaje-kinesico", label: "Abordaje kinésico" },
  { href: "/videos", label: "Videos" },
];

// ---------------------------------------------------------------------
//  INICIO
// ---------------------------------------------------------------------
export const inicio = {
  hero: {
    etiqueta: "Kinefisiatría Traumatológica y Reumatológica",
    // Cada elemento es una línea del título grande de la portada
    tituloLineas: ["Artroplastía", "de cadera"],
    subtitulo:
      "Contenidos teóricos, signos de alarma, demostraciones prácticas e investigación para la rehabilitación kinésica.",
    botonPrincipal: { href: "/banderas-rojas", label: "Ver banderas rojas" },
    botonSecundario: { href: "/videos", label: "Ver demostraciones" },
    pieIzquierda: "Cátedra · Kinesiología y Fisiatría",
  },
  // Tarjetas del carrusel curvo de la portada.
  // imagen: ruta a una foto dentro de /public (ej: "/carrusel/marcha.jpg").
  // Si se deja vacío se muestra un degradado violeta con el ícono.
  carrusel: [
    { titulo: "Artrosis de cadera", icono: "🦴", imagen: "" },
    { titulo: "Prótesis total", icono: "⚙️", imagen: "" },
    { titulo: "Abordajes quirúrgicos", icono: "🩺", imagen: "" },
    { titulo: "Marcha asistida", icono: "🚶", imagen: "" },
    { titulo: "Fortalecimiento", icono: "💪", imagen: "" },
    { titulo: "Banderas rojas", icono: "🚩", imagen: "" },
    { titulo: "Transferencias", icono: "🪑", imagen: "" },
    { titulo: "Educación al paciente", icono: "📋", imagen: "" },
  ],
  bienvenida: {
    titulo: "Bienvenida",
    subtitulo: "Un espacio para aprender la rehabilitación paso a paso.",
    parrafos: [
      "La artroplastía de cadera es uno de los procedimientos ortopédicos más frecuentes y exitosos. Su resultado funcional depende en gran medida de una rehabilitación kinésica adecuada, segura y basada en la evidencia.",
      "Este sitio fue pensado como material de apoyo para estudiantes de la cátedra, reuniendo de forma clara los conceptos clave del abordaje kinésico pre y postoperatorio.",
    ],
  },
  // Bloques animados de la portada (estilo tarjetas con demo).
  // categorias: pestañas para filtrar. Cada tarjeta indica en qué categorías aparece.
  // color: color del brillo superior de la tarjeta (formato #RRGGBB).
  bloques: {
    titulo: "Todo lo que necesitás, en un solo lugar.",
    subtitulo: "Explorá los ejes de la cátedra sin perderte en apuntes sueltos.",
    categorias: [
      { id: "todo", label: "Todo" },
      { id: "clinica", label: "Clínica" },
      { id: "rehabilitacion", label: "Rehabilitación" },
      { id: "recursos", label: "Recursos" },
    ],
    tarjetas: [
      {
        id: "banderas",
        titulo: "Banderas Rojas",
        icono: "🚩",
        color: "#b91c1c",
        href: "/banderas-rojas",
        categorias: ["clinica"],
        descripcion: "Reconocé los signos de alarma que obligan a suspender la sesión y derivar.",
      },
      {
        id: "precauciones",
        titulo: "Precauciones",
        icono: "⛔",
        color: "#0e7490",
        href: "/precauciones",
        categorias: ["clinica"],
        descripcion: "Movimientos a evitar, qué no se debe realizar y qué requiere precaución.",
      },
      {
        id: "evaluacion",
        titulo: "Evaluación kinésica",
        icono: "📋",
        color: "#db2777",
        href: "/evaluacion-kinesica",
        categorias: ["clinica"],
        descripcion: "Dolor, rango de movimiento, fuerza, marcha y escalas funcionales.",
      },
      {
        id: "objetivos",
        titulo: "Objetivos",
        icono: "🎯",
        color: "#1d4ed8",
        href: "/objetivos",
        categorias: ["rehabilitacion"],
        descripcion: "Las metas del tratamiento kinésico, del control del dolor a la independencia funcional.",
        items: [
          "Control del dolor y edema",
          "Rango de movimiento",
          "Fuerza muscular",
          "Reeducación de la marcha",
          "Independencia funcional",
        ],
      },
      {
        id: "fases",
        titulo: "Abordaje kinésico",
        icono: "📈",
        color: "#b45309",
        href: "/abordaje-kinesico",
        categorias: ["rehabilitacion"],
        descripcion: "Fases de rehabilitación, del preoperatorio al retorno a las actividades.",
        items: [
          { nombre: "Preoperatoria", detalle: "Educación y preparación física" },
          { nombre: "Postoperatoria inmediata", detalle: "Analgesia, movilidad y transferencias" },
          { nombre: "Intermedia", detalle: "Fuerza, rango y marcha" },
          { nombre: "Avanzada", detalle: "Retorno a las actividades" },
        ],
      },
      {
        id: "ejercicio",
        titulo: "Indicación de ejercicio",
        icono: "🏋️",
        color: "#15803d",
        href: "/abordaje-kinesico",
        categorias: ["clinica", "rehabilitacion"],
        descripcion: "Ejercicios con su dosificación: series, repeticiones y pautas de seguridad.",
        // ⚠️ Dosificación orientativa: revisar con el equipo docente
        items: [
          { nombre: "Bombeo de tobillo", series: 3, reps: 15, nota: "Prevención de TVP" },
          { nombre: "Isométrico de cuádriceps", series: 3, reps: 10, nota: "Sostener 5 segundos" },
          { nombre: "Puente glúteo", series: 3, reps: 10, nota: "Respetar precauciones del abordaje" },
          { nombre: "Sentarse y pararse", series: 2, reps: 8, nota: "Silla alta, sin cruzar las piernas" },
        ],
      },
      {
        id: "videos",
        titulo: "Videos",
        icono: "🎬",
        color: "#a21caf",
        href: "/videos",
        categorias: ["recursos"],
        descripcion: "Demostraciones prácticas de ejercicios, transferencias y marcha.",
      },
      {
        id: "investigacion",
        titulo: "Investigación",
        icono: "🔬",
        color: "#6d28d9",
        href: "/investigacion",
        categorias: ["recursos"],
        descripcion: "Conocé al equipo de autores, creadores e investigadores detrás del proyecto.",
      },
    ],
  },
  // Resumen general del tema (tarjetas informativas)
  resumen: {
    titulo: "Resumen general.",
    subtitulo: "Lo esencial de la artroplastía de cadera.",
    temas: [
      {
        titulo: "¿Qué es?",
        texto:
          "Procedimiento quirúrgico que reemplaza total o parcialmente la articulación coxofemoral por una prótesis, con el objetivo de aliviar el dolor y restaurar la función.",
      },
      {
        titulo: "Indicaciones frecuentes",
        texto:
          "Artrosis avanzada, artritis reumatoidea, necrosis avascular de cabeza femoral y fracturas de cuello femoral, entre otras.",
      },
      {
        titulo: "Tipos de prótesis",
        texto:
          "Artroplastía total (componente acetabular y femoral) o parcial/hemiartroplastía; fijación cementada, no cementada o híbrida.",
      },
      {
        titulo: "Abordajes quirúrgicos",
        texto:
          "El abordaje (posterior, lateral, anterior) condiciona las precauciones de movimiento que deben respetarse en el postoperatorio.",
      },
      {
        titulo: "Objetivos kinésicos",
        texto:
          "Control del dolor y edema, prevención de complicaciones, recuperación de rango de movimiento y fuerza, reeducación de la marcha e independencia funcional.",
      },
      {
        titulo: "Fases de rehabilitación",
        texto:
          "Preoperatoria (educación), postoperatoria inmediata, intermedia y avanzada / retorno a actividades, progresando según criterios clínicos.",
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  EQUIPO (se usa en Investigación y en el pie de página)
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
//  INVESTIGACIÓN
// ---------------------------------------------------------------------
export const investigacion = {
  titulo: "Investigación",
  descripcion:
    "El autor, el desarrollo web y los docentes e investigadores que hicieron posible este material.",
  grupos: [
    {
      titulo: "Autor",
      personas: [autor],
    },
    {
      titulo: "Diseño y desarrollo web",
      personas: [desarrollador],
    },
    {
      titulo: "Investigadores y docentes",
      personas: [
        { nombre: "Lic. Nombre Apellido", rol: "Docente a cargo", detalle: "Cátedra de Kinefisiatría Traumatológica y Reumatológica" },
        { nombre: "Lic. Nombre Apellido", rol: "Investigador/a", detalle: "" },
      ],
    },
  ],
  bibliografia: {
    titulo: "Bibliografía de referencia",
    items: [
      "Agregar aquí las referencias bibliográficas utilizadas (formato APA / Vancouver).",
    ],
  },
};

// ---------------------------------------------------------------------
//  BANDERAS ROJAS
// ---------------------------------------------------------------------
export const banderasRojas = {
  titulo: "Banderas Rojas",
  descripcion:
    "Signos y síntomas de alarma en el paciente con artroplastía de cadera que obligan a suspender la sesión y derivar de forma inmediata al equipo médico.",
  aviso:
    "Ante la presencia de cualquiera de estos signos, suspender el tratamiento y derivar. Este material es educativo y no reemplaza el criterio clínico.",
  alertas: [
    {
      titulo: "Luxación protésica",
      gravedad: "urgente",
      signos: [
        "Dolor súbito e intenso en la cadera, a menudo tras un movimiento",
        "Acortamiento del miembro y rotación anormal",
        "Imposibilidad de cargar peso o mover la pierna",
        "Sensación de “chasquido” o desencaje",
      ],
    },
    {
      titulo: "Trombosis venosa profunda (TVP)",
      gravedad: "urgente",
      signos: [
        "Dolor en pantorrilla o muslo",
        "Edema unilateral, calor y enrojecimiento",
        "Aumento del perímetro del miembro respecto al contralateral",
      ],
    },
    {
      titulo: "Tromboembolismo pulmonar (TEP)",
      gravedad: "emergencia",
      signos: [
        "Disnea de aparición súbita",
        "Dolor torácico, especialmente al inspirar",
        "Taquicardia, taquipnea o desaturación",
        "Tos con o sin hemoptisis",
      ],
    },
    {
      titulo: "Infección del sitio quirúrgico / periprotésica",
      gravedad: "urgente",
      signos: [
        "Fiebre o escalofríos",
        "Secreción, enrojecimiento o calor en la herida",
        "Dehiscencia de la herida",
        "Dolor creciente que no mejora con el reposo",
      ],
    },
    {
      titulo: "Fractura periprotésica",
      gravedad: "urgente",
      signos: [
        "Dolor agudo tras caída o traumatismo",
        "Deformidad o impotencia funcional",
        "Imposibilidad de cargar peso",
      ],
    },
    {
      titulo: "Lesión neurológica",
      gravedad: "derivar",
      signos: [
        "Debilidad para la dorsiflexión del pie (pie caído)",
        "Parestesias o pérdida de sensibilidad en el miembro",
        "Alteraciones nuevas que no estaban presentes antes de la cirugía",
      ],
    },
  ],
};

// ---------------------------------------------------------------------
//  PRECAUCIONES
//  tipo: "absoluta" (no se realiza) | "relativa" (con precaución / caso a caso)
//  ⚠️ Borrador: revisar y validar con el equipo docente.
// ---------------------------------------------------------------------
export const precauciones = {
  titulo: "Precauciones",
  descripcion:
    "Movimientos a evitar, intervenciones que no deben realizarse y situaciones que requieren precaución en el paciente con artroplastía de cadera.",
  // Recuadro que explica la diferencia con las banderas rojas
  diferencia: [
    {
      titulo: "Bandera roja",
      icono: "🚩",
      texto:
        "Es un signo de alarma que aparece en el paciente (por ejemplo, una luxación o una TVP). Indica una posible complicación: se suspende la sesión y se deriva.",
      href: "/banderas-rojas",
    },
    {
      titulo: "Precaución",
      icono: "⛔",
      texto:
        "Es una condición conocida que impide (no realizar) o limita (con precaución) un movimiento, una técnica o un procedimiento. Se tiene en cuenta antes de intervenir.",
    },
  ],
  // Precauciones de movimiento según el abordaje quirúrgico
  movimiento: {
    titulo: "Precauciones de movimiento según abordaje",
    nota: "Las precauciones definitivas las indica el cirujano tratante.",
    items: [
      {
        abordaje: "Posterior / posterolateral",
        evitar: ["Flexión de cadera mayor a 90°", "Aducción más allá de la línea media", "Rotación interna"],
      },
      {
        abordaje: "Anterior / anterolateral",
        evitar: ["Extensión de cadera combinada con rotación externa", "Aducción con rotación externa"],
      },
    ],
  },
  grupos: [
    {
      titulo: "De la artroplastía de cadera",
      items: [
        { texto: "Infección activa local o sistémica", tipo: "absoluta" },
        { texto: "Condición clínica que impide la anestesia o la cirugía", tipo: "absoluta" },
        { texto: "Insuficiencia grave de la musculatura abductora", tipo: "relativa" },
        { texto: "Enfermedad vascular periférica grave", tipo: "relativa" },
        { texto: "Artropatía neuropática (Charcot)", tipo: "relativa" },
        { texto: "Obesidad mórbida", tipo: "relativa" },
      ],
    },
    {
      titulo: "De los agentes físicos",
      items: [
        { texto: "Diatermia (onda corta o microondas) sobre el implante metálico", tipo: "absoluta" },
        { texto: "Calor o frío sobre la herida quirúrgica sin cicatrizar", tipo: "absoluta" },
        { texto: "Ultrasonido sobre la zona del implante", tipo: "relativa", detalle: "Sobre todo con prótesis cementada" },
        { texto: "Electroestimulación en zonas con alteración de la sensibilidad", tipo: "relativa" },
      ],
    },
    {
      titulo: "Del ejercicio y la movilización",
      items: [
        { texto: "Superar la carga de peso indicada por el cirujano", tipo: "absoluta" },
        { texto: "Movimientos que violan las precauciones según el abordaje", tipo: "absoluta" },
        { texto: "Hidroterapia con la herida abierta o sin cicatrizar", tipo: "absoluta" },
        { texto: "Masaje directo sobre la cicatriz reciente", tipo: "relativa" },
        { texto: "Ejercicio intenso con dolor agudo no controlado", tipo: "relativa" },
      ],
    },
  ],
};

// ---------------------------------------------------------------------
//  OBJETIVOS
//  ⚠️ Borrador: revisar y validar con el equipo docente.
// ---------------------------------------------------------------------
export const objetivos = {
  titulo: "Objetivos",
  descripcion: "Las metas del tratamiento kinésico en el paciente con artroplastía de cadera.",
  generales: {
    titulo: "Objetivos generales.",
    subtitulo: "Lo que buscamos en todo el proceso de rehabilitación.",
    items: [
      { icono: "🧊", titulo: "Controlar el dolor y el edema", texto: "Favorecer la recuperación y la participación activa del paciente en el tratamiento." },
      { icono: "🛡️", titulo: "Prevenir complicaciones", texto: "Trombosis venosa profunda, luxación, complicaciones respiratorias y úlceras por presión." },
      { icono: "📐", titulo: "Recuperar el rango de movimiento", texto: "Siempre dentro de las precauciones indicadas según el abordaje quirúrgico." },
      { icono: "💪", titulo: "Fortalecer la musculatura", texto: "Abductores, extensores de cadera, cuádriceps y musculatura del miembro inferior." },
      { icono: "🚶", titulo: "Reeducar la marcha y el equilibrio", texto: "Progresar de la marcha asistida a la marcha independiente, sin claudicación." },
      { icono: "🏡", titulo: "Lograr la independencia funcional", texto: "Autonomía en las actividades de la vida diaria y retorno a las actividades habituales." },
    ],
  },
  porFase: {
    titulo: "Objetivos por fase.",
    subtitulo: "Plazos orientativos: la progresión depende de criterios clínicos.",
    fases: [
      {
        nombre: "Preoperatoria",
        periodo: "Antes de la cirugía",
        objetivos: [
          "Educar al paciente sobre la cirugía y las precauciones",
          "Mejorar la fuerza y la condición física general",
          "Entrenar el uso del andador y las transferencias",
        ],
      },
      {
        nombre: "Postoperatoria inmediata",
        periodo: "Primeros días",
        objetivos: [
          "Controlar el dolor y el edema",
          "Prevenir la TVP y las complicaciones respiratorias",
          "Lograr transferencias seguras y marcha con andador según la carga indicada",
        ],
      },
      {
        nombre: "Intermedia",
        periodo: "Semanas 2 a 6 aprox.",
        objetivos: [
          "Ampliar el rango de movimiento respetando las precauciones",
          "Fortalecer de forma progresiva",
          "Progresar la marcha (de andador a bastón)",
        ],
      },
      {
        nombre: "Avanzada",
        periodo: "Desde la semana 6 aprox.",
        objetivos: [
          "Marcha sin asistencia y sin claudicación",
          "Subir y bajar escaleras y realizar actividades funcionales",
          "Retornar a actividades de bajo impacto",
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------
//  EVALUACIÓN KINÉSICA
//  ⚠️ Borrador: revisar y validar con el equipo docente.
// ---------------------------------------------------------------------
export const evaluacion = {
  titulo: "Evaluación kinésica",
  descripcion: "Qué evaluar en el paciente con artroplastía de cadera y con qué herramientas.",
  componentes: {
    titulo: "Componentes de la evaluación.",
    subtitulo: "De la anamnesis a la funcionalidad.",
    items: [
      { icono: "📝", titulo: "Anamnesis", texto: "Antecedentes, tipo de prótesis y abordaje, carga de peso permitida, nivel funcional previo y expectativas del paciente." },
      { icono: "🌡️", titulo: "Dolor", texto: "Intensidad (EVA o EVN), localización, características y comportamiento ante el movimiento." },
      { icono: "👁️", titulo: "Inspección y palpación", texto: "Estado de la herida, edema, temperatura, coloración y búsqueda de signos de alarma." },
      { icono: "📐", titulo: "Rango de movimiento", texto: "Goniometría de cadera y rodilla, siempre dentro de las precauciones del abordaje." },
      { icono: "💪", titulo: "Fuerza muscular", texto: "Escala de Daniels (0 a 5) para abductores, extensores y flexores de cadera y cuádriceps." },
      { icono: "📏", titulo: "Perimetría y longitud", texto: "Perímetros del miembro (edema) y discrepancia de longitud entre ambos miembros." },
      { icono: "🚶", titulo: "Marcha y equilibrio", texto: "Patrón de marcha (signo de Trendelenburg, claudicación), uso de asistencia y equilibrio." },
      { icono: "🏡", titulo: "Funcionalidad", texto: "Transferencias, actividades de la vida diaria y escalas funcionales." },
    ],
  },
  escalas: {
    titulo: "Escalas y pruebas.",
    subtitulo: "Herramientas para medir y registrar la evolución.",
    items: [
      { nombre: "EVA / EVN", mide: "Intensidad del dolor", rango: "0 a 10" },
      { nombre: "Escala de Daniels", mide: "Fuerza muscular", rango: "0 a 5" },
      { nombre: "Harris Hip Score", mide: "Dolor, función, deformidad y movilidad de la cadera", rango: "0 a 100" },
      { nombre: "WOMAC", mide: "Dolor, rigidez y función física", rango: "Cuestionario" },
      { nombre: "Timed Up and Go (TUG)", mide: "Movilidad funcional y riesgo de caídas", rango: "Segundos" },
      { nombre: "Escala de Berg", mide: "Equilibrio estático y dinámico", rango: "0 a 56" },
    ],
  },
};

// ---------------------------------------------------------------------
//  ABORDAJE KINÉSICO (tratamiento por fases)
//  ⚠️ Borrador: revisar y validar con el equipo docente.
// ---------------------------------------------------------------------
export const tratamiento = {
  titulo: "Abordaje kinésico",
  descripcion:
    "Abordaje kinésico por fases, del preoperatorio al retorno a las actividades. Plazos orientativos: se progresa según criterios clínicos y las indicaciones del cirujano.",
  fases: [
    {
      nombre: "Preoperatoria",
      periodo: "Antes de la cirugía",
      intervenciones: [
        "Educación sobre la cirugía, las precauciones y la evolución esperada",
        "Fortalecimiento de cadera y miembro inferior",
        "Entrenamiento de la marcha con andador y de las transferencias",
        "Ejercicios respiratorios",
      ],
      progresion: "Paciente informado y preparado para la cirugía.",
    },
    {
      nombre: "Postoperatoria inmediata",
      periodo: "Primeros días",
      intervenciones: [
        "Ejercicios respiratorios",
        "Bombeo de tobillo e isométricos de cuádriceps y glúteos",
        "Movilización activa asistida dentro de las precauciones",
        "Crioterapia sobre el vendaje para el dolor y el edema",
        "Transferencias y marcha con andador según la carga indicada",
      ],
      progresion: "Transferencias seguras y marcha independiente con andador.",
    },
    {
      nombre: "Intermedia",
      periodo: "Semanas 2 a 6 aprox.",
      intervenciones: [
        "Fortalecimiento progresivo de abductores y extensores de cadera",
        "Ejercicios en cadena cinética cerrada",
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
        "Subir y bajar escaleras",
        "Fortalecimiento funcional y de resistencia",
        "Bicicleta fija con asiento alto",
        "Retorno a actividades de bajo impacto (caminar, natación)",
      ],
      progresion: "Independencia funcional y retorno a las actividades habituales.",
    },
  ],
  educacion: {
    titulo: "Educación al paciente.",
    subtitulo: "Pautas para el hogar y la vida diaria.",
    items: [
      "Respetar las precauciones de movimiento indicadas",
      "Usar alza-inodoro y sillas altas",
      "No cruzar las piernas",
      "Dormir con una almohada entre las piernas (abordaje posterior)",
      "Reconocer las banderas rojas y consultar ante su aparición",
    ],
  },
};

// ---------------------------------------------------------------------
//  VIDEOS / DEMOSTRACIONES
//  youtubeId: es lo que va después de "v=" en la URL de YouTube.
//    Ej: https://www.youtube.com/watch?v=ABC123xyz  ->  youtubeId: "ABC123xyz"
//  Si se deja vacío, se muestra un recuadro "Video próximamente".
// ---------------------------------------------------------------------
export const videos = {
  titulo: "Videos y Demostraciones",
  descripcion:
    "Demostraciones prácticas para acompañar los contenidos teóricos de la cátedra.",
  lista: [
    {
      titulo: "Ejercicios del postoperatorio inmediato",
      descripcion: "Bombeo de tobillo, isométricos de cuádriceps y glúteos, deslizamientos de talón.",
      youtubeId: "",
      categoria: "Fase inicial",
    },
    {
      titulo: "Transferencias seguras",
      descripcion: "Cama–silla, sedestación–bipedestación y uso del inodoro respetando precauciones.",
      youtubeId: "",
      categoria: "AVD",
    },
    {
      titulo: "Reeducación de la marcha",
      descripcion: "Marcha con andador y bastones, subida y bajada de escaleras.",
      youtubeId: "",
      categoria: "Marcha",
    },
    {
      titulo: "Fortalecimiento progresivo",
      descripcion: "Ejercicios de abductores, extensores de cadera y control neuromuscular.",
      youtubeId: "",
      categoria: "Fase intermedia",
    },
  ],
};

export const footer = {
  texto: "Material educativo de la cátedra. Su contenido no reemplaza la consulta profesional.",
  // Créditos que se muestran en el pie de página
  creditos: [autor, desarrollador],
  contacto: desarrollador.contacto,
};
