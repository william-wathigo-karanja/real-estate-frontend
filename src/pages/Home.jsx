import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Explore the best properties across Kenya with Estate Finder.</p>
          <div className="hero-buttons">
            <Link to="/listings" className="btn primary-btn">
              Browse Listings
            </Link>
            <Link to="/contact" className="btn secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Featured Properties</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card property-card">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Property" />
              <div className="card-body">
                <h5 className="card-title">Modern Apartment in Nairobi</h5>
                <p className="card-text text-success">KSh 8,000,000</p>
                <p className="card-text">2-bedroom apartment with a great city view.</p>
                <Link to="/property/1" className="btn btn-outline-primary btn-sm">View Details</Link>
              </div>
            </div>
          </div>
          {/* Add more property cards here if needed */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Estate Finder?</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="bi bi-house-door-fill display-4 text-primary mb-3"></i>
              <h5>Verified Listings</h5>
              <p>All properties are verified and up-to-date.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-people-fill display-4 text-primary mb-3"></i>
              <h5>Trusted Agents</h5>
              <p>Connect with experienced and licensed real estate agents.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-geo-alt-fill display-4 text-primary mb-3"></i>
              <h5>Nationwide Coverage</h5>
              <p>We have listings across all major towns in Kenya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
