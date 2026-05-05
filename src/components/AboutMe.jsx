import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 
import curriculoPDF from '../assets/Curriculo-Bruno-Waschburger-Silva.pdf';
import resumePDF from "../assets/Bruno-Waschburger-Silva-Resume.pdf";
import brazilFLag from '../assets/brazil.svg';
import usaFlag from '../assets/usa.svg';

function AboutMe() {
  const idiom = useIdiom();

  return (
    <div className="fs-6">
      <h3 className="fw-bold mb-3">
        {idiom === 'en' ? 'About Me' : 'Sobre Mim'}
      </h3>

      {idiom === 'en' ? (
        <>
          <p className='text-justify'>
           I am an IT technician and a Computer Science student, currently working on web development and LLMs. I develop projects using modern tech stacks focused on real market needs. I am interested in applications that integrate artificial intelligence into full-stack development to create efficient, intelligent, and practical systems.
          </p>

          <p className='text-justify'>
            Winner of <a href="#Events" className="inline-link">Hackatime 2024</a> with the project Up Connections — currently called <a href="#Projects" className="inline-link">Connect Skills</a>. The project was also presented at the <a href="#Events" className="inline-link">Taquara Summit</a> that same year and awarded at the <a href="#Events" className="inline-link">16th FEINTEC</a> in 2025.
          </p>
        </>
      ) : (
        <>
          <p className='text-justify'>
           Sou técnico em informática e estudante de Ciência da Computação, atualmente trabalhando na área de desenvolvimento web e de LLMs. Desenvolvo projetos com stacks modernas voltados às necessidades reais do mercado. Tenho interesse em aplicações que integrem inteligência artificial ao desenvolvimento full-stack para criar sistemas eficientes, inteligentes e práticos.
          </p>
          <p className='text-justify'>
            Vencedor do <a href="#Events" className="inline-link">Hackatime 2024</a> com o projeto Up Connections — atualmente denominado <a href="#Projects" className="inline-link">Connect Skills</a>. O projeto também foi apresentado no <a href="#Events" className="inline-link">Taquara Summit</a> do mesmo ano e premiado na <a href="#Events" className="inline-link">16ª FEINTEC</a> em 2025.
          </p>
        </>
      )}

      {/* Idiomas */}
      <h4 className="fw-bold mt-4">
        {idiom === 'en' ? 'Languages I speak' : 'Idiomas que falo'}
      </h4>
      <ul className="list-unstyled">
        <li>
          <div className="mt-4 mb-4 d-flex align-items-center gap-2">
            <img src={brazilFLag} width={30} height={30} alt="Brazil flag" />
            {idiom === 'en' ? 'Portuguese — Native' : 'Português — Nativo'}
          </div>
        </li>
        <li>
          <div className="mb-4 d-flex align-items-center gap-2">
            <img src={usaFlag} width={30} height={30} alt="USA flag" />
            {idiom === 'en' ? 'English — Advanced' : 'Inglês — Avançado'}
          </div>
        </li>
      </ul>

      {/* Currículo/Resume */}
      {idiom === 'en' ? (
        <a href={resumePDF} download="Bruno Waschburger Silva's Resume" className="btn btn-primary mb-5">
          <i className="bi bi-download me-2" />
          Download Resume
        </a>
      ) : (
        <a href={curriculoPDF} download="Currículo de Bruno Waschburger Silva" className="btn btn-primary mb-5">
          <i className="bi bi-download me-2" />
          Baixar Currículo
        </a>
      )}
    </div>
  );
}

export default AboutMe;
