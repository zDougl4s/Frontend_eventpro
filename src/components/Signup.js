import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {createNewUser} from '../API';

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        name: '',
        email: ''
    };


    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

        const {username , password, name, email} = this.state;
        const userData = {username, password, name, email};

        createNewUser(userData);
    }

    render() {
        return (
            <div className='text-align'>
                <h2>Sign up</h2>
                <div className='Login'>
                    <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input id="username"
                        onChange={this.handleInputChange}
                        value={this.state.username}
                        placeholder='Username' 
                        />
                    <br></br>
                    <label>password</label>
                    <input type="password" id="password"
                    onChange={this.handleInputChange}
                    value={this.state.password} placeholder='password'
                    />
                    <br></br>
                    <label>Name</label>
                    <input id="name"
                    onChange={this.handleInputChange}
                    value={this.state.name} placeholder='name'
                    />
                    <br></br>
                    <label>Email</label>
                    <input type="email" id="email"
                    onChange={this.handleInputChange}
                    value={this.state.email} placeholder='email'
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}