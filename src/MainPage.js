import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My weather web app!
        </p>
        <Link to='/profile'>
        <Button variant="contained" color="primary">
         Durham Weather

          </Button>
        </Link>
      </header>

    </div>
  );
}

export default MainPage;
