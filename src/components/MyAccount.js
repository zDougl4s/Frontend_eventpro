// import React, { Component } from 'react'



// export default function MyAccount ( { user } ) {
    
//     return (
//         <div className='text-align'>
//             <h3>My account</h3>
//             <h3>{user.name}</h3>
//             <h3>{user.username}</h3>
//             <h3>{user.email}</h3>
//         </div>
//     )

// }
import React, { Component } from 'react'
import UpdateDetails from './UpdateDetails'
import {Link} from 'react-router-dom';

export default class MyAccount extends Component {
    state = {
        name: '',
        username: '',
        email: ''
    }

    componentDidMount(){
        if(!this.props.user.id == 0){
            this.setState({
                name: this.props.user.name,
                username: this.props.user.username,
                email: this.props.user.email
            })
        }   
    }


    render() {
        return (
            <div className='text-align'>
                <h3>My account</h3>
                <h3>Username:{this.props.user.username}</h3>
                <h3>Name:{this.props.user.name}</h3>
                <h3>Email:{this.props.user.email}</h3>
            <Link to='/updatedetails'>
            <button>
                Update details
            </button>
            </Link>
            </div>
        )
    }
}
