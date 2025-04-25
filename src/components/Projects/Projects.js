import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import bankmanagement from "../../Assets/Projects/bank management.jpg";
import sqlproject from "../../Assets/Projects/sqlproject.png";  // Correct image path
import socialMediaUsage from "../../Assets/Projects/Social MediaUsage Dashboard.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqlproject}  // Updated image path
              isBlog={false}
              title="Whole-Sale-Revenue-Analysis"
              description="WholesaleRevenue table with sample data and performs revenue analysis from June to August 2024. It examines trends by month, warehouse, and product line, and highlights the top 5 highest-earning product lines."
              ghLink="https://github.com/Nihith2/Wholesale-Revenue-Analysis-using-SQL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialMediaUsage}
              isBlog={false}
              title="Social-Media-Dashboard"
              description="Designed detailed and interactive Tableau dashboards to analyze social media usage on Instagram, Facebook, and WhatsApp, concentrating on user engagement and platform performance. Utilized Tableau Prep for precise data cleaning and thorough trend analysis, generating actionable insights."
              ghLink="https://github.com/Nihith2/Social-Media-Usage-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankmanagement}
              isBlog={false}
              title="Bank-Manage-System"
              description="A bank management system is a comprehensive software application designed to manage and streamline various banking operations. It encompasses functionalities such as account management, transaction processing, customer management, loan processing, and reporting."
              ghLink="https://github.com/Nihith2/Bank-Management-System"
            />
          </Col>
          {/* Other projects remain unchanged */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
