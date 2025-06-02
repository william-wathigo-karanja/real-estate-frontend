import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const properties = {
  1: {
    title: 'Modern Family Home',
    price: 'KES 25,000,000',
    description: 'Spacious 4-bedroom home in a secure estate in Nairobi.',
    image: 'https://images.unsplash.com/photo-1600585154356-596af9009e81?auto=format&fit=crop&w=800&q=80',
  },
  2: {
    title: 'Luxury Apartment',
    price: 'KES 15,000,000',
    description: 'Stylish 3-bedroom apartment in Westlands with city views.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
  },
  3: {
    title: 'Beachside Villa',
    price: 'KES 40,000,000',
    description: 'Private beachfront villa with 5 bedrooms and a pool.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  4: {
    title: 'Townhouse in Kisumu',
    price: 'KES 18,000,000',
    description: 'Elegant 3-bedroom townhouse near Lake Victoria.',
    image: 'https://images.unsplash.com/photo-1560185127-6a8c6c21c8a3?auto=format&fit=crop&w=800&q=80',
  },
  5: {
    title: 'Affordable Studio',
    price: 'KES 6,500,000',
    description: 'Compact and cozy studio apartment ideal for singles.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba934822a?auto=format&fit=crop&w=800&q=80',
  },
  6: {
    title: 'Suburban Bungalow',
    price: 'KES 13,000,000',
    description: 'Charming 3-bedroom bungalow in a quiet Thika suburb.',
    image: 'https://images.unsplash.com/photo-1600585154601-1b4ed3c0dbd4?auto=format&fit=crop&w=800&q=80',
  },
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties[id];

  if (!property) {
    return <div className="container mt-5">Property not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{property.title}</h2>
      <img src={property.image} alt={property.title} className="img-fluid mb-3" />
      <h4 className="text-success">{property.price}</h4>
      <p>{property.description}</p>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
