import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar({ setPage, page, isLoggedIn }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="#" >QVS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {(page === "login" ||
              page === "register" ||
              page === "about" ||
              page === "policy"
            ) &&
              (
                <>
                  <Nav.Link onClick={() => setPage('about')}>About</Nav.Link>
                  <Nav.Link onClick={() => setPage('policy')}>Policy</Nav.Link>
                </>
              )
            }
            {
              page === "about" &&
              (
                <>
                  <Nav.Link onClick={() => setPage('login')}>Login</Nav.Link>
                  (<Nav.Link onClick={() => setPage('register')}>Register</Nav.Link>)
                </>
              )
            }
            {
              page === "policy" &&
              (
                <>
                  <Nav.Link onClick={() => setPage('login')}>Login</Nav.Link>
                  (<Nav.Link onClick={() => setPage('register')}>Register</Nav.Link>)
                </>
              )
            }
            {
              page === "register" &&
              (<Nav.Link onClick={() => setPage('login')}>Login</Nav.Link>)
            }
            {
              page === "login" &&
              (<Nav.Link onClick={() => setPage('register')}>Register</Nav.Link>)
            }
            {
              isLoggedIn && page === "home" &&
              (
                <>
                  <button className="btn btn-danger w-100 mt"
                    style={{ padding: '2px' }}
                    onClick={() => {
                      localStorage.removeItem("userId");
                      isLoggedIn = false;
                      setPage('login');
                    }}
                  >Logout</button>
                </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
