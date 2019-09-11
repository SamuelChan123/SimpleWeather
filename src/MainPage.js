import React from 'react';
import logo from './logo.svg';
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

    </header>

    <FormControl>
<InputLabel htmlFor="my-input">Zip Code</InputLabel>
<Input id="my-input" aria-describedby="my-helper-text" />
 <Link to='/profile'>
   <Input type="submit" value="Get Weather" />
 </Link>
</FormControl>


    </div>
  );
}

export default MainPage;
