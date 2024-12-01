import React, { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm({ onSubmit, appointment }) {
  const [formData, setFormData] = useState(
    appointment || { propertyId: '', date: '', description: '' }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Appointment Form</h2>
      <label>Property ID:</label>
      <input type="text" name="propertyId" value={formData.propertyId} onChange={handleChange} required />

      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />

      <label>Description:</label>
      <textarea name="description" value={formData.description} onChange={handleChange}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AppointmentForm;
