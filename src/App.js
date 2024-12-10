import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Login';
import Register from './Register';
import PropertyList from './components/Property/PropertyList';
import PropertyDetail from './components/Property/PropertyDetails';
import UserProfile from './components/User/UserProfile';

function AppContent() {
  const location = useLocation();

  return (
    <>

      {location.pathname !== '/register' && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
