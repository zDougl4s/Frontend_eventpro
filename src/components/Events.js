import React, { Component } from 'react'
import EventCard from './EventCard'
import { buyTicket } from '../API.js'

export default class Events extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        fetch('http://localhost:3002/events')
        .then((resp) => resp.json())
        .then((events) => this.setState({
            events: events
        }))
    }

    // buyTicket = () => {

    // }
    render() {
        return (
            <div className='text-align'>
                {this.state.events.map((event) =>
                    <EventCard
                        key={event.id}
                        event={event}
                        buyTicket={buyTicket}
                        userId={this.props.user.id}
                    />
                )}
            </div>
        )
    }
}
