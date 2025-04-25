import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiKotlin, SiR, SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <>
      <h2 className="tech-title">Languages & Skills</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython /> {/* Python */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql /> {/* SQL */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiR /> {/* R */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiKotlin /> {/* Kotlin */}
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus /> {/* C++ */}
        </Col>
        
      </Row>
    </>
  );
}

export default Techstack;
