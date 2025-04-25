import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ballani Nihith</span> from <span className="purple">Hyderabad, India.</span>
            <br />
            I am currently in my final year of B.Tech in Computer Science at Lovely Professional University, and I'm passionate about Data Science and Android development.
            <br />
            
            <br />
            Apart from coding, here are a few things I enjoy doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
