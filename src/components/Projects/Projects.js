import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import paint from "../../Assets/Projects/paint.png";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import typing from "../../Assets/Projects/typing.png";
import weather from "../../Assets/Projects/weather.png";

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
              imgPath={paint}
              isBlog={false}
              title="Paint.io"
              description="building a simple paint application that lets you draw just like in MS-Paint. Through this article, we will learn how to implement and work with canvas in React.js. Our app contains two sections, one for drawing and the other is a menu where the user can customize the brush color, width, and opacity."
              ghLink="https://github.com/crispyvicky/paint-app.git"
              demoLink="https://paint-app-sigma.vercel.app/"
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Typing Speed Test"
              description="A typing speed test application built with React.js that allows users to test their typing speed and accuracy. The app provides a random text for users to type, measures the time taken, and calculates the typing speed in words per minute (WPM) along with accuracy percentage."
              ghLink="https://github.com/crispyvicky/speedtyping"
              demoLink="https://speedtyping.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="weather-app"
              description="A weather application built with React.js that provides real-time weather information for any location. The app fetches data from a weather API and displays current weather conditions, temperature, humidity, wind speed, and a 5-day forecast."
              ghLink="https://github.com/crispyvicky/weather"
              demoLink="https://github.com/crispyvicky/weather"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
