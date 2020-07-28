import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (


<nav class="navbar navbar-expand-lg navbar-light nav-back-color">
<a className="navbar-brand whiteTextOverride" href="/">Eventpro</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
        <Link  className="nav-link whiteTextOverride" to='/'>Home</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link whiteTextOverride" to='/events'>Events</Link>
    </li>
    <li class="nav-item">
    </li>
    <li class="nav-item">
    </li>
    <li class="nav-item">
    {this.props.user.username !== null  ? <Link className="nav-link whiteTextOverride" to='/myAccount'>My Account</Link> :null }
    </li>
    <li class="nav-item">
    {this.props.user.username !== null  ? <Link className="nav-link whiteTextOverride" to='/myTickets'>My Tickets</Link> :null }
    </li>
  </ul>
  {this.props.user.username == null  ? <Link className="float-r btn btn-success whiteTextOverride " to='/signUp'>Signup</Link> :null }
  {this.props.user.username == null  ? <Link className="float-r btn btn-success" to='/login'>Login</Link> :null}
  {this.props.user.username !== null  ? <Link className="float-r btn-inline btn btn-danger" to='' onClick={this.props.logOut}>Logout</Link> : null}
  {this.props.user.username ? <span className="float-r mar-t-8 whiteTextOverride"><Link to='/myAccount' className="username whiteTextOverride">{this.props.user.username}</Link></span> : null}
      <form class="float-r form-inline my-2 my-lg-0 mar-r-20">
        <input onChange={this.props.updateFilter} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>
</div>
</nav>
        )
    }
}
//  <Input onChange={this.props.updateFilter} icon='search' placeholder='Beers Page Search...' />