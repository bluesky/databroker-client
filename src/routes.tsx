import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App'
import CatalogsPage from './catalogs'
import RunsPage from './runs'
import RunPage from './run'
import Header from './header';

const Routes: React.FunctionComponent = () => {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={App} />
                <Route exact path="/runs" component={CatalogsPage} />
                <Route exact path="/runs/:id" component={RunsPage} />
                <Route path="/runs/:id/:uid" component={RunPage} />
            </div>
        </Router>
    );
};

export default Routes;
