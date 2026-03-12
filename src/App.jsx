import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePT from './pages/HomePT';
import HomeEN from './pages/HomeEN';

function App() {
  return (
    <Router basename="/personal-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePT />} />
        <Route path="/pt" element={<HomePT />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
