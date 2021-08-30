import React from 'react';
import Footer from './components/Footer/Footer'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Work from './components/Work/Work';
import Resume from './components/Resume';
import Home from './components/Home/Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path = "/" exact component= {Home}/>
          <Route path = "/AboutMe" component= {AboutMe}/>
          <Route path = "/Work" component= {Work}/>
          <Route path = "/Resume" component= {Resume}/>
          
        </Switch>
        <Footer/>
        

      </div>
    </Router>
  );
}

export default App;