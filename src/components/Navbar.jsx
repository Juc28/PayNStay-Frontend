import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Obtener el rol del usuario desde localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userRole = currentUser?.role;

  if (location.pathname === '/') {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={{ width: 'auto', height: 'auto' }} />
      </div>

      <div className="navbar-links">
        <Link to="/properties">Properties</Link>
        <Link to="/profile">Mi Perfil</Link> {/* Nuevo enlace para el perfil */}
        <Link to="/" onClick={handleLogout} className="navbar-link logout-link">
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
