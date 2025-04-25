import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright text-center">
          <h3>© {year} Ballani Nihith. All rights reserved.</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
