// import "../style/Navbar.css";
import Logo from "../img/logo.png";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="secondary" light>
        <NavbarBrand href="/" className="me-auto">
          <img
            alt="logo"
            src={Logo}
            style={{
              height: "50px",
              width: "100%",
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
