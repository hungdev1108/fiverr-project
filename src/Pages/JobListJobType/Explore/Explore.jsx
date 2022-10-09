import React from "react";
import { Container } from "react-bootstrap";
import "./Explore.scss";

export default function Explore(props) {
  return (
    <div className="Explore">
      <Container>
        <h2 className="title">Explore {props.title}</h2>
        <div className="bucket-wrapper">
            
        </div>
      </Container>
    </div>
  );
}
