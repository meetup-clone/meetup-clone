import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import CalendarView from './LoggedIn/CalendarView.js'
import GroupsView from './LoggedIn/GroupsView.js'
import Footer from './Footer.js'
import pinkCal from '../Assets/pinkCalendar.svg'
import pinkPin from '../Assets/pinkPin.svg'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            myEvents: [],
            myGroupEvents: [],
            allEvents: [{}],
            myGroups: [],
            allGroups: [{}],
            attendeeCount: [],
            meetupsToggle: false,
            cityToggle: false,
            currentCity: 'Provo, UT',
            viewToggle: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get('/api/myEvents').then(res => this.setState({ myEvents: res.data }))
        axios.get('/api/myGroupEvents').then(res => this.setState({ myGroupEvents: res.data }))
        axios.get('/api/allEvents').then(res => this.setState({ allEvents: res.data }))
        axios.get('/api/myGroups').then(res => this.setState({ myGroups: res.data }))
        axios.get('/api/allGroups').then(res => this.setState({ allGroups: res.data }))
        axios.get('/api/attendeeCount').then(res => this.setState({ attendeeCount: res.data }))
    }

    render() {
        let { myEvents } = this.state
        return (
            <div className='loggedIn'>
                <Header />
                <div className='nextMeetup'>
                    {myEvents.length > 0 ?
                        <div className='myEventContent'>
                            <h5>YOUR NEXT MEETUP</h5>
                            <hr />
                            <div className='myEventInfo'>
                                <div className='myEventName'>
                                    <Link to={`/${myEvents[0].url_name}/events/${myEvents[0].event_id}`}>
                                        <h1>{myEvents[0].event_name}</h1>
                                    </Link>
                                    <Link to={`/${myEvents[0].url_name}`}>
                                        <h4>{`${myEvents[0].group_name} • ${myEvents[0].attendees} Members`}</h4>
                                    </Link>
                                </div>
                                <div className='myEventTime'>
                                    <div className='myEventCal'>
                                        <img src={pinkCal} alt='cal' />
                                        <div className='myEventCalText'>
                                            <h4>{(new Date(myEvents[0].start_date)).toLocaleString()}</h4>
                                        </div>
                                    </div>
                                    <div className='myEventVenue'>
                                        <img src={pinkPin} alt='pin' id='pinkPin' />
                                        <div className='myEventVenueText'>
                                            <h4>{myEvents[0].venue_name}</h4>
                                            <h4>{myEvents[0].venue_address}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='findContent'>
                            <h1>Find a Meetup</h1>
                            <h4>500 Meetups nearby</h4>
                        </div>
                    }
                </div>
                <div className='filterContainer'>
                    <div className='filter'>
                        <input
                            placeholder='All Meetups'
                            onClick={() => this.setState({ meetupsToggle: !this.state.meetupsToggle })}
                            className='allMeetups'
                        />
                        <div className='filterDistance'>
                            <span>within</span>
                            <select defaultValue='10'>
                                <option value='2'>2 miles</option>
                                <option value='5'>5 miles</option>
                                <option value='10'>10 miles</option>
                                <option value='25'>25 miles</option>
                                <option value='50'>50 miles</option>
                                <option value='100'>100 miles</option>
                            </select>
                            <span>of</span>
                            <input
                                value={this.state.currentCity}
                                onChange={(e) => this.setState({ currentCity: e.target.value })}
                                className='filterByCity'
                            />
                        </div>
                        <div className='viewButtons'>
                            <div
                                className={this.state.viewToggle ? 'groupsToggle' : 'groupsToggle activeView'}
                                onClick={() => this.setState({ viewToggle: false })}
                            >
                                Groups
                                    </div>
                            <div
                                className={this.state.viewToggle ? 'calendarToggle activeView' : 'calendarToggle'}
                                onClick={() => this.setState({ viewToggle: true })}
                            >
                                Calendar
                                    </div>
                        </div>
                    </div>
                    {this.state.meetupsToggle ?
                        <div className='shadow' onClick={() => this.setState({ meetupsToggle: false })}>
                            <div className='meetupsFilter' onClick={(e) => e.stopPropagation()} >
                                <div></div>
                            </div>
                        </div>
                        : null
                    }
                </div>
                {this.state.viewToggle ?
                    <CalendarView 
                        myEvents={this.state.myEvents}
                        myGroupEvents={this.state.myGroupEvents}
                        allEvents={this.state.allEvents}
                        attendeeCount={this.state.attendeeCount}
                    />
                    :
                    <GroupsView 
                        myGroups={this.state.myGroups}
                        allGroups={this.state.allGroups}
                    />
                }
                <Footer />
            </div >
        )
    }
}
