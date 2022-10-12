import { logoSvg } from "assets/images/svgImage";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useHistory } from "react-router-dom";
import "./Header.scss";
import JobTypeMenu from "./JobTypeMenu/JobTypeMenu";

function Header(props) {
  const history = useHistory();
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueSearch !== "") history.push(`/listJob/?valueSearch=${valueSearch}`);
    setValueSearch("");
  };

  return (
    <header id="header">
      <Navbar expand="xl" variant="light">
        <Container className="header__top">
          <Navbar.Brand className="header__top--logo">
            <Nav.Link href="/">{logoSvg}</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="showNav" id="basic-navbar-nav">
            <Form onSubmit={handleSubmit} className="d-flex search">
              <Form.Control
                type="search"
                placeholder="What service are you looking today?"
                className="inputSearch me-2"
                aria-label="Search"
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
              <Button type="submit" className="btnSearch">
                <i className="fas fa-search"></i>
              </Button>
            </Form>
            <Nav className="ml-auto align-items-lg-center navCustom">
              <Nav.Link href="#">Fiverr Business</Nav.Link>
              <Nav.Link href="#">Explore</Nav.Link>
              <Nav.Link href="#">English</Nav.Link>
              <Nav.Link href="#">Become a Seller</Nav.Link>
              <Nav.Link href="/signin">Sign in</Nav.Link>
              <Nav.Link href="/signup">
                <button className="btnJoin">Join</button>
              </Nav.Link>
              {/* <NavDropdown
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
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <JobTypeMenu />
      </div>
    </header>
  );
}

export default Header;
