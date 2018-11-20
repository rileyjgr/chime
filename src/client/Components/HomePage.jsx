import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Nav, NavItem, Row } from "react-bootstrap";
import Map from './Map';
import Navbar from './Navbar';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper tabled">
                    <div className="stage" id="intro">
                        <div className="middled">
                            <Navbar/>
                            <Jumbotron>
                                <div>
                                    <span className="text-center"><h1>Welcome to Chime</h1>
                                    <br/>
                                        <span className="text-center"><h3>Giving your workforce a voice</h3>
                                        </span>
                                    </span> 
                                </div>
                            </Jumbotron>
                        </div>
                    </div>
                </div>

                <div className="wrapper tabled">
                    <div className="stage" id="about">
                        <div className="middled">
                            <Jumbotron><span className="text-center"><h1>About Us</h1></span></Jumbotron>
                            <ul>
                                <li>A group of students at the Columbia x Trilogy coding bootcamp had a dream</li>
                                <li>Companies were out of control, disorganized, and not hearing from their workforce</li>
                                <li>We sought out to give those workforces a voice</li>
                                <li>So we wanted to give all employees the ability to chime in with management</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="wrapper tabled">
                    <div className="stage" id="skills">
                        <div className="middled">
                            <Jumbotron><span className="text-center"><h1>Chime Skills</h1></span></Jumbotron>
                            <ul>
                                <li>I can set a calendar for your company</li>
                                <li>Want to hear about the weather for your work-week?</li>
                                <li>Lets submit some feedback to HR!!</li>
                                <li>Track employee engagement while you're at it</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="wrapper tabled">
                    <div className="stage" id="map">
                        <div className="middled">
                        <Jumbotron><span className="text-center"><h1>Where are people Chiming in?</h1></span></Jumbotron>
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
