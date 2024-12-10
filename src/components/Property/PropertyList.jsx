import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PropertyList.css';
function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    setUserRole(role);
    const mockData = [
      {
        id: 1,
        name: 'Casa en la playa',
        address: 'Calle Mar Azul, 123, Zona Costera, Ciudad Playa',
        price: 1890000000 ,
        size: 250,
        image: '/propiedad1.jpg',
      },
      {
        id: 2,
        name: 'Apartamento en la ciudad',
        address: 'Avenida Central, 88, Piso 10, Edificio Cosmopolitan, Ciudad Capital',
        price: 1155000000,
        size: 90,
        image: '/propiedad2.jpg',
      },
      {
        id: 3,
        name: 'Finca en las montañas',
        address: 'Ruta 25, Km 15, Finca El Descanso, Pueblo Verde',
        price: 2520000000,
        size: 5000,
        image: '/propiedad3.jpg',
      },
      {
        id: 4,
        name: 'Loft en zona artística',
        address: 'Calle del Arte, 14, Piso 2, Edificio Creativo, Ciudad Artística',
        price: 1344000000,
        size: 110,
        image: '/propiedad4.jpg',
       },
       {
        id: 5,
        name: 'Chalet en la montaña',
        address: 'Camino de los Andes, Km 12, Villa Serena, Pueblo Andino',
        price: 2800000000,
        size: 350,
        image: '/propiedad5.jpg',
        },
        {
         id: 6,
         name: 'Vereda El Encanto, Finca La Cascada, Municipio Rural',
         address: '789 Oak St',
         price: 3500000000,
         size: 7000,
         image: '/propiedad6.jpg',
         },
         {
         id: 7,
         name: 'Penthouse en zona exclusiva',
         address: 'Carrera 15, 145, Penthouse 301, Ciudad Dorada',
         price: 4200000000,
         size: 200,
         image: '/propiedad7.jpg',
         },
         {
          id: 8,
          name: 'Casa colonial remodelada',
          address: 'Calle Real, 25, Centro Histórico, Ciudad Patrimonio',
          price: 1950000000,
          size: 280,
          image: '/propiedad8.jpg',
          },
           {
           id: 9,
           name: 'Casa tradicional en pueblo cafetero',
           address: 'Calle de los Cafetales, 18, Pueblo Quindío, Eje Cafetero',
           price: 980000000,
           size: 180,
           image: '/propiedad9.jpg',
           },
          ];
    setProperties(mockData);
  }, []);
 const handleEdit = (propertyId) => {

    window.location.href = `/edit-property/${propertyId}`;
  };

  return (
    <div className="property-list-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar por nombre o dirección" />
      </div>

      <div className="property-list">
        {properties.length > 0 ? (
          properties.map((property) => (
            <div className="property-item" key={property.id}>
              <Link to={`/properties/${property.id}`} style={{ textDecoration: 'none' }}>
                <img src={property.image} alt={`Property at ${property.address}`} className="property-image" />
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p className="property-address">{property.address}</p>
                  <p>Price: ${property.price.toLocaleString()}</p>
                  <p>Size: {property.size} m²</p>
                </div>
              </Link>

              {(userRole === 'seller' || userRole === 'agent') && property.owner === 'seller' && (
                <button onClick={() => handleEdit(property.id)}>Editar propiedad</button>
              )}
            </div>
          ))
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}

export default PropertyList;