import React from "react";
import Container from "react-bootstrap/Container";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logoSvg } from "assets/images/svgImage";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Navbar expand="xl" variant="light">
        <Container className="header__top">
          <Navbar.Brand>{logoSvg}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-lg-center ">
              <Nav.Link href="#">Fiverr Business</Nav.Link>
              <Nav.Link href="#">Explore</Nav.Link>
              <Nav.Link href="#">Become a Seller</Nav.Link>
              <NavDropdown
                title=<span className="userLogin">
                  <UserOutlined className="mr-1" />
                  Hi! Admin
                  <DownOutlined className="ml-2 font" />
                </span>
                id="dropdown-account"
              >
                <NavLink to="/admin/adduser">
                  <NavDropdown.Item className=""> Admin</NavDropdown.Item>
                </NavLink>

                <NavLink to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavLink>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
