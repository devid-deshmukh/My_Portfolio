import React from 'react'
import LogoLoop from '../components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub, SiDocker, SiFigma, SiPython, SiFramer, SiPostman, SiVercel, SiMongodb, SiMongoose, SiAngular, SiVuedotjs } from 'react-icons/si';
import { DiDocker } from 'react-icons/di';
import { Figma } from 'lucide-react';
const Skills = () => {


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGithub />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiDocker />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNextdotjs />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAngular />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMongoose/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVuedotjs />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPostman />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMongodb />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];
  return (
    <>
    <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
<LogoLoop
        logos={techLogos}
        speed={100}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/>

      </>

  )
}

export default Skills
