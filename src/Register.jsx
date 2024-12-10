import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer'); // Valor predeterminado es 'buyer'
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si el usuario ya está registrado en el localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Comprobar si ya existe un usuario con el mismo correo electrónico
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      alert('Este correo ya está registrado');
    } else {
      // Si el usuario no existe, agregarlo al localStorage
      const newUser = { name, email, password, role };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registro exitoso');
      navigate('/properties'); // Redirige a la página de propiedades después de registrar
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}>
        <h2>Registro</h2>

        {/* Campo para ingresar el nombre */}
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Ingrese su nombre"
        />

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

        <label>Seleccione su rol:</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="buyer">Comprador</option>
          <option value="seller">Vendedor</option>
          <option value="agent">Agente Inmobiliario</option>
        </select>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
