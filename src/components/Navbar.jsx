import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 
import { useState, useEffect } from 'react';

function Navbar() {
  const idiom = useIdiom();
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    const scrollPoint = window.innerHeight * 0.6;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= scrollPoint && rect.bottom >= scrollPoint) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: '#0e0e10' }}>
      <div className="container-fluid py-3">
        
        <div className="d-flex justify-content-between align-items-center w-100 flex-wrap">
          
          {/* Título */}
          <div className="me-3" style={{ minWidth: 0 }}>
            <h4 className="m-0 text-white fs-6 fs-md-5 text-truncate">
              {idiom === 'en'
                ? 'Bruno Waschburger Silva | Personal portfolio'
                : 'Bruno Waschburger Silva | Portfólio pessoal'}
            </h4>
          </div>

          {/* Links */}
          <div className="d-flex justify-content-center flex-wrap">
            {idiom === 'en' ? (
              <>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'AboutMe' ? 'active-section' : ''}`}
                  href="#AboutMe"
                >
                  About me
                </a>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'Projects' ? 'active-section' : ''}`}
                  href="#Projects"
                >
                  My Projects
                </a>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'Events' ? 'active-section' : ''}`}
                  href="#Events"
                >
                  Participation
                </a>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'Contact' ? 'active-section' : ''}`}
                  href="#Contact"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'AboutMe' ? 'active-section' : ''}`}
                  href="#AboutMe"
                >
                  Sobre mim
                </a>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'Projects' ? 'active-section' : ''}`}
                  href="#Projects"
                >
                  Meus Projetos
                </a>
                <a 
                  className={`nav-link text-white mx-2 ${activeSection === 'Events' ? 'active-section' : ''}`}
                  href="#Events"
                >
                  Participações
                </a>
                <a
                  className={`nav-link text-white mx-2 ${activeSection === 'Contact' ? 'active-section' : ''}`}
                  href="#Contact"
                >
                  Contato
                </a>
              </>
            )}
          </div>

          {/* Idiomas */}
          <div className="ms-3 text-nowrap">
            <Link to="/pt" className="idiom-link text-white me-3">BR Português</Link>
            <Link to="/en" className="idiom-link text-white">US English</Link>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;