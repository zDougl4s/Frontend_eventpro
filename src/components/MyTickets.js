import React, { Component } from 'react'
import {userTickets} from '../API'
import TicketCard from './TicketCard'

export default class MyTickets extends Component {
    state = {
        myTickets: [],
        name: '',
        img: '',
        ticketsOwn: 0
    }

    
    componentDidMount(){
        fetch('http://localhost:3002/tickets')
        .then((data) => data.json())
        .then((res) => {
                    return res;
                })
        .then((data) =>data.filter(ticket => ticket.user_id === this.props.user.id))
        .then((data) => {
            this.setState({
                myTickets: data,
                ticketsOwn: data.length
            })
        })
    }
    
    filterTickets = (id) => {
        const data=this.state.myTickets.filter(tickets => tickets.id !== id)
        this.setState({
            myTickets: data
        })
    }
    

    render() {
        return (
            <div className='text-align'>
                <h2 className="whiteTextOverride">
                    Tickets booked
                </h2>
                {this.state.myTickets.map((ticket) =>
                    <TicketCard
                        key={ticket.id}
                        filterTickets={this.filterTickets}
                        data={ticket}
                    />
                )}
            </div>
        )
    }
}
