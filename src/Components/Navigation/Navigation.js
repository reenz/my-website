import React from 'react';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import About from '../About/About';
import Experience from '../Experience/Experience';
import data from '../../data.js';
import './Navigation.css'

const Navigation = () => {
  return(
    <Router>
          <div>
            <div className="NavBar" >
              <Link to='/'>About</Link>
              <Link to='/experience'>Experience</Link>
            </div>
            <div className="ComponentData" >
              <Route exact path='/' component={ ()=> <About about={data.about}/>} /> 
              <Route exact path='/experience' component={ () => <Experience experience={data.experience}/>}/>
            </div>
          </div>
        </Router>
  )
}

export default Navigation;