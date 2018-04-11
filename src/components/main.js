import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home';
import Resources from './resources';
import requireAuth from './require_authentication';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources" component={requireAuth(Resources)} />
        </Switch>
      </div>
    );
  }
}

export default Main;
