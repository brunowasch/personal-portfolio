import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 
import { useState, useEffect } from 'react';

function Navbar() {
  const idiom = useIdiom();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = idiom === 'en' ? [
    { id: 'AboutMe', label: 'About me' },
    { id: 'Experience', label: 'Experience' },
    { id: 'Projects', label: 'My Projects' },
    { id: 'Events', label: 'Participation' },
    { id: 'Contact', label: 'Contact' },
  ] : [
    { id: 'AboutMe', label: 'Sobre mim' },
    { id: 'Experience', label: 'Experiência' },
    { id: 'Projects', label: 'Meus Projetos' },
    { id: 'Events', label: 'Participações' },
    { id: 'Contact', label: 'Contato' },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid py-2 py-md-3">
        
        {/* Título */}
        <div className="navbar-brand me-auto" style={{ minWidth: 0 }}>
          <h4 className="m-0 text-white fs-6 fs-md-5 text-truncate">
            {idiom === 'en'
              ? 'Bruno Waschburger Silva | Personal portfolio'
              : 'Bruno Waschburger Silva | Portfólio pessoal'}
          </h4>
        </div>

        {/* Hamburger Button */}
        <button 
          className={`navbar-toggler ${!isMenuOpen ? 'collapsed' : ''}`} 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarContent" 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
          <div className="navbar-nav mx-auto text-center py-3 py-lg-0">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav-link text-white mx-2 ${activeSection === link.id ? 'active-section' : ''}`}
                href={`#${link.id}`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Idiomas */}
          <div className="d-flex justify-content-center gap-2 mt-3 mt-lg-0">
            <Link to="/pt" className="idiom-link text-white" onClick={closeMenu}>BR Português</Link>
            <Link to="/en" className="idiom-link text-white" onClick={closeMenu}>US English</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;