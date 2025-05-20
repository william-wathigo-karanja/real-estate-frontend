import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Nairobi',
    price: 'KSh 8,000,000',
    image: 'https://picsum.photos/400/250?random=1',
    description: '2-bedroom apartment with a great city view.',
  },
  {
    id: 2,
    title: 'Cozy Bungalow in Mombasa',
    price: 'KSh 5,500,000',
    image: 'https://picsum.photos/400/250?random=2',
    description: '3-bedroom bungalow near the beach.',
  },
  {
    id: 3,
    title: 'Luxury Villa in Karen',
    price: 'KSh 18,000,000',
    image: 'https://picsum.photos/400/250?random=3',
    description: '5-bedroom villa with a pool and garden.',
  },
];

function Listings() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center animated-heading">Property Listings</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by location or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={property.id}
            >
              <Link
                to={`/property/${property.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm hover-shadow">
                  <img
                    src={property.image}
                    className="card-img-top img-fluid"
                    alt={property.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <h6 className="text-success">{property.price}</h6>
                    <p className="card-text">{property.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center">No properties match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Listings;
