import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Containers/Counter';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
