import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/Frame7.png"
import Profile from "../assets/profile.png"
import Logout from "../assets/sign-out.png"
const AppNavbar = () => {
  return (
    <Navbar bg="light" variant="dark" expand="lg">
    {/* Logo on the left */}
    <Navbar.Brand href="#home">
      <img src={Logo} alt="Logo" height="30" style={{ width: '137.95px', height: '35.27px', marginLeft: '10px' }} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto d-flex align-items-center">
        <img src={Profile} alt="Profile" height="30" style={{ borderRadius: '50%', marginRight: '10px',marginLeft:"900px" }} />
        <Nav.Link href="#logout">
          <img src={Logout} alt="Logout" height="30" style={{ borderRadius: '50%' }} />
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
};

export default AppNavbar;
