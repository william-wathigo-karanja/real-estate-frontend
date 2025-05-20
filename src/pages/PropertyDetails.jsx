import React from 'react';
import { useParams, Link } from 'react-router-dom';

const properties = [
  {
    id: 1,
    title: 'Modern Apartment in Nairobi',
    price: 'KSh 8,000,000',
    image: 'https://picsum.photos/600/350?random=1',
    description: '2-bedroom apartment with a great city view.',
    details:
      'Located in the heart of Nairobi, this apartment has 2 spacious bedrooms, 2 bathrooms, and a large balcony with skyline views.',
  },
  {
    id: 2,
    title: 'Cozy Bungalow in Mombasa',
    price: 'KSh 5,500,000',
    image: 'https://picsum.photos/600/350?random=2',
    description: '3-bedroom bungalow near the beach.',
    details:
      'A cozy home just 5 minutes from the beach with a large garden and newly renovated kitchen.',
  },
  {
    id: 3,
    title: 'Luxury Villa in Karen',
    price: 'KSh 18,000,000',
    image: 'https://picsum.photos/600/350?random=3',
    description: '5-bedroom villa with a pool and garden.',
    details:
      'Spacious villa with 5 en-suite bedrooms, private swimming pool, and manicured lawns in a gated community.',
  },
];

function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="container my-4">
        <h2 className="animated-heading">Property not found</h2>
        <Link to="/listings" className="btn btn-secondary mt-3">
          Back to Listings
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="animated-heading">{property.title}</h2>
      <img
        src={property.image}
        className="img-fluid mb-4"
        alt={property.title}
      />
      <h4 className="text-success">{property.price}</h4>
      <p>{property.description}</p>
      <p>{property.details}</p>
      <Link to="/listings" className="btn btn-outline-primary mt-3">
        ← Back to Listings
      </Link>
    </div>
  );
}

export default PropertyDetails;
