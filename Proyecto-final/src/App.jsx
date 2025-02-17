import { Link, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import './styles/main.css';

function App() {
  return (

      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/gallery">Galería</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer>
          <p>&copy; 2025 - Mi Sitio Web en React</p>
        </footer>
      </div>
  );
}

export default App;
