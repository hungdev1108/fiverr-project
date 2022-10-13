import { logoSvg } from "assets/images/svgImage";
import { Fragment, useState } from "react";
import { Button, Form, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import "./Header.scss";
import JobTypeMenu from "./JobTypeMenu/JobTypeMenu";
import _ from "lodash";
import { ConfirmSignOut } from "components/Notifications/Notifications";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

function Header(props) {
  const history = useHistory();
  const [valueSearch, setValueSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valueSearch !== "") history.push(`/listJob/?valueSearch=${valueSearch}`);
    setValueSearch("");
  };

  const { userSignin } = useSelector((state) => state.UserManagerReducer);
  //   console.log({ userSignin });

  const checkSignIn = () => {
    if (_.isEmpty(userSignin)) {
      return (
        <Fragment>
          <Nav.Link href="/signin">Sign in</Nav.Link>
          <Nav.Link href="/signup">
            <button className="btnJoin">Join</button>
          </Nav.Link>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <NavDropdown
          style={{ zIndex: "99999" }}
          title=<span className="userLogin">
            <UserOutlined className="mr-1" />
            Hi! {userSignin.user?.name}
            <DownOutlined className="ml-2 font" />
          </span>
          id="dropdown-account"
        >
          <NavDropdown.Item
            className="text-secondary"
            onClick={() => {
              history.push(`/admin`);
            }}
          >
            Admin
          </NavDropdown.Item>

          <NavDropdown.Item
            className="text-secondary"
            onClick={() => {
              history.push(`/profile`);
            }}
          >
            Profile
          </NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item
            className="text-secondary"
            onClick={() => {
              ConfirmSignOut(history);
            }}
          >
            <div className="d-flex align-items-center">
              <div className="mr-2">Logout</div>
              <div className="">
                <i className="fas fa-sign-out-alt"></i>
              </div>
            </div>
          </NavDropdown.Item>
        </NavDropdown>
      </Fragment>
    );
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
              <Fragment>{checkSignIn()}</Fragment>
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
