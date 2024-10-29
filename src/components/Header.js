import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todos">Todos</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Completed Todos</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Pending Todos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Archived Todos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* Add your social links */}
            <Nav.Link href="https://github.com/giant-nova" target="_blank">
              <i className="fab fa-github"></i> GitHub
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/kunal7266" target="_blank">
              <i className="fab fa-linkedin"></i> LinkedIn
            </Nav.Link>
            <Nav.Link href="mailto:kunal.datadev.os@gmail.com">
              <i className="fas fa-envelope"></i> Email
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
