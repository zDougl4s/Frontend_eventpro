import React, { Component } from 'react'
import {createNewUser} from '../API';
import { Redirect } from "react-router-dom";

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
        createNewUser(userData,this.props.setUser)
    }

    render() {
        return (

 <body>
<div class="container">
{this.props.user.username ? <Redirect push to="/events"/> : null}
    <div class="row main">
        <div class="main-login main-center">
        <h5>Sign up once and search for Events.</h5>
            <form onSubmit={this.handleSubmit}> 
                <div class="form-group">
                    <label for="username" class="cols-sm-2 control-label">Your Username</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                            <input type="text" class="form-control"
                            id="username"
                            onChange={this.handleInputChange}
                            value={this.state.username}
                            placeholder='Username' />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email" class="cols-sm-2 control-label">Your Email</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                            <input  class="form-control" name="email"   placeholder="Enter your Email"
                            type="email" id="email"
                            onChange={this.handleInputChange}
                            value={this.state.email} />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="name" class="cols-sm-2 control-label">Name</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                            <input type="text" class="form-control" name="username"  placeholder="Enter your Username"
                            id="name"
                            onChange={this.handleInputChange}
                            value={this.state.name} />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="cols-sm-2 control-label">Password</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input  class="form-control" name="password" placeholder="Enter your Password"
                            type="password" id="password"
                            onChange={this.handleInputChange}
                            value={this.state.password}/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                            <input  class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"
                            type="password" 
                            onChange={this.handleInputChange}
                            value={this.state.password}/>
                        </div>
                    </div>
                </div>

                <div class="form-group ">
                    <button type="submit" id="button" class="btn btn-primary btn-lg btn-block login-button">Register</button>
                </div>
                
            </form>
        </div>
    </div>
</div>
</body> 
        )
    }
}
