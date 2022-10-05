import React from "react";
import Container from "react-bootstrap/Container";
import "./Header.scss";

function Header() {
  return (
    <Container id="header">
      <header className="header__top">
        <div className="header__top--logo">fiverr</div>
      </header>
    </Container>
  );
}

export default Header;
