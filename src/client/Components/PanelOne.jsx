import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron, Navbar, Header, Toggle, Brand, Collapse, Nav, NavItem, Panel, Label, Badge } from "react-bootstrap";

class PanelOne extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Anonymous Feedback   <Badge>    3</Badge>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <p>Message 1</p>
                            <p>Message 2</p>
                            <p>Message 3</p>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        );
    }
}





export default PanelOne;