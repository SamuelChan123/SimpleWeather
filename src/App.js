import React from 'react';
import MainPage from './MainPage.js';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage.js';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"  component = {MainPage} />
        <Route exact path="/profile"  component = {ProfilePage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
