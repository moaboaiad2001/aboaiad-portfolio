import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mosRetroShirts from "../../Assets/Projects/mosRetroShirts.png";
import stockMarketApp from "../../Assets/Projects/stockMarketApp.png";
import myPortfolio from "../../Assets/Projects/myPortfolio.png";


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
          <Col md={4} className="project-card portfolio-project">
            <ProjectCard
              imgPath={myPortfolio}
              isBlog={false}
              title="This Portfolio!"
              description="This portfolio is a fully responsive, single-page application built using React for dynamic rendering and state management. JavaScript powers its interactivity, while HTML provides the structure and CSS ensures a polished, modern aesthetic. The project incorporates React Router for seamless navigation and custom components designed for modularity and reusability. CSS Flexbox and Grid are utilized for a responsive layout, and media queries ensure an optimized experience across devices. The project is hosted online, emphasizing deployment best practices and showcasing my ability to deliver production-ready code."
            />
          </Col>

          <Col md={4} className="project-card stock-market-app">
            <ProjectCard
              imgPath={stockMarketApp}
              isBlog={false}
              title="Stock Market App (In-progress)"
              description="A stock market application that uses REST API's for stock market data and provides an easy to use interface. This app uses SWIFT to create the UI design and frontend, while using Python and Firebase for the backend. My partner and I created this project intended to provide a viable stock trading option in Egypt. This project provides both dark and light mode, real-time stock prices and graphs, and soon to be added ability to purchase and invest in stocks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mosRetroShirts}
              isBlog={false}
              title="Mo's Retro Shirts"
              description="This project is a basic Amazon-style online store showcasing retro football shirts. Built using JavaScript, HTML, and CSS, it features a clean, static design with basic interactivity. Users can browse a selection of shirts, view details, and simulate a simple shopping experience. As my first coding project, it demonstrates foundational programming concepts, such as DOM manipulation, event handling, and responsive styling. This project marks the beginning of my journey into web development."            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
