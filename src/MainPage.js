import React from 'react';
import logo from './sun.png';
import './App.css';
import {Link} from 'react-router-dom';
import { FormControl, Button, Input, InputLabel, FormHelperText } from '@material-ui/core';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Weather App for Your Location
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
