import React, { useState } from "react";
import htalogo from "../assets/htalogo.png";
import "./Navbar.css";
import OffCanvasNavbarMenu from "./OffCanvasNavbarMenu"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="navbar-body">
        <div className="brand-pages-body">
          <img
            src={htalogo}
            alt=""
            className="nav-logo"
            onClick={() => navigate("/")}
          />
          <div className="pages">
            <p onClick={() => navigate("/")}>Inicio</p>
            <p onClick={() => navigate("/")}>Marcas</p>
            <p onClick={() => navigate("/")}>Proyectos</p>
            <p onClick={() => navigate("/")}>¿Quiénes Somos?</p>
            <button className="btn-nav-contact" onClick={() => navigate("/contacto")}>
              Contacto
            </button>
          </div>
        </div>
        
        <div className="burger-menu">
          <i className="bi bi-list"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
