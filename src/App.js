import React from "react";
import "./App.css";
import HomePage from './components/pages/Home'
import GamePage from './components/pages/Game'
import EntPage from './components/pages/Entertainment'
import InfoPage from './components/pages/Cal Combs'
import DocPage from './components/pages/Docs'
import DonatePage from './components/pages/Donate'
import { Switch, Route, BrowserRouter, Router} from 'react-router-dom'
import Navigation from "./components/Navigation/nav";



function App() {

  return (    
    <div>


    <BrowserRouter>
    <div>
      <Navigation/>
  </div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/game' component={GamePage}></Route>
      <Route exact path='/entertainment' component={EntPage}></Route>
      <Route exact path='/ccombs' component={InfoPage}></Route>
      <Route exact path='/docs' component={DocPage}></Route>
      <Route exact path='/donate' component={DonatePage}></Route>
    </BrowserRouter>
    </div>

 
    
  );
}

export default App;
