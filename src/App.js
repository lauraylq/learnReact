import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var arr = [
  <h1>早上好</h1>,
  <h2>qiqi</h2>,
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{arr}</div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
