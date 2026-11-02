export const infiniteSliderItems = [
  {
    id: "panama-ninez",
    category: "Panamá",
    title: "Uno de cada cuatro",
    location: "Panamá",
    period: "2025",
    summary:
      "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática.",
    image: {
      src: "/panama-ninez.webp",
      alt: "Presentación del informe sobre vulnerabilidad climática de la niñez en Panamá",
    },
    readMoreUrl:
      "https://www.unicef.org/panama/documents/impacto-de-la-crisis-clim%C3%A1tica-ambiental-y-energ%C3%A9tica-en-el-desarrollo-y-bienestar-de-las",
  },
  {
    id: "canal-panama-sequia",
    category: "Sequías",
    title: "El canal bajo presión",
    location: "Canal de Panamá",
    period: "2023–2024",
    summary:
      "La sequía restringió el tránsito de buques y alteró cadenas de suministro en todo el mundo.",
    image: {
      src: "/canal-panama-sequia.webp",
      alt: "Suelo seco y agrietado como imagen ilustrativa de la sequía",
    },
    readMoreUrl:
      "https://www.unccd.int/resources/publications/drought-hotspots-around-world-2023-2025",
  },
  {
    id: "jamaica-melissa",
    category: "Huracanes",
    title: "Una tormenta extraordinaria",
    location: "Jamaica",
    period: "2025",
    summary:
      "El huracán Melissa tocó tierra con vientos de 298 km/h y causó daños estimados en US$8,8 mil millones.",
    image: {
      src: "/jamaica-melissa.webp",
      alt: "Vista de un huracán como imagen ilustrativa de los ciclones tropicales",
    },
    readMoreUrl:
      "https://wmo.int/sites/default/files/2026-03/State_of_the_Global_Climate_2025_Extreme_Supplement.pdf",
  },
  {
    id: "guna-yala-gardi-sugdub",
    category: "Océanos",
    title: "Vivir con el mar en ascenso",
    location: "Gardí Sugdub, Guna Yala",
    period: "2024",
    summary: "Cerca de 300 familias fueron reubicadas ante el ascenso del mar y el hacinamiento.",
    image: {
      src: "/gardi-sugdub.webp",
      alt: "Arrecife de coral como imagen ilustrativa de los ecosistemas marinos",
    },
    readMoreUrl:
      "https://miambiente.gob.pa/panama-presenta-su-primer-informe-sobre-movilidad-climatica-y-avanza-hacia-la-adopcion-de-un-protocolo-nacional-de-reubicaciones-planificadas/",
  },
  {
    id: "somalia-sequia",
    category: "Sequías",
    title: "La sequía agrava el hambre",
    location: "Somalia",
    period: "2025–2026",
    summary:
      "La sequía y otros factores llevaron a millones de personas a niveles agudos de inseguridad alimentaria.",
    image: {
      src: "/somalia-sequia.webp",
      alt: "Persona en un entorno rural afectado por la sequía en Somalia",
    },
    readMoreUrl: "https://somalia.un.org/sites/default/files/2026-01/Somalia_HNRP_2026.pdf",
  },
  {
    id: "kiribati-costas",
    category: "Océanos",
    title: "Resistir desde la costa",
    location: "Kiribati",
    period: "2025–2026",
    summary:
      "Obras costeras protegen el principal hospital, el agua dulce y la infraestructura de islas situadas a menos de dos metros sobre el mar.",
    image: {
      src: "/kiribati-costas.webp",
      alt: "Zona costera de Kiribati vulnerable al aumento del nivel del mar",
    },
    readMoreUrl:
      "https://www.unops.org/news-and-stories/news/forging-coastal-resilience-in-kiribati",
  },
]
export type InfiniteSliderItemProps = (typeof infiniteSliderItems)[0]
