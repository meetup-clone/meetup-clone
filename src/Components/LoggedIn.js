import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import axios from 'axios'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            myEvents: [],
            allEvents: []
        }
    }
    componentDidMount() {
        axios.get('/api/userEvents').then(res => this.setState({ myEvents: res.data }))
        axios.get('/api/allEvents').then(res => this.setState({ allEvents: res.data }))
    }
    render() {
        let { myEvents, allEvents } = this.state;
        let eventsList = allEvents.map((e, i) => {
            return (
                <div className='eventCards' key={e.event_name + e.event_id + i}>
                    <div className='eventTime'>
                    <time itemprop="startDate" datetime="2018-04-11T15:00:00-06:00">5:00<span class="period">PM</span></time>
                        {e.start_date}
                    </div>
                    <div className='eventDetails'>
                        <Link to={`/${e.url_name}`}>{e.group_name}</Link>
                        <Link to={`/${e.url_name}/events/${e.event_id}`}>{e.event_name}</Link>
                        <span>{`${e.attendees} Members going`}</span>
                    </div>
                </div>
            )
        })
        return (
            <div className='loggedIn'>
                <Header />
                <div className='nextMeetup'>

                    {myEvents.length > 0 ? 
                        <div>
                            <h5>YOUR NEXT MEETUP</h5>
                            <hr/>
                            <h1>{myEvents[0].event_name}</h1>
                            <h4>{myEvents[0].group_name}</h4>
                            <h4>{myEvents[0].attendees}</h4>
                            <h3>{myEvents[0].start_date}</h3>
                            <h3>{myEvents[0].venue_name}</h3>
                            <h3>{myEvents[0].venue_address}</h3>
                        </div>
                    : 
                        <div>
                            <h1>Find a Meetup</h1>
                            <h4>500 Meetups nearby</h4>
                        </div>
                    }
                </div>
                {eventsList}
            </div>
        )
    }
}
