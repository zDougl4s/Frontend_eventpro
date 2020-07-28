import React, { Component } from 'react'
import { logInUser } from '../../API';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";


export default class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();

        const { username, password } = this.state;
        const userData = { username, password };

        logInUser(userData, this.props.setUser);
    }

    render() {
        return (
    
        <div class="container login-container center ">
        {this.props.user.username ? <Redirect push to="/events"/> : null}
                    <div class="row">
                        <div class="col-md-12 login-form-1 text-align mb-3 ">
                            <h3 className="whiteTextOverride">login </h3>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input  type="text" class="form-control" placeholder="Your Username" 
                                    id="username"
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                    placeholder='Username' />
                                </div>
                                <div class="form-group">
                                    <input  class="form-control" placeholder="Your Password " 
                                        type="password"
                                        id="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                        placeholder='password' />
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btnSubmit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>    
                    </div>
        )
    }
}

