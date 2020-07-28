import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class EventCard extends Component {

    handleBuyTicket = (userId, eventId) => () => {
        alert("Your reservation has been made")
        this.props.buyTicket(userId, eventId)
    }

    render() {
        return (



    <div className="col-md-4 ">
        <div className="card card-width row ">
            <img className="card-img-top img-size" alt="event" src={this.props.event.img_url}/>
            <div className="card-body">
                <h3 className="card-title main-center">{this.props.event.name}</h3>
                {/* <p className="card-text">{this.props.event.bio}</p> */}
                <h2 className="card-text main-center">£{this.props.event.price}p/p</h2>
                <h4 className="card-text main-center">Available</h4>
        </div>
        <br></br>
        <Link to='/login'> 
        {this.props.user == null  ? <button className="btn btn-primary text-align ">reserve a ticket now!</button> : null}
        </Link>
        <Link to='/myTickets'> 
        {this.props.user !== null  ?  <button  className="btn btn-primary  text-align mar-t-50" onClick={this.handleBuyTicket(this.props.userId, this.props.event.id)}>Get a ticket</button> :null }
        </Link>
            </div>
    </div>

        )
    }
}
