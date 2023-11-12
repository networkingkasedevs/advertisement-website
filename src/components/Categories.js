// Categories.js

import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Categories.css'; // Import the CSS file for styling

const Categories = () => {
  // Array of categories with names and descriptions
  const categories = [
    {
      name: 'House Helps',
      color: '#3498db', // Blue color
    },
    {
      name: 'Home Tutor',
      color: '#e74c3c', // Red color
    },
    {
      name: 'Day Care',
      color: '#5f9ea0', // Cadet Blue color
    },
    {
      name: 'Kids Game',
      color: '#9400d3', // Violet color
    },
    {
      name: 'Tournaments',
      color: '#2ecc71', // Green color
    },
  ];

  return (
    <section className="my-4">
      <Container>
        <h2 className="mb-4">Categories</h2>
        <Carousel>
          {categories.map((category, index) => (
            <Carousel.Item key={index}>
              <Card className="category-card" style={{ backgroundColor: category.color }}>
                <Card.Body className="text-center">
                  <Card.Title style={{ color: '#fff' }}>{category.name}</Card.Title>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Categories;
