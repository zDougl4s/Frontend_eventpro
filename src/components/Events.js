import React, { Component } from 'react'
import EventCard from './EventCard'
import { buyTicket } from '../API.js'

export default class Events extends Component {
    
    renderEvents = () => this.props.events.map(event => <EventCard 
        user={this.props.user.username}
        key={event.id}
        event={event}
        buyTicket={buyTicket}
        userId={this.props.user.id}
    />
)

    render() {
        return (
            <div className='container'>
                <h2 className="text-center mar-b-100 mar-r-150 text-bold  whiteTextOverride ">All Events</h2>
                <div className="row">
                    { this.renderEvents() }
                </div>
            </div>
        )
    }
}
