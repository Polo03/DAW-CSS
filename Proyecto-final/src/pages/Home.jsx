import React from 'react';
import Card from '../components/Card'; // Importa el componente Card
import '../styles/home.css';

function Home() {
  const handleClick = () => {
    alert('¡Más información sobre la card!');
  };

  return (
    <div className="cards-section">
      <Card
        title="Informacion 1"
        image="https://via.placeholder.com/300x200"
        description="Esta es la primera card."
        onClick={handleClick}
      />

      <h1 className="main-title">Bienvenido a la página de inicio</h1>

      <Card
        title="Informacion 2"
        image="https://via.placeholder.com/300x200"
        description="Esta es la segunda card."
        onClick={handleClick}
      />
    </div>
  );
}

export default Home;
