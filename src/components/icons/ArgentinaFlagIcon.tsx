import React from "react";

export function ArgentinaFlagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 900 600" 
      width="14" 
      height="10" 
      {...props}
      style={{ opacity: 0.85, ...props.style }}
    >
      <rect width="900" height="600" fill="#74ACDF"/>
      <rect width="900" height="200" fill="#fff" y="200"/>
      <circle cx="450" cy="300" r="60" fill="#F6B40E"/>
    </svg>
  );
} 