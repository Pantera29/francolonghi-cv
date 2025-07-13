import React from "react";

export interface Social {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  logo?: string;
}

export interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo?: string;
  start: string;
  end: string;
  country: string;
  companyDescription?: string;
  description: string | string[];
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about?: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Social[];
  };
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
} 