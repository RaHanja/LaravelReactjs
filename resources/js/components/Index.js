import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddLocale from './translations/AddLocale';
import ShowLocale from './translations/ShowLocale';

export default class Index extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/langage" component={AddLocale} />
                <Route path="/langage/show/:locale" component={ShowLocale} />
            </Router>            
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
