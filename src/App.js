import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Navigation from './Components/Navigation/Navigation';
import data from './data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About/>
        <Navigation/>
        <Experience experience={data.experience}/>
      </div>
    );
  }
}

export default App;



