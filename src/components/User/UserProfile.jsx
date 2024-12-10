import React, { useState, useEffect } from 'react';
import './Profile.css';

function UserProfile() {
  const [user, setUser] = useState(null);
  const [editableUser, setEditableUser] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
      setUser(currentUser);
      setEditableUser(currentUser);
    } else {

      console.log('Usuario no encontrado');
    }
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };


  const handleSave = () => {
    localStorage.setItem('currentUser', JSON.stringify(editableUser));
    setUser(editableUser);
    setIsEditing(false);
    alert('Perfil actualizado con éxito!');
  };

  if (!user) {
    return (
      <div>
        <p>No se ha encontrado tu perfil. Por favor, inicia sesión.</p>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <h2>Mi Perfil</h2>
      <div>
        <label><strong>Nombre:</strong></label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editableUser.name || ''}
            onChange={handleChange}
            style={{ padding: '8px', margin: '5px 0', width: '100%' }}
          />
        ) : (
          <p>{user.name || 'No especificado'}</p>
        )}
      </div>

      <div>
        <label><strong>Email:</strong></label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editableUser.email || ''}
            onChange={handleChange}
            style={{ padding: '8px', margin: '5px 0', width: '100%' }}
          />
        ) : (
          <p>{user.email}</p>
        )}
      </div>

      <div>
        <label><strong>Rol:</strong></label>
        {isEditing ? (
          <input
            type="text"
            name="role"
            value={editableUser.role || ''}
            onChange={handleChange}
            style={{ padding: '8px', margin: '5px 0', width: '100%' }}
          />
        ) : (
          <p>{user.role}</p>
        )}
      </div>


      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          style={{
            padding: '8px 15px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          🖉 Editar
        </button>
      )}


      {isEditing && (
        <button
          onClick={handleSave}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            marginTop: '10px',
            cursor: 'pointer'
          }}
        >
          Guardar Cambios
        </button>
      )}
    </div>
  );
}

export default UserProfile;

