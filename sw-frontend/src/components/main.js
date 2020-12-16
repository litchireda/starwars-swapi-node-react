import React from 'react';
import StaticHeader from './header';

import HomePage from './pages/HomePage';

import DetailsPage from './pages/detailsPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class Main extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <StaticHeader/>
            <Switch>
              <Route path="/people/:id" render={(props) => <DetailsPage what='people' {...props} />} />
              <Route path="/films/:id" render={(props) => <DetailsPage what='films' {...props} />} />
              <Route path="/species/:id" render={(props) => <DetailsPage what='species' {...props} />} />
              <Route path="/planets/:id" render={(props) => <DetailsPage what='planets' {...props} />} />
              <Route path="/vehicles/:id" render={(props) => <DetailsPage what='vehicles' {...props} />} />
              <Route path="/starships/:id" render={(props) => <DetailsPage what='starships' {...props} />} />
              <Route path="/:category" component={HomePage} />
              <Route path="/">
                <HomePage/>
              </Route>

            </Switch>
        </React.Fragment>
      </Router>
    );
  }
}