import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

// Same property data used in Listings.jsx
const propertyData = {
  1: {
    title: 'Modern Family Home',
    price: 'KES 25,000,000',
    description: 'Spacious family house in a quiet estate with a beautiful garden.',
    image: 'https://source.unsplash.com/featured/?modern,home',
    location: 'Nairobi, Kenya',
    bedrooms: 4,
    bathrooms: 3,
    type: 'House',
  },
  2: {
    title: 'Luxury Apartment',
    price: 'KES 15,000,000',
    description: 'Modern apartment in a secure complex, close to amenities.',
    image: 'https://source.unsplash.com/featured/?luxury,apartment',
    location: 'Westlands, Nairobi',
    bedrooms: 3,
    bathrooms: 2,
    type: 'Apartment',
  },
  3: {
    title: 'Beachside Villa',
    price: 'KES 40,000,000',
    description: 'Elegant beachfront villa with panoramic ocean views.',
    image: 'https://source.unsplash.com/featured/?beach,villa',
    location: 'Mombasa, Kenya',
    bedrooms: 5,
    bathrooms: 4,
    type: 'Villa',
  },
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertyData[id];

  if (!property) {
    return <div className="container mt-5">Property not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{property.title}</h2>
      <img
        src={property.image}
        alt={property.title}
        className="img-fluid mb-4 rounded shadow-sm"
        style={{ maxHeight: '450px', objectFit: 'cover', width: '100%' }}
      />
      <h4 className="text-success mb-3">{property.price}</h4>
      <p className="mb-4">{property.description}</p>
      <ul className="list-group mb-5">
        <li className="list-group-item"><strong>Location:</strong> {property.location}</li>
        <li className="list-group-item"><strong>Bedrooms:</strong> {property.bedrooms}</li>
        <li className="list-group-item"><strong>Bathrooms:</strong> {property.bathrooms}</li>
        <li className="list-group-item"><strong>Type:</strong> {property.type}</li>
      </ul>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
