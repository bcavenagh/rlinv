import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authentification from './Containers/Authentification/Authentification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Authentification/>
      </div>
    );
  }
}

export default App;
