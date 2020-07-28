import { Link } from "react-router-dom";
import React, { Component } from 'react'


export default class MyAccount extends Component {
    state = {
        name: '',
        username: '',
        email: ''
    }

    componentDidMount(){
        if(!this.props.user.id === 0){
            this.setState({
                name: this.props.user.name,
                username: this.props.user.username,
                email: this.props.user.email
            })
        }   
    }


    render() {
        return (
           
<body>
<div class="container">
{/* {this.props.user.username ? <Redirect push to="/myAccount"/> : null} */}
    <div class="row main">
        <div class="main-login main-center">
        <h5></h5> 
                <div class="form-group">
                    <label for="username" class="cols-sm-2 control-label">Your Username</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                            <input type="text" class=""
                            id="username"
                            value={this.state.username}
                            placeholder={this.props.user.username}/>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email" class="cols-sm-2 control-label">Your Email</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="" aria-hidden=""></i></span>
                            <input  class="" name="email"   placeholder={this.props.user.email}
                            type="email" id="email"
                            value={this.state.email} />
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label for="name" class="cols-sm-2 control-label">Name</label>
                    <div class="cols-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                            <input type="text" class="" name="username"  placeholder={this.props.user.name}
                            id="name"
                            onChange={this.handleChange}
                            value={this.state.name} />
                            
                        </div>
                        <Link to='/updatedetails'>
                        <button type="submit" id="button" class="btn btn-primary btn-lg btn-block login-button">Update details</button>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </body>
        )
    }
}
