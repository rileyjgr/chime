import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import HomePage from './HomePage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        )
    }
}
export default App;
