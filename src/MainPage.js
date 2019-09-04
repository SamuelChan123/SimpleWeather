import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My web app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Link to='/profile'>Profile page</Link>

        </a>
      </header>

    </div>
  );
}

export default MainPage;
