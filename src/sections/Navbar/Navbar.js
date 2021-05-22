import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Navbar expand="md">
        <Navbar.Brand>
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="20" fill="#ccf" />
          </svg>
          <span className="myName">Zaziba Ahmed</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end stroke">
          <Nav className="justify-content-end stroke">
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
