import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavMenu() {
  return (
    <div className="NavMenu">
          <Navbar style={{backgroundColor: '#0055a5'}} variant="dark">
            <Navbar.Brand href="#home">England</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Milking</Nav.Link>
            </Nav>
          
          </Navbar>
    </div>
  );
 }

export default NavMenu;