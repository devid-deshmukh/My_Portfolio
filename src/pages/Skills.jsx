import React from 'react'
import LogoLoop from '../components/LogoLoop'
import '../styles/skills.css'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiGithub, SiDocker, SiFigma, SiPython, SiFramer, SiPostman, SiVercel, SiMongodb, SiMongoose, SiAngular, SiVuedotjs } from 'react-icons/si';

const Skills = () => {
  // Corrected titles so they match the actual icons
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiAngular />, title: "Angular", href: "https://angular.io" },
    { node: <SiMongoose />, title: "Mongoose", href: "https://mongoosejs.com" },
    { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion" },
    { node: <SiVuedotjs />, title: "Vue.js", href: "https://vuejs.org" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">My Skills</h2>

      <div className="loop-container">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={50}
          gap={80}
          // fadeOut
          // fadeOutColor="#0f172a" // Match your background color here!
        />

        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="right"
          logoHeight={50}
          gap={80}
          // fadeOut
          // fadeOutColor="#0f172a"
        />
      </div>
    </section>
  )
}

export default Skills