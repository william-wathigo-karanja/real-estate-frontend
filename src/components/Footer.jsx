import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {new Date().getFullYear()} Estate Finder | Your trusted Kenyan real estate partner.
        </p>
        <p className="mb-1">
          📍 Nairobi, Kenya | ☎️ +254 712 345 678 | ✉️ info@estatefinder.co.ke
        </p>
        <div>
          <Link to="/" className="text-white me-3">Home</Link>
          <Link to="/listings" className="text-white me-3">Listings</Link>
          <Link to="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
