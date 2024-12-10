import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';

function UserProfile() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleProfileUpdate = (updatedUser) => {
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
    alert('Perfil actualizado exitosamente');
  };

  if (!user) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h2>Mi Perfil</h2>
      <UserForm user={user} onSubmit={handleProfileUpdate} />
    </div>
  );
}

export default UserProfile;
