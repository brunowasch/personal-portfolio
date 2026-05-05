import React from "react";
import { useIdiom } from "../hooks/useIdiom";

function Technologies() {
  const idiom = useIdiom();

  const technologies = [
    { nome: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
    { nome: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { nome: "Tailwindcss", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { nome: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { nome: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { nome: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { nome: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { nome: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { nome: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { nome: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { nome: "n8n", icon: "https://cdn.simpleicons.org/n8n" },
    { nome: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  return (
    <section className="container my-5 px-3 px-md-4">
      <h5 className="fw-bold mb-4">
        {idiom === 'en' ? 'Technologies I Use' : 'Tecnologias que utilizo'}
      </h5>
      <div className="d-flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <div key={index} className="text-center">
            <img
              src={`${tech.icon}`}
              alt={tech.nome}
              title={tech.nome}
              width="40"
              height="40"
            />
            <div className="mt-1" style={{ fontSize: '0.9rem' }}>
              {tech.nome}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;