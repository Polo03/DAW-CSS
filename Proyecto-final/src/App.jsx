import { Link, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/main.css';
import fotoPerfil from './assets/foto_perfil.jpg';
import LoginForm from "./pages/LoginForm";
import Profile from "./pages/Profile";

const App = () => {
  const [user, setUser] = useState(null); // Estado para gestionar el usuario logueado

  // Función para gestionar el login
  const handleLogin = (userData) => {
    setUser(userData); // Actualiza el estado del usuario al logearse
  };
  return (

      <div className="app-container">
        <header className="navbar">
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
            <div>
              {user ? (
                <Link to="/profile">
                  <img
                    src={fotoPerfil}
                    alt="Perfil"
                    className="profile-img"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <img
                    src={fotoPerfil}
                    alt="Iniciar sesión"
                    className="profile-img"
                  />
                </Link>
              )}
            </div>
          </nav>
        </header>

        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Routes>
        </main>
        
        <footer>
          <p>&copy; 2025 - Mi Sitio Web en React</p>
        </footer>
      </div>
  );
}

export default App;
