import {
  // AmbitLogo, // Removed unused import
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Fermin Rodriguez Penelas",
  initials: "FRP",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/Buenos+Aires/",
  about:
    "Construyo productos digitales. En mi trabajo y en mi tiempo libre",
  summary:
    "Llevo muchos años co-creando productos digitales. Desde side projects chicos con un par de visitas al mes, a productos de inversion usados por 22 millones de latinoamericanos. En el camino aprendi lo basico de diseño y programación para poder llevar a la realidad las ideas que tengo.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1523984386340831233/jSlYyvDj_400x400.jpg",
  personalWebsiteUrl: "https://ferminrp.com",
  contact: {
    email: "cv@m.ferminrp.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ferminrp",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ferminrp/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ferminrp",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Católica Argentina",
      degree: "Lic. en Administración de Empresas",
      start: "2014",
      end: "2017",
    },
    {
      school: "Digital House",
      degree: "Data Science & Machine Learning",
      start: "2020",
      end: "2020",
    },
    {
      school: "Digital House",
      degree: "Full Stack Software Development",
      start: "2021",
      end: "2021",
    },
    {
      school: "Coderhouse",
      degree: "UX/UI",
      start: "2022",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Ripio",
      link: "https://ripio.com",
      badges: ["Product"],
      title: "Head of Product b2b",
      start: "2024",
      end: "2024",
      description:
        'Construyendo la infraestructura para que cualquier banco o fintech pueda ofrecer crypto a sus clientes. Algunos de los clientes con los que trabajamos son Mercado Pago, Coinbase e Invertir Online.',
    },
    {
      company: "Buenbit",
      link: "https://buenbit.com",
      badges: ["Product"],
      title: "Head of Product",
      start: "2024",
      end: "2024",
      description: [
        'Transformamos un exchange en una app de ahorro e inversiones multi asset class. Algunos logros:',
        '↪ Duplicamos la cantidad de activos y blockchains soportados en 1 año.',
        '↪ Lanzamos acciones e ETFs abriendole a usuarios de tres paises cuentas de inversión en EEUU.',
        '↪ Lanzamos nuevas rampas en Peru, Colombia y Estados Unidos para onboardear mas personas a crypto e inversiones.' ],
    },
    {
      company: "Pedidos Ya",
      link: "https://pedidosya.com",
      badges: ["Product"],
      title: "Group Product Manager",
      start: "2022",
      end: "2023",
      description:
        'Lidere el dominio de "pricing and incentives" de cinco equipos, a cargo de las promociones, descuentos, comisiones y propinas de la plataforma en todo latam.',
    },
    {
      company: "belo",
      link: "https://belo.app",
      badges: ["Product"],
      title: "Head of Product",
      start: "2021",
      end: "2022",
      description:
        "Lidere el equipo de producto y UX para la wallet, exchange y tarjeta.",
    },
    {
      company: "Mercado Pago",
      link: "https://mercadopago.com/",
      badges: ["Product"],
      title: "Product Manager",
      start: "2019",
      end: "2021",
      description:
        "Product Manager de los productos de inversion y ahorro de Mercado Pago, con mas de 22 millones de latinoamericanos invertidos entre Argentina, Brasil y Mexico.",
    },
    {
      company: "Media Lab",
      link: "https://www.medialab.agency/",
      badges: ["Growth"],
      title: "Growth Analyst",
      start: "2017",
      end: "2019",
      description: "Generacion de leads para la venta de servicios de influencer marketing mediante automatizacion de pipelines con web scrapping, armado de reportes automatico y cold emailing.",
    },
    {
      company: "iBillionaire",
      link: "https://www.behance.net/gallery/60831397/iBillionaire-UI-UX-IOS-app?locale=es_ES/",
      badges: ["Growth"],
      title: "Growth Analyst",
      start: "2016",
      end: "2017",
      description: "A cargo de marketing/growth y algunos aspectos del producto para la aplicación y la plataforma de inversión.",
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "Svelte.js",
    "Figma",
    "SQL",
    "Next.js",
    "Tailwind",
    "Shadcn",
    "Git",
    "Cloudflare Workers",
  ],
  projects: [
    {
      title: "USDC.AR",
      techStack: [
        "Next.js",
        "Shadcn",
      ],
      description: "Un solo lugar en donde comparar las cotizaciones de distintos exchanges.",
      link: {
        label: "usdc.ar",
        href: "https://usdc.ar/",
      },
    },
    {
      title: "Compara Tasas",
      techStack: [
        "Astro",
        "Cloudflare Workers",
      ],
      description: "Un comparador de rendimientos de plazos fijos, cuentas remuneradas y stablecoins.",
      link: {
        label: "comparatasas.ar",
        href: "https://comparatasas.ar/",
      },
    },
    {
      title: "Cedears.ar",
      techStack: [
        "Google Sheets",
        "Shadcn",
        "Next.js"
      ],
      description: "Un sitio en donde conocer los cedears que cotizan en el mercado y hacer un seguimiento de tu portfolio.",
      link: {
        label: "cedears.ar",
        href: "https://cedears.ar/",
      },
    },
    {
      title: "Fonditos",
      techStack: [
        "Shadcn",
        "Nex.js",
        "Cloudflare Workers"
      ],
      description: "Una herramienta simple para analizar fondos de inversión.",
      link: {
        label: "https://fonditos.xyz/",
        href: "https://fonditos.xyz/",
      },
    },
    {
      title: "Info BCRA",
      techStack: [
        "Shadcn",
        "Nex.js",
      ],
      description: "Una interfaz para interacturar con los datos del BCRA.",
      link: {
        label: "https://info-bcra.xyz/",
        href: "https://info-bcra.xyz/",
      },
    },
    {
      title: "Dividendos",
      techStack: [
        "Shadcn",
        "Nex.js",
      ],
      description: "Una interfaz para ver las fechas de pagos de dividendos.",
      link: {
        label: "https://dividendos.xyz/",
        href: "https://dividendos.xyz/",
      },
    },
    {
      title: "Vinitos",
      techStack: [
        "Shadcn",
        "Nex.js",
        "Supabase",
      ],
      description: "Una pagina para descrubrir y reseñar bodegas y experiencias enoturisticas.",
      link: {
        label: "https://vinitos.ar/",
        href: "https://vinitos.ar/",
      },
    },
  ],
} as const;
