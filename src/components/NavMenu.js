import React from 'react';
import FirstContainer from './FirstContainer';
import HomeContainer from './HomeContainer';
import { Link, Route } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function NavMenu() {
  return (
    <div className="NavMenu">
          <Navbar style={{backgroundColor: '#0055a5'}} variant="dark">
            <Navbar.Brand href="#home">England</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashbard</Nav.Link>
              <Nav.Link href="#pricing">Milking</Nav.Link>
            </Nav>
          
          </Navbar>
          <Route
                    path="/dashboard"
                    component={FirstContainer}
                    exact 
                />
          <Route
                    path="/"
                    component={HomeContainer}
                    exact 
                />
    </div>
  );
 }

export default NavMenu;