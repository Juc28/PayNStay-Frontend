import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Asegúrate de importar el archivo CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Marina.08@gmail.com' && password === 'password123') {
      alert('Login exitoso');
      navigate('/properties'); // Redirige a PropertyList
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
          placeholder="Enter your email"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
