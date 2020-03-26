import React from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import App from '/App';
import Login from '/Login';
import SignIn from '/SignIn';
const Routes = () => (
    <Router>
            <Route exact path="/" component={SignIn} />
            <Route path="/app" component={App} />
    </Router>
);

export default Routes;