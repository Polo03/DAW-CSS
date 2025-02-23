import React from 'react';
import Card from '../components/Card'; // Importa el componente Card
import '../styles/home.css';
import Carousel from '../components/Carousel'; // Importa el componente Carrusel
import logo from '../assets/logo.jpg';

function Home() {
  const handleClick = () => {
    alert('Compromiso y Confianza, Construyendo Hogares desde 2003');
  };

  return (
    <div className="home-container">
      <h1 className="main-title">Bienvenido a la página de inicio</h1>
      
      <div className="cards-section">
        <Card
          title="Tu Hogar, Nuestra Prioridad"
          image={logo}
          description="En Aidalai, nos dedicamos a ofrecer soluciones de vivienda que se adaptan a tus necesidades y sueños. Con años de experiencia en el sector inmobiliario, nuestra misión es proporcionar hogares que no solo sean cómodos, sino que también cuenten con la calidad y seguridad que tu familia merece. Desde casas modernas hasta opciones más tradicionales, cada uno de nuestros proyectos está pensado para brindar confort, funcionalidad y el mejor diseño. Estamos comprometidos en ofrecerte la casa que siempre has soñado, en el lugar donde más te importa."
          onClick={handleClick}
        />

        <Carousel /> {/* El carrusel va aquí */}

        <Card
          title="Vive en el lugar de tus sueños"
          image={logo}
          description="¿Estás buscando la casa perfecta? En Aidalai, tenemos una amplia gama de opciones para ti, desde casas en zonas urbanas de alto crecimiento hasta viviendas en entornos tranquilos y naturales. Ya sea que busques una casa moderna, espaciosa, o una opción más económica, contamos con el equipo experto para ayudarte a encontrar la mejor opción según tus necesidades y presupuesto. Nuestro compromiso es acompañarte en cada paso del proceso, asegurándonos de que tu experiencia de compra sea fácil y sin complicaciones. ¡Haz realidad el sueño de tu propio hogar con nosotros!"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Home;
