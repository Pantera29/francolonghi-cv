import { GitHubIcon, LinkedInIcon } from "../components/icons";
import { ResumeData } from "../types";

export const RESUME_DATA: ResumeData = {
  name: "Franco Longhi",
  initials: "FL",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Mexico+City",
  about: "Designing and scaling payment and lending solutions that democratize financial access across Latin America.",
  summary: "Over 9 years creating fintech products across Latin America. From lending platforms in Argentina to alternative payment methods in Mexico. Throughout my journey, I've learned to combine economic analysis, business strategy, and product development to transform ideas into solutions that generate value for thousands of users.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQGFBfOlDIJF7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1560955418191?e=1746057600&v=beta&t=AIsWV7e2kI4XYg3yhOvJzHlhXsHYIBBqc67SD-hO--w",
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
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGLFsyThUlnLA/company-logo_200_200/company-logo_200_200/0/1671624396571/universidad_torcuato_di_tella_logo?e=1748476800&v=beta&t=51EkiDyLCG7EYdVmvxYvogy4NIkkFaNUfZvJaffzFa0"
    },
    {
      school: "CFA Institute",
      degree: "CFA Level I",
      start: "2018",
      end: "2018",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE5jvhn27Jclw/company-logo_200_200/company-logo_200_200/0/1696447613296/cfainstitute_logo?e=1748476800&v=beta&t=tVZgwWWzSwB5r6mPWoXl8l74dCqtTG6ak7GTbiuiD4g"
    },
    {
      school: "Coder House",
      degree: "Full Stack Software Development",
      start: "2020",
      end: "2020",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH47RGjDD7AwQ/company-logo_200_200/company-logo_200_200/0/1640272006358/coderhouse_logo?e=1748476800&v=beta&t=ypv0VnFfdJP9FCPMwQsqMP_UIQnr3ZW19Dgn07AZq-o"
    }
  ],
  work: [
    {
      company: "Conekta",
      link: "https://conekta.com",
      badges: ["Fintech - Payments"],
      title: "Product Lead - Alternative Payment Methods",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG_QunXCaYkHQ/company-logo_200_200/company-logo_200_200/0/1666207550479/conekta_logo?e=1748476800&v=beta&t=IVB3npdwEXLT1zB5d_3aEXtbDgQLEsdh5UOpzSRvr0I",
      start: "2024",
      end: "Present",
      country: "México",
      description: "Leading alternative payment methods including transfers, cash, BNPL, pay-by-bank, and digital wallets for thousands of merchants in Mexico."
    },
    {
      company: "Kuna Capital",
      link: "https://kunacapital.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHpGiuiwBppCQ/company-logo_200_200/company-logo_200_200/0/1698730623922/kuna_capital_logo?e=1748476800&v=beta&t=BYS92olbs9OkfYy6DcQbWYcsdB_E-7UNnBje6Xo2u-U",
      start: "2023",
      end: "2024",
      country: "México",
      description: "Led the product development for our dealership product, scaling to 500+ monthly loans in under a year with presence in hundreds of dealerships."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "2022",
      end: "2023",
      country: "México",
      description: "Led backoffice teams implementing in-house platforms that reduced approval decision, contract issuance and operational processes by 90%."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "2020",
      end: "2022",
      country: "Argentina",
      description: "Built the end-to-end financing experience in Mexico, achieving over 75% adoption rate."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Ecommerce"],
      title: "Associate Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "2020",
      end: "2020",
      country: "Argentina",
      description: "Managed Checkars' e-commerce (later acquired by Kavak), implementing features that increased financing penetration from 2% to 10%."
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2B & B2C"],
      title: "Product Manager - Adelantos.com",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHosIiRVHQ8MQ/company-logo_200_200/company-logo_200_200/0/1734709695794/ixpandit_fintech_group_logo?e=1748476800&v=beta&t=jS111DRkv9IkFMc3xmdCukWOFtXkYrX0wbVi1qbzf8g",
      start: "2018",
      end: "2020",
      country: "Argentina",
      description: "Led product strategy and development from conception to scaling to thousands of monthly loans."
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2B & B2C"],
      title: "Business Analyst - Grouit.com",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHosIiRVHQ8MQ/company-logo_200_200/company-logo_200_200/0/1734709695794/ixpandit_fintech_group_logo?e=1748476800&v=beta&t=jS111DRkv9IkFMc3xmdCukWOFtXkYrX0wbVi1qbzf8g",
      start: "2017",
      end: "2018",
      country: "Argentina",
      description: "Enhanced operational processes and implemented system improvements to optimize the lending platform."
    },
    {
      company: "CRISIL Argentina",
      link: "https://www.crisil.com",
      badges: ["Private Equity"],
      title: "Private Equity Research Analyst",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGgJ-bkVGJOMQ/company-logo_200_200/company-logo_200_200/0/1631351312130?e=1748476800&v=beta&t=G1-m9WYouygsAD0E7XqWYjgSUqLFZIsC5iTOocXRs4Y",
      start: "2016",
      end: "2017",
      country: "Argentina",
      description: "Developed market reports and fintech industry analysis, presenting over 500 companies to investment fund analysts."
    },
    {
      company: "Universidad Torcuato Di Tella",
      link: "https://www.utdt.edu/",
      badges: ["Economics"],
      title: "Teaching Assistant",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGLFsyThUlnLA/company-logo_200_200/company-logo_200_200/0/1671624396571/universidad_torcuato_di_tella_logo?e=1748476800&v=beta&t=51EkiDyLCG7EYdVmvxYvogy4NIkkFaNUfZvJaffzFa0",
      start: "2016",
      end: "2017",
      country: "Argentina",
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
      title: "CV Optimizer",
      description: "An AI tool that helps optimize and improve resumes, providing personalized suggestions to better highlight professional experience.",
      url: "https://cv-optimizer-blue.vercel.app/",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"]
    }
  ]
} as const;