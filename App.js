
import './App.css'

import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';

import Footer from "./components/inc/Footer";
function App() {

  const [ user, setcontactUser] = useState({})
  return (
    
    <Router>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path='/'>
    {
              user && user._id ? <Home setcontactUser={setcontactUser} />: <Home setcontactUser={setcontactUser}/>
             
    }
    </Route>

    <Route path='/about'>
    <About/>
    </Route>

    <Route path='/contact'>
    <Contact setcontactUser={setcontactUser}/>
    </Route>

   

    </Switch>
    
    <Footer/>
   
    
    </div>
    </Router>
  );
}

export default App;
