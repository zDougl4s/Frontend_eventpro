import React, { Component } from 'react'

export default class EventCard extends Component {
    handleBuyTicket = (userId, eventId) => () => {
        this.props.buyTicket(userId, eventId)
    }

    render() {
        return (
            <div>
                <h3>{this.props.event.name}</h3>
                <img src={this.props.event.img_url}/>
                <h3>bio:{this.props.event.bio}</h3>
                <h3>£{this.props.event.price}</h3>
                <h3>tickets available: {this.props.event.buy_entry}</h3>
                <button onClick={this.handleBuyTicket(this.props.userId, this.props.event.id)}>
                    Get a ticket
                </button>
            </div>
        )
    }
}
