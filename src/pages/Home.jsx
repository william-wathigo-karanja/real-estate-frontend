import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Added for navigation
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <div className="hero-content">
            <h1>Find Your Dream Home in Kenya</h1>
            <p>Browse top listings across Nairobi, Mombasa, Kisumu, and beyond.</p>
            <div className="hero-buttons">
              <Button className="primary-btn">Get Started</Button>
              <Link to="/about">
                <Button className="secondary-btn">Learn More</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Why Choose Estate Finder</h2>
          <Row className="text-center">
            <Col md={4}>
              <i className="bi bi-house-door-fill mb-2"></i>
              <h5>Verified Listings</h5>
              <p>Only trustworthy properties from vetted agents and owners.</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-map-fill mb-2"></i>
              <h5>Nationwide Coverage</h5>
              <p>From Nairobi to Mombasa, find homes in every major town.</p>
            </Col>
            <Col md={4}>
              <i className="bi bi-people-fill mb-2"></i>
              <h5>Expert Support</h5>
              <p>Our team is here to guide you at every step of the journey.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Jane W."
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="fst-italic">"Estate Finder helped me find my dream home effortlessly!"</p>
                <strong>Jane W.</strong>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="David K."
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="fst-italic">"A fantastic platform with lots of great listings."</p>
                <strong>David K.</strong>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt="Susan M."
                  className="rounded-circle mb-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <p className="fst-italic">"Customer service was amazing and super helpful."</p>
                <strong>Susan M.</strong>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer-section bg-dark text-white py-4 mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5>Estate Finder</h5>
              <p>Your trusted property partner across Kenya.</p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white">Home</a></li>
                <li><a href="/listings" className="text-white">Listings</a></li>
                <li><a href="/contact" className="text-white">Contact</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contact Us</h5>
              <p>Email: support@estatefinder.co.ke</p>
              <p>Phone: +254 712 345 678</p>
              <p>Location: Nairobi, Kenya</p>
            </Col>
          </Row>
          <hr className="border-light" />
          <p className="text-center mb-0">© {new Date().getFullYear()} Estate Finder. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};

export default Home;
