// FeaturedAds.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const FeaturedAds = () => {
  // Array of featured ads with titles and descriptions
  const featuredAds = [
    {
      title: '4-plets Kittens for sale',
      description: 'Adopt these adorable 4-plets kittens. They are looking for a loving home.',
      imageUrl: 'https://placekitten.com/300/200',
    },
    {
      title: 'Homeless kitten for donation',
      description: 'Help this homeless kitten find a warm and caring home. Your donation can make a difference.',
      imageUrl: 'https://placekitten.com/300/201',
    },
    {
      title: 'Puffy kittens for sale',
      description: 'These puffy kittens are available for sale. Bring home a bundle of joy!',
      imageUrl: 'https://placekitten.com/300/202',
    },
    {
      title: 'Cozy kitten for sale',
      description: 'Adopt this cozy kitten. Its ready to bring warmth and happiness to your home. This is a long description that will be truncated.',
      imageUrl: 'https://placekitten.com/300/203',
    },
  ];

  return (
    <section className="my-4">
      <Container>
        <h2 className="mb-4">Featured Ads</h2>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
          {featuredAds.map((ad, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={ad.imageUrl} alt={`Featured Ad ${index + 1}`} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{ad.title}</Card.Title>
                  <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', flex: 1 }}>{ad.description}</Card.Text>
                  <Button variant="primary" className="mt-auto">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedAds;
