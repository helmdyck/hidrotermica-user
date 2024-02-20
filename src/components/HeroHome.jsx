import React from "react";
import "./HomeComponents.css";

function HeroHome() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-filter"></div>
        <div className="hero-content">
          <h1>
            CLIMATIZACIÓN <br /> RESIDENCIAL & COMERCIAL <br /> DE CALIDAD
          </h1>
          <p>
            Seleccionamos los mejores fabricantes de equipos y accesorios de
            HVAC, <br /> asesorando tu proyecto para que cuentes con las mejores
            opciones y tecnologías.
          </p>
          <button
            className="btn-nav-contact"
            onClick={() => navigate("/contacto")}
          >
            Contacto
          </button>
        </div>
      </section>
    </>
  );
}

export default HeroHome;
