import React from 'react';
import { Link } from 'react-router-dom';

const featuredProperties = [
  {
    id: 1,
    title: 'Modern Apartment in Nairobi',
    price: 'KSh 8,000,000',
    image: 'https://picsum.photos/400/250?random=11',
  },
  {
    id: 2,
    title: 'Cozy Bungalow in Mombasa',
    price: 'KSh 5,500,000',
    image: 'https://picsum.photos/400/250?random=12',
  },
  {
    id: 3,
    title: 'Luxury Villa in Karen',
    price: 'KSh 18,000,000',
    image: 'https://picsum.photos/400/250?random=13',
  },
];

function Home() {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <section className="text-center p-5 bg-light rounded shadow-sm mb-5 fade-in-up">
        <h1 className="animated-heading mb-3">Find Your Dream Home</h1>
        <p className="lead mb-4">
          Explore the best real estate listings in Kenya. Whether you want to buy, rent or sell, we have you covered.
        </p>
        <Link to="/listings" className="btn btn-primary btn-lg hover-scale">
          Browse Listings
        </Link>
      </section>

      {/* Featured Properties */}
      <section className="mb-5">
        <h2 className="animated-heading mb-4 text-center fade-in-up delay-1">Featured Properties</h2>
        <div className="row">
          {featuredProperties.map((property, index) => (
            <div
              className="col-12 col-md-4 mb-4 fade-in-up"
              style={{ animationDelay: `${index * 0.2 + 1.2}s` }}
              key={property.id}
            >
              <Link to={`/property/${property.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm hover-shadow hover-scale">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="text-success fw-semibold">{property.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-5 fade-in-up delay-2">
        <h2 className="animated-heading mb-4 text-center">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-speedometer2 display-4 text-primary mb-3"></i>
            <h5>Fast & Easy</h5>
            <p>Quickly find the perfect property with our easy-to-use platform.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
            <h5>Trusted Listings</h5>
            <p>All properties are verified to ensure quality and legitimacy.</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-people display-4 text-primary mb-3"></i>
            <h5>Expert Support</h5>
            <p>Our team is here to help you every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-in-up delay-3">
        <h2 className="animated-heading mb-4 text-center">What Our Clients Say</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="testimonial p-4 rounded shadow-sm bg-white hover-shadow hover-scale">
              <p className="fst-italic">“This website made buying my first home so simple. The process was smooth, and I found exactly what I wanted!”</p>
              <footer className="blockquote-footer text-end">Jane Mwangi</footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
