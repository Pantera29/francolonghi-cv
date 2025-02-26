import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Franco Longhi",
  initials: "FL",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Mexico+City",
  about: "Building fintech products. At established companies and startups.",
  summary: "Over 7 years creating fintech products across Latin America. From lending platforms in Argentina to alternative payment methods in Mexico. Throughout my journey, I've learned to combine economic analysis, business strategy, and product development to transform ideas into solutions that generate value for millions of users.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQGFBfOlDIJF7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1560955418191?e=1746057600&v=beta&t=AIsWV7e2kI4XYg3yhOvJzHlhXsHYIBBqc67SD-hO--w",
  personalWebsiteUrl: "",
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
    }
  ],
  work: [
    {
      company: "Conekta",
      link: "https://conekta.com",
      badges: ["Fintech", "Payments"],
      title: "Product Lead - Alternative Payment Methods",
      logo: "/logos/conekta.png", // Add logo URL
      start: "Jul 2024",
      end: "Present",
      description: "Leading the development of alternative payment methods for one of Mexico's most important payment processors, providing solutions for thousands of e-commerce businesses across the region."
    },
    {
      company: "Kuna Capital",
      link: "https://kunacapital.com",
      badges: ["Fintech", "Lending"],
      title: "Senior Product Manager",
      logo: "/logos/kuna.png", // Add logo URL
      start: "Oct 2023",
      end: "Aug 2024",
      description: "Designed and launched financial products for the Mexican market, focused on democratizing access to financial services for individuals and businesses."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech", "Marketplace"],
      title: "Senior Product Manager",
      logo: "/logos/kavak.png", // Add logo URL
      start: "Apr 2022",
      end: "Oct 2023",
      description: "Led key product initiatives at Latin America's first used car marketplace unicorn, improving the financing and payment experience for users in Mexico."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech", "Marketplace"],
      title: "Product Manager",
      logo: "/logos/kavak.png", // Add logo URL
      start: "Dec 2020",
      end: "Apr 2022",
      description: "Responsible for product development for Kavak Argentina, focused on optimizing business processes and user experience during the company's regional expansion."
    },
    {
      company: "Adelantos.com (Ixpandit Fintech Factory)",
      link: "https://adelantos.com",
      badges: ["Fintech", "Lending"],
      title: "Product Lead",
      logo: "/logos/adelantos.png", // Add logo URL
      start: "Jul 2018",
      end: "Jun 2020",
      description: "Led the design and implementation of product strategy, covering commercial areas, marketing, pricing, and UX. Optimized operational metrics and performed financial analysis, contributing to the sustained growth of the online lending business."
    },
    {
      company: "CRISIL Argentina",
      link: "https://www.crisil.com",
      badges: ["Research", "Private Equity"],
      title: "Private Equity Research Analyst",
      logo: "/logos/crisil.png", // Add logo URL
      start: "Aug 2016",
      end: "Oct 2017",
      description: "Developed market reports and fintech industry analysis, presenting over 500 companies to investment fund analysts. Created daily newsletters with information on the financial and banking sector."
    }
  ],
  skills: [
    "Product Management",
    "Product Strategy",
    "Fintech Strategy",
    "SQL",
    "Financial Analysis",
    "UX Design",
    "Data Analytics"
  ],
  certifications: [
    {
      name: "CFA Level I",
      year: "2019"
    }
  ],
} as const;