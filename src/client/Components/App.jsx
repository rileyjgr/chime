import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import License from './License';
import HomePage from './HomePage';
import Signup from './Signup';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route name="dashboard" exact path="/dashboard" component={Dashboard} />
                    <Route name="login" exact path="/login" component={Login} />
                    <Route name="license" exact path="/license" component={License} />
                    <Route name="signup" exact path="/signup" component={Signup} />
                </div>
            </Router>
        )
    }
}
export default App;
