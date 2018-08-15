import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './utils/ApiService';

class App extends Component {
  render() {

    ApiService.getUserById('1')
    .then(
        res => {
            console.log(res)
        },
        error => {

        }
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          hola mundo live reload, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
