import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useIdiom } from '../hooks/useIdiom';

function Projects() {
  const idiom = useIdiom();

  const projects = [
    {
      id: 'connect-skills-next',
      title: 'Connect Skills',
      descPt: 'Plataforma que conecta candidatos e empresas com base em habilidades comportamentais utilizando inteligência artificial.',
      descEn: 'Platform that connects candidates and companies based on behavioral skills using artificial intelligence.',
      links: [
        { href: 'https://github.com/brunowasch/connect-skills-next', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'Next.js/Node.js',
    },
    {
      id: 'meetor-ai',
      title: 'Meetor.ai',
      descPt: 'Plataforma de mentorias que permite a avaliação técnica em tempo real. Integração completa de dados com o Connect Skills.',
      descEn: 'Mentoring platform that allows real-time technical evaluation. Complete data integration with Connect Skills.',
      links: [
        { href: 'https://github.com/brunowasch/meetor.ai', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'Next.js/APIs',
    },
    {
      id: 'movie-react',
      title: idiom === 'en' ? 'Movie API App' : 'Aplicação de API de Filmes',
      descPt: 'Aplicação web que consome uma API de filmes com funcionalidades de busca e filtro.',
      descEn: 'Web application that consumes a movie API with search and filter functionalities.',
      links: [
        { href: 'https://github.com/brunowasch/api-filme-react', icon: 'bi-github', label: 'GitHub' },
        { href: 'https://api-filme-react-gules.vercel.app', icon: 'bi-browser-chrome', label: idiom === 'en' ? 'See project' : 'Ver projeto' }
      ],
      badge: 'React/APIs',
    },
    {
      id: 'wtech',
      title: 'WTech',
      descPt: 'Aplicação onde é possível buscar por usuários do GitHub através do consumo de uma API.',
      descEn: 'Application where it is possible to search for GitHub users by consuming an API.',
      links: [
        { href: 'https://github.com/brunowasch/wtech', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'React/TS',
    },
    {
      id: 'java-naval-battle',
      title: idiom === 'en' ? 'Naval Battle Game' : 'Jogo Batalha Naval',
      descPt: 'Jogo desenvolvido em Java, executado diretamente no terminal.',
      descEn: 'Naval Battle game developed in Java, executed directly in the terminal.',
      links: [
        { href: 'https://github.com/brunowasch/java-naval-battle', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'Java',
    },
    {
      id: 'sistema-curso',
      title: idiom === 'en' ? 'Course/Student Management System' : 'Sistema de Cadastro de Cursos/Alunos',
      descPt: 'Sistema desenvolvido para gerenciar o cadastro de alunos, cursos e matrículas, mantendo a integridade dos dados.',
      descEn: 'System developed to manage the registration of students, courses and enrollments, maintaining data integrity.',
      links: [
        { href: 'https://github.com/brunowasch/Sistema-Curso', icon: 'bi-github', label: 'GitHub' }
      ],
      badge: 'Java/PostgreSQL',
    },
    {
      id: 'teach3035-petshop',
      title: idiom === 'en' ? 'Pet Shop System' : 'Sistema de Pet Shop',
      descPt: 'Sistema simples de pet shop com HTML, CSS e JavaScript; cadastro, listagem e busca de pets.',
      descEn: 'Simple pet shop system with HTML, CSS and JavaScript; registration, listing and searching pets.',
      links: [
        { href: 'https://github.com/brunowasch/teach3035-petshop', icon: 'bi-github', label: 'GitHub' },
        { href: 'https://caotinhozen-petshop.vercel.app', icon: 'bi-browser-chrome', label: idiom === 'en' ? 'See project' : 'Ver projeto' }
      ],
      badge: 'HTML/CSS/JS',
    },
    {
      id: 'streamlit-dashboard',
      title: idiom === 'en' ? 'World Happiness Dashboard' : 'Felicidade Mundial: Dashboard Interativo',
      descPt: 'Dashboard interativo em Python com Streamlit, analisando o Relatório de Felicidade Mundial.',
      descEn: 'Interactive dashboard in Python using Streamlit, analyzing the World Happiness Report.',
      links: [
        { href: 'https://github.com/brunowasch/dashboard-py streamlit', icon: 'bi-github', label: 'GitHub' },
        { href: 'https://dashboard-py-prog-ii.streamlit.app', icon: 'bi-browser-chrome', label: idiom === 'en' ? 'See project' : 'Ver projeto' }
      ],
      badge: 'Python/Streamlit',
    },
    {
      id: 'delivery-system',
      title: idiom === 'en' ? 'Delivery System (React + Go)' : 'Sistema de Delivery (React + Go)',
      descPt: 'Sistema de delivery com front-end em React e back-end em Go; consumo de API para visualizar comidas, restaurantes e clientes.',
      descEn: 'Delivery system with React front-end and Go back-end; API consumption to view foods, restaurants and customers.',
      links: [
        { href: 'https://github.com/brunowasch/delivery-go', icon: 'bi-github', label: 'GitHub' },
        { href: 'https://brunowasch.github.io/delivery-go', icon: 'bi-browser-chrome', label: idiom === 'en' ? 'See project' : 'Ver projeto' }
      ],
      badge: 'React/Go',
    }
  ];

  return (
    <section
      className="container my-5 px-3 px-md-4"
      id="Projects"
      style={{ paddingTop: '10rem', paddingBottom: '10rem' }}
    >
      <h3 className="fw-bold mb-4">
        {idiom === 'en' ? 'My Projects' : 'Meus Projetos'}
      </h3>

      <div className="row g-4">
        {projects.map((p) => (
          <div className="col-12 col-md-6 col-lg-4" key={p.id}>
            <article className="project-card h-100 d-flex flex-column">
              <div className="project-card__header d-flex align-items-center justify-content-between">
                <span className="project-badge">{p.badge}</span>
              </div>

              <div className="project-card__body mt-2">
                <h5 className="project-title">{p.title}</h5>
                <p className="project-desc">
                  {idiom === 'en' ? p.descEn : p.descPt}
                </p>
              </div>

              <div className="project-card__footer mt-auto d-flex flex-wrap gap-2">
                {p.links.map((l, idx) => (
                  <a
                    key={`${p.id}-${idx}`}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost d-inline-flex align-items-center gap-2 mt-4"
                  >
                    <i className={`bi ${l.icon}`}></i>
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
