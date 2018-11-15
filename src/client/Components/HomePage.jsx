import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Nav, NavItem, Row } from "react-bootstrap";
import Map from './Map';
import Navbar from './Navbar';

class HomePage extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Jumbotron>
            <div>
            <span className="text-center"><h1>Welcome to Chime!</h1>
            <span className="text-center"><h3>Giving your workforce a voice</h3>
            </span>
            </span> 
            </div>
            </Jumbotron>
            
                /* code here D: */

            <Map />
            </div>
        );
    }
}
export default HomePage;
