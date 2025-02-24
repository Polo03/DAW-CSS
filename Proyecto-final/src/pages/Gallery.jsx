import React from 'react';
import '../styles/Gallery.css'; // Importa el archivo CSS para la galería
import imagenCasa1 from '../assets/imagenCasa1.jpg';
import imagenCasa2 from '../assets/imagenCasa2.jpg';
import imagenCasa3 from '../assets/imagenCasa3.jpg';

const Gallery = () => {
  const images = [
    { src: imagenCasa1, alt: 'Imagen 1' },
    { src: imagenCasa2, alt: 'Imagen 2' },
    { src: imagenCasa3, alt: 'Imagen 3' },
    // Agrega más objetos de imagen aquí
  ];

  return (
    <div className="gallery-container">
      <div className="gallery-top">
        <div className="gallery-item">
          <img src={images[0].src} alt={images[0].alt} />
        </div>
        <div className="gallery-item">
          <img src={images[1].src} alt={images[1].alt} />
        </div>
      </div>
      <div className="gallery-bottom">
        <div className="gallery-item">
          <img src={images[2].src} alt={images[2].alt} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
