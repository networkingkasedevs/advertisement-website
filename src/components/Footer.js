import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h5>Contact Us</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={6} className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-light me-3">
                <FaFacebook size={30} />
              </a>
              <a href="#" className="text-light me-3">
                <FaTwitter size={30} />
              </a>
              <a href="#" className="text-light me-3">
                <FaInstagram size={30} />
              </a>
              <a href="#" className="text-light">
                <FaLinkedin size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2023 Advertisement Website</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
