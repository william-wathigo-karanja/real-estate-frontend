import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Estate Finder</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1582407947304-3bd2a3f80a1e"
              alt="Kenya Real Estate"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h4>Your Trusted Real Estate Partner</h4>
            <p>
              Estate Finder is a modern real estate platform built to connect property seekers with
              verified agents and listings across Kenya. Whether you're buying, renting, or investing,
              we provide a seamless and secure experience.
            </p>
            <ul>
              <li>✔ Verified and up-to-date listings</li>
              <li>✔ Nationwide reach: Nairobi, Mombasa, Kisumu & more</li>
              <li>✔ Expert customer support every step of the way</li>
              <li>✔ Advanced filters and intuitive search</li>
            </ul>
            <Button variant="primary" href="/listings">Browse Listings</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
