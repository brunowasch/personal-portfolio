import React from 'react';
import portfolioPhoto from "../assets/portfolio-photo.png";
import AboutMe from "./AboutMe";
import { useIdiom } from "../hooks/useIdiom";

function Hero() {
  const idiom = useIdiom();

  return (
    <section className="container px-3 px-md-4 pt-5 mt-5"
      id="AboutMe"
      style={{ scrollMarginTop: '100px', paddingTop: '2rem' }}
    >
      <div className="row align-items-center mt-5">
        <div className="col-md-8 mt-5 mt-md-0">
          <h2 className="text-primary fs-1 fw-bold title-font highlight-shadow">
            Bruno Waschburger Silva
          </h2>
          <p className="fs-6">
            {idiom === 'en'
              ? 'IT technician, Computer Science student, and full-stack developer.'
              : 'Técnico em Informática, estudante de Ciência da Computação e desenvolvedor full-stack.'}
          </p>
          <AboutMe />
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center mt-4 mt-md-0 hero-photo-container">
          <img
            src={portfolioPhoto}
            alt="Bruno Waschburger Silva"
            className="img-fluid rounded-circle ms-md-5 hero-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;