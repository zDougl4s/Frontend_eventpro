import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { validateToken } from './API';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup';
import Events from './components/Events';
import Details from './components/Details';
import MyAccount from './components/MyAccount';
import MyTickets from './components/MyTickets.js'
import UpdateDetails from './components/UpdateDetails';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const defaultUser = {
    id: 0,
    name: "",
    username: null,
    email: "",
    
  }
  const [user, setUser] = useState(defaultUser)
  const [search, setSearch] = useState("")
  const [events, setEvents] = useState([])

  const getEvents = () => {
    fetch('http://localhost:3002/events')
        .then((resp) => resp.json())
        .then(events => setEvents(events))
  }
  
  const filterBySearch = (arrayOfEvents) => {
    return arrayOfEvents.filter(event => event.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }
   
  useEffect(() => {
    getEvents()
    if (localStorage.getItem('jwt')) {
      validateToken().then(user => handlePostAuth(user))
    }
  }, [])

  const handlePostAuth = (userInfo) => {
    if (userInfo.error) {
      alert(userInfo.error)
    } else {
      setUser(userInfo.user)

      if (userInfo.jwt) {
        localStorage.setItem('jwt', userInfo.jwt)
        this.checkIfLoggedIn();
      }
      // debugger
    }
  }
  
    const checkIfLoggedIn = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.setState({ loggedIn: true });
    }
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    setUser(defaultUser)
  }
  
    const updateFilter = (e) => {
    setSearch( e.target.value )
  }
    

  return (
    <div className="App">
      <Router>
        <Navbar updateFilter={updateFilter}user={user} logOut={logOut}/>
        <Switch >
          <Route exact path="/">
            <Home
            user={user}
            />
          </Route>
          <Route exact path="/myAccount">
            <MyAccount
            user={user}
            />
          </Route>
          <Route exact path="/events">
            <Events
            events={ filterBySearch(events) }
            user={user}
            />
          </Route>
          <Route exact path="/eventsDetails">
            <Details
            user={user}
            />
          </Route>
          <Route exact path="/mytickets">
            <MyTickets
            user={user}
            setUser={setUser}
            />
          </Route>
          <Route exact path="/updatedetails">
            <UpdateDetails
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route  path='/login' render={(props) => <Login user={user} {...props} setUser={setUser} />} />
          {/* <Route path='/signup'  user={user} component={Signup} /> */}
          <Route exact path="/signup">
            <Signup
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route component={Error} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
