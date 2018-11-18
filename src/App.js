import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import About from './Components/About/About.js';
import data from './data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to='/'>About</Link>
            <Route exact path='/' component={ ()=> <About about={data.about}/>} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;



