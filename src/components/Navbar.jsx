import React from 'react';
import { useLocation } from 'react-router-dom';  // Importa useLocation
import './Navbar.css';

function Navbar() {
  const location = useLocation();  // Obtén la ubicación actual

  // Si estamos en la página de login (ruta "/"), no mostrar la barra
  if (location.pathname === '/') {
    return null;  // Retorna null para no renderizar la barra de navegación
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ width: 'auto', height: 'auto' }} />
      </div>

      <div className="navbar-links">
        <a href="/properties">Properties</a>
        <a href="/appointments">Appointments</a>
        <a href="/transactions">Transactions</a>
      </div>
    </div>
  );
}

export default Navbar;

