import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar({ setPage }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#" onClick={() => setPage('login')}>QualVerify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setPage('about')}>About</Nav.Link>
            <Nav.Link onClick={() => setPage('policy')}>Policy</Nav.Link>
            <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setPage('login')}>Login</Nav.Link>
            <Nav.Link onClick={() => setPage('register')}>Register</Nav.Link>
            <button className="btn btn-danger w-100 mt" style={{padding:'2px'}} onClick={() => setPage('login')}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
