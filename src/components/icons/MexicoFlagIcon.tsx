import React from "react";

export function MexicoFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 900 600" 
      width="14" 
      height="10" 
      {...props}
      style={{ opacity: 0.85, ...props.style }}
    >
      <rect width="900" height="600" fill="#ce1126"/>
      <rect width="600" height="600" fill="#fff"/>
      <rect width="300" height="600" fill="#006847"/>
      <path d="M 450,300 C 450,350 400,400 350,400 C 300,400 250,350 250,300 C 250,250 300,200 350,200 C 400,200 450,250 450,300 z" fill="#8C3937" />
    </svg>
  );
} 