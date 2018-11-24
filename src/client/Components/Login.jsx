import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Navbar from './Navbar';
import '../App.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
    <div>
      <Navbar/>
      <div className="wrapper tabled">
        <div className="stage" id="signs">
            <div className="signInForms">
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                    </form>

                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            />
                        </FormGroup>
                    </form>

                    <form onSubmit={this.handleSubmit}>
                        <Button
                            block
                            bsSize="medium"
                            bsStyle="info"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}
