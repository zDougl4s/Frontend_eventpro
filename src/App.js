import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch >
          <Route exact path='/' component={Home}/>
          <Route path='/events' component={Events}/>
          <Route path='/eventsDetails' component={Details}/>
          <Route path='/myAccount' component={Account}/>
          <Route path='/myTickets' component={Tickets}/>
          <Route component={Error}/>
        </Switch>
    </div> 
  );
}

export default App;
