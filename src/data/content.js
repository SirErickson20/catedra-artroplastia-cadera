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
  { href: "/investigacion", label: "Investigación" },
  { href: "/banderas-rojas", label: "Banderas Rojas" },
  { href: "/contraindicaciones", label: "Contraindicaciones" },
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
        id: "contraindicaciones",
        titulo: "Contraindicaciones",
        icono: "⛔",
        color: "#0e7490",
        href: "/contraindicaciones",
        categorias: ["clinica"],
        descripcion: "Qué no se debe hacer (absolutas) y qué requiere precaución (relativas).",
      },
      {
        id: "objetivos",
        titulo: "Objetivos",
        icono: "🎯",
        color: "#1d4ed8",
        href: "/#resumen",
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
        titulo: "Fases de rehabilitación",
        icono: "📈",
        color: "#b45309",
        href: "/#resumen",
        categorias: ["rehabilitacion"],
        descripcion: "Del preoperatorio al retorno a las actividades, progresando por criterios clínicos.",
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
        href: "/videos",
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
  precauciones: {
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
};

// ---------------------------------------------------------------------
//  CONTRAINDICACIONES
//  tipo: "absoluta" (no se realiza) | "relativa" (se evalúa caso a caso / precaución)
//  ⚠️ Borrador: revisar y validar con el equipo docente.
// ---------------------------------------------------------------------
export const contraindicaciones = {
  titulo: "Contraindicaciones",
  descripcion:
    "Situaciones en las que un procedimiento o una intervención kinésica no debe realizarse, o solo puede hacerse con precaución.",
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
      titulo: "Contraindicación",
      icono: "⛔",
      texto:
        "Es una condición conocida que impide (absoluta) o limita (relativa) aplicar una técnica o procedimiento. Se evalúa antes de intervenir.",
    },
  ],
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
