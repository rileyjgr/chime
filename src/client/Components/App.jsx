import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import License from './License';
import HomePage from './HomePage';
import Signup from './Signup';

class App extends Component {
    state = {
        loading: true
      };

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ loading: false }), 3500);
    }

    render() {
        const { loading } = this.state;
    
        if(loading) { // if your component doesn't have to wait for an async action, remove this block 
          return null; // render null when app is not ready
        }

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
