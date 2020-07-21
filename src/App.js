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
import Tickets from './components/Tickets';
import UpdateDetails from './components/UpdateDetails';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const defaultUser = {
    id: 0,
    name: "",
    username: "",
    email: "",
  }
  const [user, setUser] = useState(defaultUser)

    useEffect(() => {
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
        }
        // debugger
      }
    }

    const logOut = () => {
      localStorage.removeItem("jwt");
      setUser(defaultUser)
    }

    // const isLoggedIn = !!user.id

  return (
    <div className="App">
      <Router>
        <Navbar logOut={logOut}/>
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
            user={user}
            />
          </Route>
          <Route exact path="/eventsDetails">
            <Details
            user={user}
            />
          </Route>
          <Route exact path="/myTickets">
            <Tickets
            user={user}
            />
          </Route>
          <Route exact path="/updatedetails">
            <UpdateDetails
              user={user}
              setUser={setUser}
            />
          </Route>
          <Route path='/login' render={(props) => <Login {...props} setUser={setUser} />} />
          <Route path='/signup' component={Signup} />
          <Route component={Error} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
