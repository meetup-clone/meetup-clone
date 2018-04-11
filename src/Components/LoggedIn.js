import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import axios from 'axios'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            myEvents: [],
            allEvents: [],
            meetupsToggle: false,
            cityToggle: false
        }
        this.convertTime = this.convertTime.bind(this)
    }
    componentDidMount() {
        axios.get('/api/userEvents').then(res => this.setState({ myEvents: res.data }))
        axios.get('/api/allEvents').then(res => this.setState({ allEvents: res.data }))
    }
    convertTime(mil) {
        let time = new Date(mil)
        let newTime = time.toLocaleTimeString()
        return newTime.substr(0, newTime.length - 6) + newTime.substr(newTime.length - 3, newTime.length - 1)
    }
    render() {
        let { myEvents, allEvents } = this.state;
        let eventsList = allEvents.map((e, i) => {
            return (
                <div className='eventCards' key={e.event_name + e.event_id + i}>
                    <div className='eventTime'>
                        {this.convertTime(e.start_date)}
                    </div>
                    <div className='eventDetails'>
                        <Link to={`/${e.url_name}`}>
                            <span className='groupName'>{(e.group_name).toUpperCase()}</span>
                        </Link>
                        <Link to={`/${e.url_name}/events/${e.event_id}`}>
                            <span className='eventName'>{e.event_name}</span>
                        </Link>
                        <span className='attendees'>{`${e.attendees} Members going`}</span>
                    </div>
                </div>
            )
        })
        return (
            <div className='loggedIn'>
                <Header />
                <div className='nextMeetup'>
                    {myEvents.length > 0 ?
                        <div className='eventContent'>
                            <h5>YOUR NEXT MEETUP</h5>
                            <hr />
                            <Link to={`/${myEvents[0].url_name}/events/${myEvents[0].event_id}`}>
                                <h1>{myEvents[0].event_name}</h1>
                            </Link>
                            <Link to={`/${myEvents[0].url_name}`}>
                                <h4>{myEvents[0].group_name}</h4>
                            </Link>
                            <h4>{`${myEvents[0].attendees} Members`}</h4>
                            <h3>{myEvents[0].start_date}</h3>
                            <h3>{myEvents[0].venue_name}</h3>
                            <h3>{myEvents[0].venue_address}</h3>
                        </div>
                        :
                        <div className='findContent'>
                            <h1>Find a Meetup</h1>
                            <h4>500 Meetups nearby</h4>
                        </div>
                    }
                    <div className='filter'>
                        <input placeholder='All Meetups' onClick={() => this.setState({ meetupsToggle: !this.state.meetupsToggle })} />
                        <span>within</span>
                        <select>
                            <option value="2">2 miles</option>
                            <option value="5">5 miles</option>
                            <option value="10">10 miles</option>
                            <option value="25">25 miles</option>
                            <option value="50">50 miles</option>
                            <option value="100">100 miles</option>
                            <option value="any">any distance</option>
                        </select>
                    </div>
                    {this.state.meetupsToggle ?
                        <div className='meetupsFilter'>

                        </div>
                        : null}
                    
                </div>
                <div className='events'>
                    {eventsList}
                </div>
            </div>
        )
    }
}
