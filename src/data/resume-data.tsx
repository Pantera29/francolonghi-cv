import { GitHubIcon, LinkedInIcon } from "../components/icons";
import { ResumeData } from "../types";

export const RESUME_DATA: ResumeData = {
  name: "Franco Longhi",
  initials: "FL",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Mexico+City",
  summary: "Economist with 9+ years in fintech, specializing in alternative payment methods and digital financial services. Launched lending and payment products across Argentina and Mexico. Proven experience in project management, go-to-market strategies, partnerships, and scaling products from 0 to 1. Tech enthusiast with side projects using AI tools to develop a CRM system for automotive dealerships.",
  avatarUrl: "/avatar.jpg",
  personalWebsiteUrl: "https://francolonghi-cv.vercel.app/",
  contact: {
    email: "francolonghi29@gmail.com",
    tel: "+525575131257",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/franco-longhi",
        icon: LinkedInIcon,
      },
      {
        name: "Github",
        url: "https://github.com/Pantera29",
        icon: GitHubIcon,
      }
    ],
  },
  education: [
    {
      school: "Universidad Torcuato Di Tella",
      degree: "Bachelor's degree, Economics",
      start: "2012",
      end: "2015",
      logo: "/utdt.jpeg"
    },
    {
      school: "CFA Institute",
      degree: "CFA Level I",
      start: "2018",
      end: "2018",
      logo: "/cfa.jpeg"
    },
    {
      school: "Coder House",
      degree: "Full Stack Software Development",
      start: "2020",
      end: "2020",
      logo: "/coderhouse.jpeg"
    }
  ],
  work: [
    {
      company: "Conekta",
      link: "https://conekta.com",
      badges: ["Fintech - Payments"],
      title: "Product Lead - Alternative Payment Methods",
      logo: "/conekta.jpeg",
      start: "2024",
      end: "Present",
      country: "México",
      companyDescription: "Conekta is Mexico's first online payment platform founded in 2012, serving over 6,000 businesses including Google, Uber, Netflix, and Rappi. The company has raised over $19M in funding and processes payments through cards, cash, bank transfers and alternative payment methods.",
      description: [
        "Serve as mini-CEO of Alternative Payment Methods, leading go to market strategy, pricing definition, partnership execution, and product roadmap. Manage 2 development squads (indirect reports).",
        "Rebuilt cash offering: Negotiated, signed, and implemented agreements with 4 cash networks (2 banks & 2 non-bank), reaching +22,000 unique cash-in and cash-out points for both regulated and non-regulated entities, delivering +15% MoM growth for 6 consecutive months.",
        "Replaced SPEI provider: Conducted comprehensive negotiations with multiple providers to secure the most competitive pricing possible, achieving 65% cost reduction and 3x expected Gross Payment Volume (GPV).",
        "Built first BNPL aggregator in Mexico: Negotiated partnerships with Klarna, Aplazo, and Creditea to launch a pilot program showing +60% approval rates with select merchants, creating new revenue stream potential.",
        "Launched Pay by Bank with BBVA: Pioneered first P2P bank transfer product pilot in Mexico through strategic partnership negotiation, positioning Conekta as market leader in direct bank payments.",
        "Launched Domiciliación MVP: Negotiated agreements with two banks to deliver recurring payments solution with +$200M expected GPV in first year. Executed rapid development cycle in 1.5 months."
      ]
    },
    {
      company: "Kuna Capital",
      link: "https://kunacapital.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "/kuna.jpeg",
      start: "2023",
      end: "2024",
      country: "México",
      companyDescription: "Kuna Capital emerged as Kavak's automotive financing spin-off to address a strategic challenge: selling financing services to external dealerships who viewed Kavak as a competitor. This repositioning enabled expansion beyond Kavak's own ecosystem.",
      description: [
        "Founding team member accountable for developing the new product offering in dealership financing. Managed 1 direct report (PM based in Argentina) while leading product strategy for B2B financing solutions.",
        "Built dealership financing product: Designed and launched financing solution for car dealerships that represented +20% of Kuna's revenue through market research, product development, and sales enablement.",
        "Scaled partnership network: Helped close deals with +1,000 automotive agencies and +10 major automotive groups across Mexico, establishing a comprehensive distribution network for financing products.",
        "Led pilot implementation: Part of a 3-person team that traveled to key cities (SLP, Guadalajara, Monterrey) to conduct initial pilots, deliver training programs, and build technological platform from ground up."
      ]
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "/kavak.jpeg",
      start: "2022",
      end: "2023",
      country: "México",
      companyDescription: "LATAM's largest used car marketplace, founded in 2016 and operating across Mexico, Argentina, Brazil, Chile, Turkey and the Middle East. It became Mexico's first unicorn reaching $8.7B valuation in 2021, with Mexico generating 60% of its business.",
      description: [
        "Led product development for internal credit origination tools, managing multiple development squads (indirect reports) while optimizing loan processing workflows and customer experience.",
        "Reduced credit SLAs by 90%: Orchestrated development of internal tools for credit origination team, transforming manual processes into automated workflows through change management of +200 person team. Enabled 4x application volume capacity without additional hiring due to automation efficiencies.",
        "Scaled credit operations: Collaborated with technical team to design scalable architecture that supported business growth, specifically designed to enable future credit placement outside Kavak's ecosystem and development of new financial products despite additional development time investment."
      ]
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Product Manager",
      logo: "/kavak.jpeg",
      start: "2020",
      end: "2022",
      country: "Argentina",
      companyDescription: "LATAM's largest used car marketplace, founded in 2016 and operating across Mexico, Argentina, Brazil, Chile, Turkey and the Middle East. It became Mexico's first unicorn reaching $8.7B valuation in 2021, with Mexico generating 60% of its business.",
      description: [
        "First product manager hired for Kavak Capital, the company's fintech vertical. Led financial application process development and simulation capabilities implementation.",
        "Improved pre-approval rates from 50% to 85%: Redesigned simulation architecture from car-based to credit line-based approach, enabling maximum loan calculations regardless of specific vehicle financing limitations. Streamlined application by reducing unnecessary fields.",
        "Increased financing penetration to +60% in México: Strategically placed financing entry points throughout Kavak’s website and optimized credit application conversion rates by enabling online document upload and real-time validation. Required integrations with multiple KYC providers & OCR document processing."
      ]
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Ecommerce"],
      title: "Associate Product Manager",
      logo: "/kavak.jpeg",
      start: "2020",
      end: "2020",
      country: "Argentina",
      companyDescription: "LATAM's largest used car marketplace, founded in 2016 and operating across Mexico, Argentina, Brazil, Chile, Turkey and the Middle East. It became Mexico's first unicorn reaching $8.7B valuation in 2021, with Mexico generating 60% of its business.",
      description: [
        "First product hire at Checkars (later acquired by Kavak), leading 100% of website development and backoffice automation initiatives.",
        "Increased financing penetration from 5% to 20%: Negotiated partnerships with banks to expand financing options and strategically implemented new entry points for financing proposals throughout the website.",
        "Built operational efficiency tools: Led end-to-end development of website platform and automated backoffice publishing system enabling simultaneous listing across Checkars website and MercadoLibre marketplace."
      ]
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2B & B2C"],
      title: "Product Manager - Adelantos.com",
      logo: "/ixpandit.jpeg",
      start: "2018",
      end: "2020",
      country: "Argentina",
      companyDescription: "Fintech incubator and accelerator that builds and scales digital lending platforms for the Latin American market.",
      description: [
        "Led the launch and development of Adelantos.com, Ixpandit's flagship B2C personal lending product. Reported directly to the company's CTO while driving product strategy and execution.",
        "Launched and scaled Adelantos.com: Led end-to-end product development of Ixpandit's personal lending platform, achieving exponential growth over the first two years reaching +200,000 monthly credit transactions.",
        "Established strategic frameworks: Conducted weekly presentations with founders and directors, defining product roadmap and business strategies that drove product growth."
      ]
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2B & B2C"],
      title: "Business Analyst - Grouit.com",
      logo: "/ixpandit.jpeg",
      start: "2017",
      end: "2018",
      country: "Argentina",
      companyDescription: "Fintech incubator and accelerator that builds and scales digital lending platforms for the Latin American market.",
      description: [
        "Reported directly to Business Manager overseeing two products: Grouit.com.ar (B2B lending to sellers using alternative scoring, discontinued due to Argentina's 2018 macroeconomic crisis) and CreditosenelActo.com (B2C personal lending product).",
        "Built end-to-end personal lending funnel: Designed and implemented complete online personal lending funnel for CreditosenelActo.com, including customer acquisition, application process, and conversion optimization.",
        "Created customer lifecycle automation: Implemented CRM system and automated customer messaging workflows that improved engagement and operational efficiency across the lending process."
      ]
    },
    {
      company: "CRISIL Argentina",
      link: "https://www.crisil.com",
      badges: ["Private Equity"],
      title: "Private Equity Research Analyst",
      logo: "/crisil.jpeg",
      start: "2016",
      end: "2017",
      country: "Argentina",
      companyDescription: "Global analytics company providing ratings, research, and risk and policy advisory services to financial institutions.",
      description: [
        "Provided research support to General Atlantic's private equity team based in New York, focusing 100% on the financial services sector. Led prospecting activities across USA and Europe.",
        "Led financial services prospecting (+500 companies): Conducted systematic prospecting of companies in USA & Europe that met GA's investment criteria, delivering daily summaries to entire Financial Services team.",
        "Created industry and market intelligence: Prepared on-demand industry and market maps tailored to specific companies under analyst review, supporting strategic investment decision-making."
      ]
    },
    {
      company: "Universidad Torcuato Di Tella",
      link: "https://www.utdt.edu/",
      badges: ["Economics"],
      title: "Teaching Assistant",
      logo: "/utdt.jpeg",
      start: "2016",
      end: "2017",
      country: "Argentina",
      companyDescription: "Leading private university in Argentina, known for its economics and business programs, consistently ranked among the top universities in Latin America.",
      description: "Taught Economics 101 to freshman students, developing course materials and providing academic guidance."
    },
    {
      company: "US Embassy in Argentina",
      link: "https://ar.usembassy.gov/es/",
      badges: ["Economics"],
      title: "Economic Intern",
      logo: "https://ar.usembassy.gov/wp-content/uploads/sites/111/2023/01/use-buenos-aires-seal-e1674507504483.png",
      start: "2016",
      end: "2017",
      country: "Argentina",
      companyDescription: "Diplomatic mission of the United States in Argentina, providing economic analysis and fostering bilateral trade and investment relations.",
      description: "Produced macroeconomic analysis newsletters and researched foreign debt while building fintech sector connections."
    }
  ],
  skills: [
    "Product Management",
    "Product Strategy",
    "Fintech Strategy",
    "SQL",
    "Git",
    "Figma",
    "Shadcn UI",
    "Financial Analysis",
    "UX Design",
    "Data Analytics"
  ],
  projects: [
    {
      title: "MuviAI",
      description: "CRM para el área de postventa y servicios de agencias de autos, con agentes de IA que automatizan la atención a clientes a través de WhatsApp y voz. Permite agendar citas, gestionar recordatorios y mejorar la experiencia del cliente en concesionarios automotrices.",
      url: "https://www.edgarai.com.mx/",
      technologies: ["Next.js", "OpenAI API", "Twilio", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      title: "CV Optimizer",
      description: "An AI tool that helps optimize and improve resumes, providing personalized suggestions to better highlight professional experience.",
      url: "https://cv-optimizer-blue.vercel.app/",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Car Alerts",
      description: "A web app that allows users to track car prices and alerts them when the price drops below a certain threshold.",
      url: "https://caralerts.vercel.app/",
      technologies: ["Tailwind CSS", "Cloudflare D1", "Cloudflare Workers"]
    }
  ]
} as const;