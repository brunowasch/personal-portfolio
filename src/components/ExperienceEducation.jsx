import React from 'react';
import { useIdiom } from '../hooks/useIdiom';

function ExperienceEducation() {
  const idiom = useIdiom();

  const experiences = [
    {
      rolePt: 'Desenvolvedor Full-Stack',
      roleEn: 'Full-Stack Developer',
      company: 'Solutti Networks LTDA',
      typePt: 'Tempo Integral',
      typeEn: 'Full Time',
      periodPt: 'Abr 2026 - Atual',
      periodEn: 'Apr 2026 - Present',
      descPt: 'Trabalho com automação de operações utilizando n8n e integração com grandes modelos de linguagem (LLMs). Desenvolvo e mantenho agentes de IA interativos, como um assistente que permite solicitar e receber informações e diagnósticos detalhados da rede em tempo real. Além disso, continuo atuando no desenvolvimento e na evolução de plataformas web.',
      descEn: 'I work with operations automation using n8n and integration with large language models (LLMs). I develop and maintain interactive AI agents, such as an assistant that allows requesting and receiving detailed information and network diagnostics in real time. In addition, I continue to work on the development and evolution of web platforms.'
    },
    {
      rolePt: 'Desenvolvedor Full-Stack',
      roleEn: 'Full-Stack Developer',
      company: 'Solutti Networks LTDA',
      typePt: 'Estágio',
      typeEn: 'Internship',
      periodPt: 'Jan 2026 - Mar 2026',
      periodEn: 'Jan 2026 - Mar 2026',
      descPt: 'Iniciei minha trajetória na empresa desenvolvendo módulos para monitoramento avançado de redes e bloqueio automatizado de DNS/IPs para uma plataforma web.',
      descEn: 'I started my journey at the company developing modules for advanced network monitoring and automated blocking of DNS/IPs for a web platform.'
    }
  ];

  const education = [
    {
      titlePt: 'Bacharelado em Ciência da Computação',
      titleEn: "Bachelor's in Computer Science",
      institution: 'Universidade Feevale',
      period: '2026 – Atual'
    },
    {
      titlePt: 'Curso Técnico em Informática',
      titleEn: 'IT Technician Course',
      institution: 'Escola Técnica Estadual Monteiro Lobato',
      period: '2023 – 2026'
    },
    {
      titlePt: 'Curso de Inglês',
      titleEn: 'English Course',
      institution: 'Do It English Lessons',
      period: '2021 – 2024'
    }
  ];

  return (
    <section className="container section-padding px-3 px-md-4" id="Experience" style={{ scrollMarginTop: '100px' }}>
      <div className="row g-5">
        {/* Experiência */}
        <div className="col-lg-7">
          <h3 className="fw-bold mb-4">
            {idiom === 'en' ? 'Experience' : 'Experiência'}
          </h3>
          <div className="d-flex flex-column gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="project-card">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h5 className="fw-bold m-0" style={{ color: 'var(--text-primary)' }}>
                      {idiom === 'en' ? exp.roleEn : exp.rolePt}
                    </h5>
                    <div className="text-primary fw-medium" style={{ fontSize: '0.95rem' }}>
                      {exp.company}
                    </div>
                  </div>
                  <span className="badge">
                    {idiom === 'en' ? exp.typeEn : exp.typePt}
                  </span>
                </div>
                <div className="mb-3" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {idiom === 'en' ? exp.periodEn : exp.periodPt}
                </div>
                <p className="project-desc" style={{ textAlign: 'justify' }}>
                  {idiom === 'en' ? exp.descEn : exp.descPt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formação */}
        <div className="col-lg-5">
          <h3 className="fw-bold mb-4">
            {idiom === 'en' ? 'Education' : 'Formação Acadêmica'}
          </h3>
          <div className="d-flex flex-column gap-4">
            {education.map((edu, index) => (
              <div key={index} className="project-card p-4">
                <h6 className="fw-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {idiom === 'en' ? edu.titleEn : edu.titlePt}
                </h6>
                <div className="mb-2" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
