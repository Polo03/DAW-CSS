import React, { useState } from 'react';
import '../styles/carousel.css'; // Para el estilo del carrusel
import imagenCasa1 from '../assets/imagenCasa1.jpg';
import imagenCasa2 from '../assets/imagenCasa2.jpg';
import imagenCasa3 from '../assets/imagenCasa3.jpg';

function Carousel() {
  // Estado para el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes para el carrusel
  const images = [
    imagenCasa1,
    imagenCasa2,
    imagenCasa3
  ];

  // Función para cambiar la imagen hacia la izquierda
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Función para cambiar la imagen hacia la derecha
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &#10094; {/* Flecha hacia la izquierda */}
      </button>
      
      <div className="carousel-image">
        <img src={images[currentImageIndex]} alt="Carrusel" />
      </div>
      
      <button className="carousel-button next" onClick={handleNextClick}>
        &#10095; {/* Flecha hacia la derecha */}
      </button>
    </div>
  );
}

export default Carousel;
