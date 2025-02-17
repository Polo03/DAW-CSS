import React from 'react';
import '../styles/card.css'; // Asegúrate de tener el archivo de estilos o usa estilos en línea

const Card = ({ title, image, description, onClick }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onClick}>
          Más Información
        </button>
      </div>
    </div>
  );
};

export default Card;
