import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import data from './data.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h3>Software Developer who loves to experiment and challenge herself</h3>
        <Router>
          <div>
            <Link to='/'>About</Link>
            <Link to='/experience'>Experience</Link>
            <Route exact path='/' component={ ()=> <About about={data.about}/>} /> 
            <Route exact path='/experience' component={ () => <Experience experience={data.experience}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;



