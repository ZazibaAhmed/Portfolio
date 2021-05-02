import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" className="sticky-top">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end stroke">
            <Nav.Item>
              <Nav.Link href="/home">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/home">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                to="skills"
                smooth={true}
                duration={2000}
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                to="projects"
                smooth={true}
                duration={2000}
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </>
  );
};

export default NavBar;
