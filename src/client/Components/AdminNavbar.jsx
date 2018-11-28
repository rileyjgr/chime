import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Nav, NavItem } from "react-bootstrap";

class AdminNavbar extends Component {
    render() {
        return (
            <header>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="https://www.slack.com">Slack over here</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <Navbar.Brand>
                                <NavItem eventKey={1} href="#">
                                    <Link to="/License">License</Link>
                                </NavItem>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <NavItem eventKey={2} href="#">
                                    <Link to="/login">{this.props.isLoggedIn ? 'Logout' : 'Login'}</Link>
                                </NavItem>
                            </Navbar.Brand>
                        </Nav>
                        <Nav pullRight>
                            <Navbar.Brand>
                                <NavItem eventKey={3} href="#">
                                    <Link to="/signup">Register</Link>
                                </NavItem>
                            </Navbar.Brand>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}
export default AdminNavbar;


