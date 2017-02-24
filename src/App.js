import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="App-header">
            <h2>appPseudogram</h2>
         </div>
         <p className="App-intro">
            <button onClick={this.handleAuth}>Login con google</button>
         </p>
      </div>
    );
  }
}

export default App;
