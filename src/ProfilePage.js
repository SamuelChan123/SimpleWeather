import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

function ProfilePage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is a profile page
        </p>
        <Link to='/'>
        <Button variant="contained" color="primary">
          Home

          </Button>
        </Link>
      </header>

    </div>
  );
}

export default ProfilePage;
