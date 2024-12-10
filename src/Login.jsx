import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los usuarios guardados en el localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario con las credenciales ingresadas
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      alert('Login exitoso');

      // Guardar el usuario actual en localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));

      // Redirigir a la página de propiedades
      navigate('/properties');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Ingrese su email"
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Ingrese su contraseña"
        />
        <button type="submit">Login</button>

        {/* Enlace para redirigir a la página de registro */}
        <p className="no-account-text">
          ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
