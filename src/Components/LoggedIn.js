import React, {Component} from 'react'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import axios from 'axios'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        axios.get('/api/events').then(res => {
            this.setState({ events: res.data })
        })
    }
    render() {
        let { events } = this.state;
        return (
            <div className='loggedIn'>
                <Header />
                <div className='nextMeetup'>

                    {events.length > 0 ? 
                        <div>
                            <h5>YOUR NEXT MEETUP</h5>
                            <hr/>
                            <h1>{events[0].event_name}</h1>
                            <h4>{events[0].group_name}</h4>
                            <h4>{events[0].attendees}</h4>
                            <h3>{events[0].start_date}</h3>
                            <h3>{events[0].venue_name}</h3>
                            <h3>{events[0].venue_address}</h3>
                        </div>
                    : 
                        <div>
                            <h1>Find a Meetup</h1>
                            <h4>500 Meetups nearby</h4>
                        </div>
                    }
                </div>
              
            </div>
        )
    }
}
