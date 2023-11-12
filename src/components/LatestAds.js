import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const LatestAds = () => {
  // Sample data for latest ads with cover images
  const latestAds = [
    {
      title: 'House Help Cleaning',
      description: 'Find reliable house help for your cleaning needs.',
      imageUrl: `${process.env.PUBLIC_URL}/images/house-help-cleaning.png`,
    },
    {
      title: 'School Sports Coach Needed',
      description: 'Looking for a skilled sports coach for your school? Find one here.',
      imageUrl: `${process.env.PUBLIC_URL}/images/school-sports-coach.png`,
    },
    {
      title: 'Car Hire and Car Rental',
      description: 'Explore affordable car hire and rental services for your transportation needs.',
      imageUrl: `${process.env.PUBLIC_URL}/images/car-hire-rental.png`,
    },
    {
      title: 'Event Happening',
      description: "Don't miss out on the upcoming exciting event in your area.",
      imageUrl: `${process.env.PUBLIC_URL}/images/event-happening.png`,
    },
  ];

  return (
    <section className="mt-4">
      <Container>
        <h2>Latest Ads</h2>
        <Row xs={1} md={2} lg={3} xl={3} className="g-4">
          {latestAds.map((ad, index) => (
            <Col key={index} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={ad.imageUrl} alt={ad.title} className="flex-grow-1" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{ad.title}</Card.Title>
                  <Card.Text>{ad.description}</Card.Text>
                  <div className="mt-auto">
                    <a href="#details" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestAds;
