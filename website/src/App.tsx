import * as React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
export class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  } 
}