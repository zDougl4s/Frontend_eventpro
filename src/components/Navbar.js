import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                <nav>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link to='/events'>
                        <h3>events</h3>
                    </Link>
                    <Link to='/login'>
                        <h3>Login</h3>
                    </Link>
                    <Link to='/signUp'>
                        <h3>Sign up</h3>
                    </Link>
                    <Link to='/myAccount'>
                        <h3>My Account</h3>
                    </Link>
                </nav>
                <button onClick={this.props.logOut}>
                Logout
                </button>
            </div>
        )
    }
}
