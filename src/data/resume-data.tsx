import { GitHubIcon, LinkedInIcon } from "../components/icons";
import { ResumeData } from "../types";

export const RESUME_DATA: ResumeData = {
  name: "Franco Longhi",
  initials: "FL",
  location: "Mexico City, Mexico",
  locationLink: "https://www.google.com/maps/place/Mexico+City",
  about: "Building fintech products. At established companies and startups.",
  summary: "Over 7 years creating fintech products across Latin America. From lending platforms in Argentina to alternative payment methods in Mexico. Throughout my journey, I've learned to combine economic analysis, business strategy, and product development to transform ideas into solutions that generate value for millions of users.",
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
      start: "Jul 2024",
      end: "Present",
      country: "México",
      description: "Leading the development of alternative payment methods for one of Mexico's most important payment processors, providing solutions for thousands of e-commerce businesses across the region."
    },
    {
      company: "Kuna Capital",
      link: "https://kunacapital.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHpGiuiwBppCQ/company-logo_200_200/company-logo_200_200/0/1698730623922/kuna_capital_logo?e=1748476800&v=beta&t=BYS92olbs9OkfYy6DcQbWYcsdB_E-7UNnBje6Xo2u-U",
      start: "Oct 2023",
      end: "Aug 2024",
      country: "México",
      description: "Designed and launched financial products for the Mexican market, focused on democratizing access to financial services for individuals and businesses."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Senior Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "Apr 2022",
      end: "Oct 2023",
      country: "México",
      description: "Led key product initiatives at Latin America's first used car marketplace unicorn, improving the financing and payment experience for users in Mexico."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Fintech - Lending B2C"],
      title: "Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "Dec 2020",
      end: "Apr 2022",
      country: "Argentina",
      description: "Responsible for product development for Kavak Argentina, focused on optimizing business processes and user experience during the company's regional expansion."
    },
    {
      company: "Kavak",
      link: "https://kavak.com",
      badges: ["Ecommerce"],
      title: "Associate Product Manager",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEZv68bwTYKFA/company-logo_200_200/company-logo_200_200/0/1656716941394/kavakcom_logo?e=1748476800&v=beta&t=u8zRGo4Y1n7Ww6Xi3ONNPZ9aAtkRXEE3GsAi1vx9Km0",
      start: "Jun 2020",
      end: "Dec 2020",
      country: "Argentina",
      description: "Responsible for product development for Kavak Argentina, focused on optimizing business processes and user experience during the company's regional expansion."
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2C"],
      title: "Product Lead - Adelantos.com",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHosIiRVHQ8MQ/company-logo_200_200/company-logo_200_200/0/1734709695794/ixpandit_fintech_group_logo?e=1748476800&v=beta&t=jS111DRkv9IkFMc3xmdCukWOFtXkYrX0wbVi1qbzf8g",
      start: "Jul 2018",
      end: "Jun 2020",
      country: "Argentina",
      description: "Led the design and implementation of product strategy, covering commercial areas, marketing, pricing, and UX. Optimized operational metrics and performed financial analysis, contributing to the sustained growth of the online lending business."
    },
    {
      company: "Ixpandit Fintech Factory",
      link: "https://ixpandit.com/",
      badges: ["Fintech - Lending B2B"],
      title: "Product Owner - Grouit.com",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHosIiRVHQ8MQ/company-logo_200_200/company-logo_200_200/0/1734709695794/ixpandit_fintech_group_logo?e=1748476800&v=beta&t=jS111DRkv9IkFMc3xmdCukWOFtXkYrX0wbVi1qbzf8g",
      start: "Oct 2017",
      end: "Jun 2018",
      country: "Argentina",
      description: "Led the design and implementation of product strategy, covering commercial areas, marketing, pricing, and UX. Optimized operational metrics and performed financial analysis, contributing to the sustained growth of the online lending business."
    },
    {
      company: "CRISIL Argentina",
      link: "https://www.crisil.com",
      badges: ["Private Equity"],
      title: "Private Equity Research Analyst",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQGgJ-bkVGJOMQ/company-logo_200_200/company-logo_200_200/0/1631351312130?e=1748476800&v=beta&t=G1-m9WYouygsAD0E7XqWYjgSUqLFZIsC5iTOocXRs4Y",
      start: "Aug 2016",
      end: "Oct 2017",
      country: "Argentina",
      description: "Developed market reports and fintech industry analysis, presenting over 500 companies to investment fund analysts. Created daily newsletters with information on the financial and banking sector."
    },
    {
      company: "Universidad Torcuato Di Tella",
      link: "https://www.utdt.edu/",
      badges: ["Economics"],
      title: "Teaching Assistant",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGLFsyThUlnLA/company-logo_200_200/company-logo_200_200/0/1671624396571/universidad_torcuato_di_tella_logo?e=1748476800&v=beta&t=51EkiDyLCG7EYdVmvxYvogy4NIkkFaNUfZvJaffzFa0",
      start: "Aug 2016",
      end: "Oct 2017",
      country: "Argentina",
      description: "Developed market reports and fintech industry analysis, presenting over 500 companies to investment fund analysts. Created daily newsletters with information on the financial and banking sector."
    },
    {
      company: "US Embassy in Argentina",
      link: "https://ar.usembassy.gov/es/",
      badges: ["Economics"],
      title: "Economic Intern",
      logo: "https://ar.usembassy.gov/wp-content/uploads/sites/111/2023/01/use-buenos-aires-seal-e1674507504483.png",
      start: "Aug 2016",
      end: "Oct 2017",
      country: "Argentina",
      description: "Developed market reports and fintech industry analysis, presenting over 500 companies to investment fund analysts. Created daily newsletters with information on the financial and banking sector."
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
} as const;