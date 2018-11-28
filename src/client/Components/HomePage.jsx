import React, { Component } from 'react';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, ControlLabel, Image, Jumbotron, Nav, NavItem, Row } from "react-bootstrap";
import HeatMap from './Map';
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
                                    <span className="text-center">
                                        <h1>Welcome to Chime</h1>
                                    </span> 
                                    <div className="text-center inlined">
                                        <Image src="http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-10/128/Bell-icon.png" rounded />
                                        <h3>Giving your workforce a voice</h3>
                                    </div>
                                </div>
                            </Jumbotron>
                        </div>
                    </div>
                </div>

                <div className="wrapper2 tabled">
                    <div className="stage" id="about">
                        <div className="middled">
                            <Jumbotron className='titles'>
                                <span className="text-center"><h1>About Us</h1></span>
                                <p className="text-center">A group of coding bootcamp students @ Columbia University wanted to create a chatbot integration to serve company employees with a variety of task automation. We also sought to make an interface to provide anonymous feedback, departmental engagement, and a company calendar for HR departments on our web app.</p>
                                <p className="text-center">
                                    <Button bsStyle="primary" href="https://github.com/rileyjgr/chime">Github!</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </div>
                </div>

                <div className="wrapper2 tabled">
                    <div className="stage" id="skills">
                        <div className="middled">
                            <Jumbotron className='titles'><span className="text-center">
                                <h1>Chime Skills</h1></span>
                            </Jumbotron>
                            <ul>
                                <li>I can set a calendar for your company</li>
                                <li>Want to hear about the weather during your work-week?</li>
                                <li>Lets submit some feedback to HR!!</li>
                                <li>Track employee engagement while you're at it</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="wrapper2 tabled">
                    <div className="stage" id="HeatMap">
                        <div className="middled">
                        <Jumbotron className='titlesMap'><span className="text-center"><h1>Where are people Chiming in?</h1></span></Jumbotron>
                            <HeatMap />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;
