import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useIdiom } from '../hooks/useIdiom';

function Contact() {
  const idiom = useIdiom();

  return (
    <section
      className="container my-5 px-3 px-md-4"
      id="Contact"
      style={{ paddingTop: '10rem', paddingBottom: '2rem' }}
    >
      <div className="container text-justify">
        <h3 className="fw-bold mb-3">
          {idiom === 'en' ? 'Contact' : 'Contato'}
        </h3>

        <div className="row g-4">
          <div className="contact-btn col-12 col-md-4">
            <a
              href="mailto:bwaschburger@gmail.com"
              className="contact-link d-flex align-items-center gap-3 p-3 border rounded-pill shadow-sm text-decoration-none text-white bg-dark justify-content-center"
              target="_blank"
              style={{ width: '100%' }}
            >
              <i className="bi bi-envelope"></i>bwaschburger@gmail.com
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="https://github.com/brunowasch"
              className="contact-link d-flex align-items-center gap-3 p-3 border rounded-pill shadow-sm text-decoration-none text-white bg-dark justify-content-center"
              target="_blank"
              style={{ width: '100%' }}
            >
              <i className="bi bi-github"></i>github.com/brunowasch
            </a>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="https://www.linkedin.com/in/brunowasch"
              className="contact-link d-flex align-items-center gap-3 p-3 border rounded-pill shadow-sm text-decoration-none text-white bg-dark justify-content-center"
              target="_blank"
              style={{ width: '100%' }}
            >
              <i className="bi bi-linkedin"></i>linkedin.com/in/brunowasch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
