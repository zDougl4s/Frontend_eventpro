import React, { Component } from 'react'
import { updateUser } from '../API';

export default class UpdateDetails extends Component {
    state = {
        id: 0,
        name: '',
        username: '',
        email: '',
    }

    componentDidMount() {
        if (this.props.user.id) {
            this.setState(this.props.user)
        }
    }

    handleChange = ({ target: { id, value } }) => {
        this.setState({ [id]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
        const { setUser } = this.props

        const { id, username, name, email } = this.state;
        const userData = { username, name, email };

        updateUser(id, userData, setUser)
    }

    render() {
        return (
            <div className='text-align'>
                <h2>Update my information</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                        <input
                            id="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            placeholder='Username'
                        />
                    <br></br>
                    <label>Name</label>
                    <input
                        id="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder='name'
                    />
                    <br></br>
                    <label>Email</label>
                    <input
                        type="email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email} placeholder='email'
                    />
                    <br></br>
                    <button type='submit'>Submit</button>
                    </form>
            </div>
        )
    }
}
