import React, { Component } from 'react';
// import { Route, RouteHandler, Link } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Header, Toggle, Brand, Collapse, Nav, NavItem } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar fixedTop>
            <Navbar.Header pullLeft>
                <Navbar.Brand>
                    <Link to="/">Chime</Link>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav>
                    <Navbar.Brand>
                        <Link to="/License">License</Link>
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <Navbar.Brand>
                        <Link to="/Login">{this.props.isLoggedIn ? 'Logout' : 'Login'}</Link>
                    </Navbar.Brand>
                </Nav>
                <Nav pullRight>
                    <Navbar.Brand>
                        <Link to="/Signup">{this.props.isLoggedIn ? 'Dashboard' : 'Register'}</Link>
                    </Navbar.Brand>
                </Nav>
        </Navbar>
      </header>
    )
  }
}
export default NavBar;
