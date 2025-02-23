import React from 'react';
import '../styles/about.css'; // Importa los estilos

function SobreNosotros() {
  return (
    <div className="sobre-nosotros-container">
      <header className="header">
        <div className="logo">
          <h1>AIDALAI</h1>
          <p>Construimos tu hogar, diseñamos tu futuro.</p>
        </div>
      </header>

      <main className="main-content">
        <section className="about-us">
          <h2>Sobre Nosotros</h2>
          <p>
            En <strong>CasaPerfecta</strong>, nos apasiona crear espacios que se conviertan en hogares. Fundada en 2005, nuestra empresa ha trabajado incansablemente para ofrecer viviendas de calidad, con diseños innovadores y funcionales. Creemos que cada hogar debe reflejar los sueños y necesidades de quienes lo habitan, y eso es lo que nos motiva a seguir creciendo cada día.
          </p>
          <p>
            Nuestro equipo está compuesto por arquitectos, ingenieros, diseñadores y un grupo de expertos que se encargan de cada detalle en el proceso de construcción, desde la elección de materiales hasta el acabado final. Nos esforzamos por ofrecer a nuestros clientes la mejor experiencia y el hogar que siempre han deseado.
          </p>
          <p>
            En <strong>CasaPerfecta</strong> no solo construimos casas, sino también relaciones duraderas con nuestros clientes. Estamos comprometidos con la calidad, la innovación y el servicio al cliente, lo que nos ha permitido destacarnos en el mercado como una de las empresas más confiables y respetadas en el sector inmobiliario.
          </p>
        </section>

        <section className="our-values">
          <h2>Nuestros Valores</h2>
          <ul>
            <li><strong>Compromiso:</strong> Nos comprometemos a entregar cada proyecto a tiempo y con la mejor calidad.</li>
            <li><strong>Innovación:</strong> Siempre buscamos nuevas ideas y soluciones para mejorar nuestros proyectos.</li>
            <li><strong>Confianza:</strong> Nuestros clientes son nuestra prioridad, y trabajamos para ganar su confianza con cada hogar que entregamos.</li>
            <li><strong>Sostenibilidad:</strong> Apostamos por prácticas sostenibles y respetuosas con el medio ambiente en todos nuestros proyectos.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default SobreNosotros;
