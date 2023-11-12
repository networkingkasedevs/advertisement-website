// Header.js

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';  // Import NavDropdown
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#0494b4',
  };

  const logoStyle = {
    borderRadius: '8px',
    borderLeft: '2px solid white',
    borderTop: '2px solid white',
  };

  const titleStyle = {
    fontFamily: 'Baloo, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    borderRadius: '8px',
    borderBottom: '2px solid white',
    paddingRight: '10px',
  };

  const categories = [  // Sample categories
    'House Helps',
    'Home Tutor',
    'Day Care',
    'Kids Game',
    'Tournaments',
  ];

  return (
    <Navbar style={headerStyle} variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="Your Logo"
            height="30"
            style={logoStyle}
            className="d-inline-block align-center"
          />
          <span style={titleStyle} className="ms-2">ADVERTISE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={
              <span>
                <FontAwesomeIcon icon={faList} className="me-2" />
                Categories
              </span>
            } id="basic-nav-dropdown">
              {categories.map((category, index) => (
                <NavDropdown.Item key={index} href={`#${category}`}>
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="#featured">
              <FontAwesomeIcon icon={faHome} /> Featured Ads
            </Nav.Link>
            <Nav.Link href="#latest">
              <FontAwesomeIcon icon={faClock} /> Latest Ads
            </Nav.Link>
            <Nav.Link href="#account">
              <FontAwesomeIcon icon={faUser} /> Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
