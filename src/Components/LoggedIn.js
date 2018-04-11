import React, {Component} from 'react'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import axios from 'axios'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            events: {}
        }
    }
    componentDidMount() {
        axios.get('/api/events').then(res => {
            this.setState({ events: res.data[0] })
        })
    }
    render() {
        return (
            <div className='loggedIn'>
                <Header />
                <div className='nextMeetup'>
                    <h5>YOUR NEXT MEETUP</h5>
                    <hr/>
                    <h1>{this.state.events.event_name}</h1>
                    <h4>{this.state.events.group_name}</h4>
                    <h4>{this.state.events.attendees}</h4>
                    <h3>{this.state.events.start_date}</h3>
                    <h3>{this.state.events.venue_name}</h3>
                    <h3>{this.state.events.venue_address}</h3>
                </div>
              
            </div>
        )
    }
}
