import React, { useState } from 'react';
import '../styles/Contact.css'; // Archivo de estilos

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado por ${formData.name}`);
    // Aquí podrías agregar la lógica para enviar el formulario a un servidor
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte a encontrar tu hogar ideal.</p>
      </header>

      <main className="contact-form-section">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </main>

      <footer className="contact-footer">
        <h3>Detalles de contacto:</h3>
        <p><strong>Dirección:</strong> Calle Ejemplo 123, Madrid, España</p>
        <p><strong>Teléfono:</strong> +123 456 789</p>
        <p><strong>Email:</strong> contacto@aidalai.com</p>
      </footer>
    </div>
  );
}

export default Contact;
