import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foo from './Foo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p classname="app-intro">
          to get started, edit <code>src/app.js</code> and save to reload.
        </p>
        <Foo />
      </div>
    );
  }
  
}

export default App;