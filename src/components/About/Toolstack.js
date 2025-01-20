import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVite,
  SiVercel,
  SiCanva,
  

  
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />  
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiVite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva /> 
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
