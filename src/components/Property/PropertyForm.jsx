import React, { useState, useEffect } from 'react';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/properties')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading properties...</p>;
  }

  return (
    <div className="property-list">
      {properties.length > 0 ? (
        properties.map((property) => (
          <div className="property-item" key={property.id}>
            <h3>{property.address}</h3>
            <p>Price: ${property.price}</p>
            <p>Size: {property.size} sqft</p>
          </div>
        ))
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
}

export default PropertyList;
