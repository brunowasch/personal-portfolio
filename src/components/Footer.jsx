import 'bootstrap/dist/css/bootstrap.min.css';
import { useIdiom } from '../hooks/useIdiom'; 

function Footer() {
  const idiom = useIdiom();

  return (
    <footer className="text-center py-4" style={{ backgroundColor: '#0e0e10' }}>
      <div className="container text-white">
        <p>
          {idiom === 'en'
            ? 'Bruno Waschburger Silva © All rights reserved.'
            : 'Bruno Waschburger Silva © Todos os direitos reservados.'}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
