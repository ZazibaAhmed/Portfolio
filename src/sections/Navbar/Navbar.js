import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Navbar expand="md">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="justify-content-start">
          <Nav.Item>
            <svg height="50" width="50">
              <circle cx="25" cy="25" r="20" fill="#ccf" />
            </svg>
            Zaziba Ahmed
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end stroke">
            <Nav.Item>
              <Nav.Link href="/home">About</Nav.Link>
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
              <Link
                className="nav-link"
                activeClass="active"
                spy={true}
                to="contact"
                smooth={true}
                duration={2000}
              >
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </div>
  );
};

export default NavBar;
