// PropertyDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Simulamos la obtención de datos de la propiedad
    const mockData = [
      {
        id: 1,
        name: 'Casa en la playa',
        address: 'Calle Mar Azul, 123, Zona Costera, Ciudad Playa',
        price: 1890000000,
        size: 250,
        description:
          'Hermosa casa con vista al mar, 4 habitaciones, 3 baños, piscina privada y jardín amplio. Ubicada en una zona tranquila cerca de restaurantes y tiendas.',
        image: '/propiedad1.jpg',
      },
      {
        id: 2,
        name: 'Departamento en el centro',
        address: 'Avenida Central, 456, Centro Ciudad',
        price: 1500000000,
        size: 120,
        description:
          'Departamento moderno de 2 habitaciones, 1 baño, cocina equipada y amplio balcón. Ubicado cerca de tiendas y transporte público.',
        image: '/propiedad2.jpg',
      },
      {
          id: 3,
          name: 'Finca en las montañas',
          address: 'Avenida Central, 456, Centro Ciudad',
          price: 1500000000,
          size: 120,
          description:
                'Finca con casa de campo, 3 habitaciones, 2 baños, y un gran terreno ideal para cultivo o actividades agrícolas. Vistas impresionantes y acceso a rutas de senderismo.Propiedad 4: Loft en zona artística',
          image: '/propiedad3.jpg',
      },
      {
          id: 4,
          name: 'Loft en zona artística',
          address: 'Calle del Arte, 14, Piso 2, Edificio Creativo, Ciudad Artística',
          price: 1344000000,
          size: 110,
          description:
                'Finca con casa de campo, 3 habitaciones, 2 baños, y un gran terreno ideal para cultivo o actividades agrícolas. Vistas impresionantes y acceso a rutas de senderismo.Propiedad 4: Loft en zona artística',
          image: '/propiedad4.jpg',
      },
      {
          id: 5,
          name: 'Chalet en la montaña',
          address: 'Camino de los Andes, Km 12, Villa Serena, Pueblo Andino',
          price: 2800000000,
          size: 350,
          description: 'Chalet de lujo con diseño alpino, 5 habitaciones, 4 baños, chimenea y una terraza con vista a los nevados. Ideal para escapadas familiares o turismo ecológico.Propiedad 2: Casa campestre con lago privado',
          image: '/propiedad5.jpg',
       },
       {
           id: 6,
           name: 'Vereda El Encanto, Finca La Cascada, Municipio Rural',
           address: '789 Oak St',
           price: 3500000000,
           size: 7000,
           description:
                'Propiedad única con una casa de 3 habitaciones, 3 baños, y una sala con grandes ventanales. Incluye lago privado, muelle, y jardines diseñados. Perfecta para la desconexión total.',
           image: '/propiedad6.jpg',
        },
        {
            id: 7,
            name: 'Penthouse en zona exclusiva',
            address: 'Carrera 15, 145, Penthouse 301, Ciudad Dorada',
            price: 4200000000,
            size: 200,
            description:
                'Lujoso penthouse con 3 habitaciones, 4 baños, terraza privada con jacuzzi, y cocina integral de diseño moderno. Ubicación privilegiada en el corazón financiero y comercial de la ciudad.',
            image: '/propiedad7.jpg',
         },
         {
             id: 8,
             name: 'Casa colonial remodelada',
             address: 'Calle Real, 25, Centro Histórico, Ciudad Patrimonio',
             price: 1950000000,
             size: 280,
             description:
                   'Hermosa casa colonial con patio interior, 4 habitaciones, 2 baños, y techos altos con vigas de madera. Remodelada con acabados modernos sin perder su esencia histórica. Ideal para proyectos turísticos.',
             image: '/propiedad8.jpg',
         },
         {
             id: 9,
             name: 'Casa tradicional en pueblo cafetero',
             address: 'Calle de los Cafetales, 18, Pueblo Quindío, Eje Cafetero',
             price: 980000000,
             size: 180,
             description:
                 'Casa típica de la región cafetera, con fachadas coloridas, balcón de madera, y patio central con jardines. Cuenta con 3 habitaciones, 2 baños y cocina tradicional. Rodeada de cultivos de café y paisajes montañosos. Ideal para turismo rural o descanso.',
             image: '/propiedad9.jpg',
          },

    ];

    const selectedProperty = mockData.find((property) => property.id === parseInt(id));
    setProperty(selectedProperty);
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }


  return (
    <div className="property-detail" style={{ padding: '20px' }}>
      <img
        src={property.image}
        alt={property.name}
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
          border: '4px solid #f0f0f0',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          marginBottom: '20px',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
      />
      <div
        className="property-info"
        style={{ padding: '20px', maxWidth: '900px', margin: '20px auto' }}
      >
        <h2 style={{ fontSize: '28px' }}>{property.name}</h2>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Dirección:</strong> {property.address}
        </p>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Precio:</strong> ${property.price.toLocaleString()}
        </p>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Tamaño:</strong> {property.size} m²
        </p>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Descripción:</strong> {property.description}
        </p>
      </div>
    </div>
  );
}

export default PropertyDetail;
