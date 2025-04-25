import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiMicrosoftoffice, SiTableau, SiPowerbi, SiAndroidstudio, SiGithub } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice /> {/* Excel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau /> {/* Tableau */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /> {/* Power BI */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio /> {/* Android Studio */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
    </Row>
  );
}

export default Toolstack;
