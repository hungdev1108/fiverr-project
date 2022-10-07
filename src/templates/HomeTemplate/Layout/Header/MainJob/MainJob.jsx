import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./MainJob.scss";

function MainJob() {
  return (
    <section className="main__job" id="mainJob">
      <Container className="main__job--container">
        <Row className="main__job--content px-2 py-2">
          <Col>
            <a href="#">Graphics & Design</a>
          </Col>
          <Col>
            <a href="#">Digital Marketing</a>
          </Col>
          <Col>
            <a href="#">Writing & Translation</a>
          </Col>
          <Col>
            <a href="#">Video & Animation</a>
          </Col>
          <Col>
            <a href="#">Music & Audio</a>
          </Col>
          <Col>
            <a href="#">Programming & Tech</a>
          </Col>
          <Col>
            <a href="#">Data</a>
          </Col>
          <Col>
            <a href="#">Business</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainJob;
