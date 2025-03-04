import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { WhatsAppIcon, MexicoFlagIcon, ArgentinaFlagIcon } from "@/components/icons";
import { WorkExperience } from "@/types";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

// Función para agrupar trabajos por empresa
const groupWorkByCompany = (workExperiences: WorkExperience[]) => {
  const groupedWork = workExperiences.reduce((acc, work) => {
    if (!acc[work.company]) {
      acc[work.company] = {
        company: work.company,
        link: work.link,
        logo: work.logo,
        badges: work.badges,
        roles: [],
        startYear: parseInt(work.start),
        endYear: work.end === "Present" ? new Date().getFullYear() : parseInt(work.end),
      };
    }
    
    // Combinar badges únicos
    work.badges.forEach(badge => {
      if (!acc[work.company].badges.includes(badge)) {
        acc[work.company].badges.push(badge);
      }
    });
    
    // Actualizar años si es necesario
    const startYear = parseInt(work.start);
    const endYear = work.end === "Present" ? new Date().getFullYear() : parseInt(work.end);
    
    if (startYear < acc[work.company].startYear) {
      acc[work.company].startYear = startYear;
    }
    
    if (endYear > acc[work.company].endYear) {
      acc[work.company].endYear = endYear;
    }
    
    // Agregar el rol actual
    acc[work.company].roles.push(work);
    
    return acc;
  }, {} as Record<string, {
    company: string;
    link: string;
    logo?: string;
    badges: string[];
    roles: WorkExperience[];
    startYear: number;
    endYear: number;
  }>);
  
  // Convertir el objeto a un array y ordenar por año de finalización (más reciente primero)
  return Object.values(groupedWork).sort((a, b) => b.endYear - a.endYear);
};

// Función para ordenar roles dentro de una empresa (más reciente primero)
const sortRolesByDate = (roles: WorkExperience[]) => {
  return [...roles].sort((a, b) => {
    const endA = a.end === "Present" ? new Date().getFullYear() : parseInt(a.end);
    const endB = b.end === "Present" ? new Date().getFullYear() : parseInt(b.end);
    
    if (endA !== endB) {
      return endB - endA; // Ordenar por año de finalización (descendente)
    }
    
    // Si los años de finalización son iguales, ordenar por año de inicio (descendente)
    return parseInt(b.start) - parseInt(a.start);
  });
};

export default function Page() {
  // Agrupar trabajos por empresa
  const groupedWork = groupWorkByCompany(RESUME_DATA.work);
  
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <>
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`tel:${RESUME_DATA.contact.tel}`}>
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    className="h-8 w-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={`https://wa.me/${RESUME_DATA.contact.tel.replace(/\+/g, '')}`} target="_blank">
                      <WhatsAppIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {groupedWork.map((companyGroup) => {
            const sortedRoles = sortRolesByDate(companyGroup.roles);
            
            return (
              <Card key={companyGroup.company} className="mb-4 print:break-inside-avoid">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      {companyGroup.logo && (
                        <img 
                          src={companyGroup.logo} 
                          alt={`${companyGroup.company} logo`} 
                          className="h-7 w-7 rounded-full mr-2 object-contain bg-white border border-gray-200"
                        />
                      )}
                      <a className="hover:underline text-gray-900" href={companyGroup.link}>
                        {companyGroup.company}
                      </a>

                      <span className="inline-flex gap-x-1 ml-2">
                        {companyGroup.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500 font-medium">
                      {companyGroup.startYear === companyGroup.endYear 
                        ? companyGroup.startYear 
                        : `${companyGroup.startYear} - ${companyGroup.endYear === new Date().getFullYear() ? "Present" : companyGroup.endYear}`}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-2">
                  {sortedRoles.map((role, index) => (
                    <div 
                      key={`${role.company}-${role.title}`} 
                      className={`pt-2 ${index !== 0 ? "border-t border-gray-50 mt-3" : ""}`}
                    >
                      <div className="flex items-center justify-between gap-x-2 mb-1">
                        <h4 className="font-mono text-sm leading-tight text-gray-700">
                          {role.title}
                        </h4>
                        <div className="text-xs tabular-nums text-gray-400 flex items-center">
                          {role.country === "México" ? 
                            <MexicoFlagIcon className="h-3 w-4 mr-1 opacity-80" /> : 
                            <ArgentinaFlagIcon className="h-3 w-4 mr-1 opacity-80" />
                          }
                          {role.start === role.end ? role.start : `${role.start} - ${role.end}`}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {Array.isArray(role.description) ? (
                          role.description.map((paragraph, idx) => (
                            <p key={idx} className="mb-2">
                              {paragraph}
                            </p>
                          ))
                        ) : (
                          <p>{role.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school} className="print:break-inside-avoid">
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="flex items-center gap-x-2">
                      {education.logo && (
                        <img 
                          src={education.logo} 
                          alt={`${education.school} logo`}
                          className="h-6 w-6 rounded-full mr-2 object-contain bg-white border border-gray-200" 
                        />
                      )}
                      <h3 className="font-semibold leading-none">
                        {education.school}
                      </h3>
                    </div>
                    <div className="text-sm tabular-nums text-gray-500">
                      {parseInt(education.start) === parseInt(education.end) 
                        ? education.start 
                        : `${education.start} - ${education.end}`}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Personal Projects</h2>
          <div className="flex flex-col gap-4">
            {RESUME_DATA.projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <a href={project.url} target="_blank" className="hover:underline">
                          {project.title}
                        </a>
                      </div>
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
