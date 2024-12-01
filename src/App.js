import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Login';
import PropertyList from './components/Property/PropertyList';
import PropertyDetail from './components/Property/PropertyDetails';  // Asegúrate de importar el componente de detalles
import UserForm from './components/User/UserForm';


function App() {
  return (
    <Router>
      <Navbar />  {/* La barra de navegación se renderizará en todas las páginas excepto el login */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetail />} /> {/* Ruta para los detalles de la propiedad */}
        <Route path="/userform" element={<UserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
