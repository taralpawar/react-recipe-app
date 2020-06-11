import React from "react";
import {
  Button,
  Form,
  FormControl,
  Navbar,
  Container,
  InputGroup,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" text="light">
      <Navbar.Brand href="#home">Cook It</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
