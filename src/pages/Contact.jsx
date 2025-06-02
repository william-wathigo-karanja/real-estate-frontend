import React from 'react';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-4">
        We’d love to hear from you. Fill out the form below and we’ll respond shortly.
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="fullName" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea className="form-control" id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {/* Footer added here */}
      <Footer />
    </div>
  );
}

export default Contact;
