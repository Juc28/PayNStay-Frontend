import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onSubmit, user }) {
  const [formData, setFormData] = useState(user || { name: '', email: '', password: '', role: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <label>Role:</label>
      <select name="role" value={formData.role} onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
