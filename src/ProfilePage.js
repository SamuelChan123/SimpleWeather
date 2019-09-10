import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from './firebase.js';

class ProfilePage extends Component {

  constructor() {
    super();
    let apiKey = '20270b28015066fcb62767907b86785f';
    let current = 'durham,us';
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=${current}&appid=${apiKey}`;
    this.state = {
      city: "",
      weather: "",
      icon: ""
    }
  };

  componentDidMount() {

    fetch(this.url)
    .then(results => {return results.json()})
    .then(data => {
      let icon = data.weather[0].icon;
      let weather = data.weather[0].main;
      this.setState({weather: weather, icon: icon, city: data.name});
    })

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            The weather is currently:
          </p>
          <div>
            {this.state.weather} for {this.state.city}
          </div>

          <img src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}>
          </img>
          <br/>

          <Link to='/'>
          <Button variant="contained" color="primary">
            Home

            </Button>
          </Link>
        </header>

      </div>
    );
  }
}

export default ProfilePage;
