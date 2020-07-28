import React, { Component } from 'react'
import {fetchDeleteTicket} from '../API'
import { Link } from "react-router-dom";

export default class TicketCard extends Component {

    state = {
        eventName: '',
        eventImg: '',
        ticketOwn: []
    }

    componentDidMount(){
        fetch(`http://localhost:3002/events/${this.props.data.event_id}`)
        .then((data) => data.json())
        .then((res) => {
            return res;
        })
        .then((data) => {
            this.setState({
                eventName: data.name,
                eventImg: data.img_url,
                eventLo: data.location
            })
        })
    }
    handleDelete = (event) => {
        alert("Your ticket has been cancel")
        fetchDeleteTicket(this.props.data.id)
        this.props.filterTickets(this.props.data.id)
    }

    render() {
        return (
            
<div>
<h1></h1>
  <div className="row whiteTextOverride">
      <section className="date whiteTextOverride">
        <time datetime="23th feb whiteTextOverride">
          <span class="whiteTextOverride">23</span><span class="whiteTextOverride">feb</span>
        </time>
      </section>
      <section className="card-cont whiteTextOverride">
        <small>{this.state.eventName}</small>
        <h3 className="whiteTextOverride">{this.state.eventLo}</h3>
        <div className="even-date whiteTextOverride">
         <i className="fa fa-calendar whiteTextOverride"></i>
         <time>
           <span>wednesday 28 december 2014</span>
           <span>08:55pm to 12:00 am</span>
         </time>
        </div>
        <div className="even-info whiteTextOverride">
          <i className="fa fa-map-marker whiteTextOverride"></i>
          <p>
          {this.state.eventLo}
          </p>
        </div>
        <button className="btn btn-danger " onClick={this.handleDelete}>cancel</button>
      </section>
    </div>
    </div>
    )
    }
}

