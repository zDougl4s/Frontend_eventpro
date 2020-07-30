import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
                
            <div>
                <div><h1 className="text-align whiteTextOverride word " >Welcome to Eventpro</h1></div>
                <div className="alrazy-title text-align whiteTextOverride word " data-splitting></div>
               <script src="https://unpkg.com/splitting@1.0.0/dist/splitting.js"></script>
            <script>
                Splitting();
            </script>
            <div class="main">
            <Link to='/login'>
    <a href="#" class="a1 a33">Login</a>
    </Link>
    <Link to='/signUp'>
    <a href="#" class="a1 a33">Signup</a>
    </Link>
    </div>
         </div>

        )
    }
}
