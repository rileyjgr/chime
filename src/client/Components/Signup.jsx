import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Jumbotron } from "react-bootstrap";


class Signup extends Component {
    constructor(props) {
        super(props);
        
        this.state = {email: '', team: '', password1:'', password2:'', logo:''}
        this.onChange = this.onChange.bind(this);
        }

        onChange(e) {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value});
        }

        getValidationState() {
            const length = this.state.email.length;
            if (length > 10) return 'success';
            else if (length > 5) return 'warning';
            else if (length > 0) return 'error';
            return null;
        }
        
        handleSubmit(e) {
            e.preventDefault()
            console.log(e)
            var username = this.state.username.trim()
            var password1 = this.state.password1.trim()
            var password2 = this.state.password2.trim()

            if (!username || !password1 || !password2) 
                return
            else if (password2 !== password1)
                this.setState({
                error: "Passwords didn't match",
                username: "",
                password1: "",
                password2: ""
            })
            // const data = new FormData();
            // data.append('file', this.uploadInput.files[0]);
            // data.append('filename', this.fileName.value);

            // fetch('http://localhost:8000/upload', {
            // method: 'POST',
            // body: data,
            // }).then((response) => {
            // response.json().then((body) => {
            //     this.setState({ imageURL: `http://localhost:8000/${body.file}` });
            // });
            // });
        }

        
    render() {
    return (
        <div>
        <h2><strong>Register your company's Chime channel here!</strong></h2><br/>
        <form>
            <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
            >
            <ControlLabel>Team Email</ControlLabel>
            <FormControl
                text="Email Address" 
                ref="email"
                name="email"
                type="text"
                placeholder="Email Address"
                defaultValue={this.state.email} 
                validate={this.validateEmail}
                value={this.state.email}
                onChange={this.onChange} 
                onSubmit={this.handleSubmit}
                errorMessage="Email is invalid"
                emptyMessage="Email can't be empty"
                errorVisible={this.state.showEmailError}
            />
            <FormControl.Feedback />
            </FormGroup>
        </form>

        <form>
            <FormGroup
            controlId="formBasicText"
            >
            <ControlLabel>Company Name</ControlLabel>
            <FormControl
                text="Team Name" 
                ref="teamName"
                name="team"
                placeholder="Team Name"
                validate={this.validateTeamName}
                value={this.state.team}
                onChange={this.onChange} 
                onSubmit={this.handleSubmit}
                emptyMessage="Team Name can't be empty"
            />
            <FormControl.Feedback />
            </FormGroup>
            
            <FormGroup
            controlId="formBasicText"
            >
            <ControlLabel>Enter Password</ControlLabel>
            <FormControl
                text="Team Name" 
                ref="password1"
                type="password"
                name="password1"
                placeholder="Password"
                validate={this.validatePassword1}
                value={this.state.password1}
                onChange={this.onChange} 
                onSubmit={this.handleSubmit}
                emptyMessage="Password can't be empty"
            />
            <FormControl.Feedback />
            </FormGroup>

            <FormGroup
            controlId="formBasicText"
            >
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
                text="Confirm Password" 
                ref="password2"
                type="password"
                name="password2"
                placeholder="Confirm"
                validate={this.validatePassword2}
                value={this.state.password2}
                onChange={this.onChange} 
                onSubmit={this.handleSubmit}
                emptyMessage="Password confirmation can't be empty"
            />
            <FormControl.Feedback />
            </FormGroup>
            </form>
            <form>
            <FormGroup
            controlId="formBasicText"
            >
            <ControlLabel>Logo</ControlLabel>
            <FormControl
                text="Logo" 
                ref="logo"
                name="email"
                type="file"
                placeholder="File"
                defaultValue={this.state.logo} 
                validate={this.validateLogo}
                value={this.state.logo}
                onChange={this.onChange} 
                onSubmit={this.handleSubmit}
                errorMessage="Logo is empty"
                emptyMessage="Logo can't be empty"
                errorVisible={this.state.showLogoError}
            />
            <FormControl.Feedback />
            </FormGroup>

        <Button bsStyle="primary">Register</Button>
        </form>
        </div>
    )
    }
}
export default Signup;