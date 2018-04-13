import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'
import Footer from './Footer.js'
import pinkCal from '../Assets/pinkCalendar.svg'
import pinkPin from '../Assets/pinkPin.svg'
import Calendar from 'react-calendar'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            myEvents: [],
            allEvents: [],
            meetupsToggle: false,
            cityToggle: false,
            currentCity: 'Provo, UT',
            calToggle: true,
            cat1: true,
            cat2: false,
            cat3: false,
            cat4: false,
            date: new Date()
        }
        this.filterEvents = this.filterEvents.bind(this)
        this.listEvents = this.listEvents.bind(this)
        this.convertTime = this.convertTime.bind(this)
    }

    componentDidMount() {
        axios.get('/api/userEvents').then(res => this.setState({ myEvents: res.data }))
        axios.get('/api/allEvents').then(res => this.setState({ allEvents: res.data }))
    }

    filterEvents() {
        let filteredEvents = this.state.allEvents.filter(e => {
            return e.start_date >= Date.now()
        })
        return filteredEvents
    }

    listEvents() {
        let filteredEvents = this.filterEvents()
        return filteredEvents.map((e, i) => {
            return (
                <div className='loggedInEventCard' key={e.event_name + e.event_id + i}>
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
    }

    convertTime(mil) {
        let time = new Date(mil)
        let newTime = time.toLocaleTimeString()
        return newTime.substr(0, newTime.length - 6) + newTime.substr(newTime.length - 3, newTime.length - 1)
    }

    render() {
        let { myEvents } = this.state
        return (
            <div>
                <Header />
                <div className='loggedIn'>
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
                                            <img src={pinkPin} alt='pin' />
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
                        <div className='filterContainer'>
                            <div className='filter'>
                                <input
                                    placeholder='All Meetups'
                                    onClick={() => this.setState({ meetupsToggle: !this.state.meetupsToggle })}
                                    className='allMeetups'
                                />
                                <div className='filterDistance'>
                                    <span>within</span>
                                    <select>
                                        <option value='2'>2 miles</option>
                                        <option value='5'>5 miles</option>
                                        <option value='10' selected>10 miles</option>
                                        <option value='25'>25 miles</option>
                                        <option value='50'>50 miles</option>
                                        <option value='100'>100 miles</option>
                                    </select>
                                    <span>of</span>
                                    <div className='filterByCity'>
                                        <input
                                            value={this.state.currentCity}
                                            onChange={(e) => this.setState({ currentCity: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className='viewButtons'>
                                    <div
                                        className={this.state.calToggle ? 'groups' : 'groups activeView'}
                                        onClick={() => this.setState({ calToggle: !this.state.calToggle })}
                                    >
                                        Groups
                                </div>
                                    <div
                                        className={this.state.calToggle ? 'calendar activeView' : 'calendar'}
                                        onClick={() => this.setState({ calToggle: !this.state.calToggle })}
                                    >
                                        Calendar
                                </div>
                                </div>
                            </div>
                        </div>
                        {this.state.meetupsToggle ?
                            <div className='meetupsFilter'>

                            </div>
                            : null}

                    </div>
                    <div className='eventsContainer'>
                        <div className='leftCol'>
                            <div className='todaysDate'>{new Date(Date.now()).toDateString()}</div>
                            <div className='events'>
                                {this.listEvents()}
                            </div>
                            <div className='showMore'>
                                Show more
                        </div>
                        </div>
                        <div className='rightCol'>
                            <div className='meetupCategories'>
                                <span
                                    className={this.state.cat1 ? 'activeCategory' : null}
                                    onClick={() => this.setState({ cat1: true, cat2: false, cat3: false, cat4: false })}
                                >
                                    All Meetups
                                </span>
                                <span
                                    className={this.state.cat2 ? 'activeCategory' : null}
                                    onClick={() => this.setState({ cat1: false, cat2: true, cat3: false, cat4: false })}
                                >
                                    My Meetups & suggestions
                                </span>
                                <span
                                    className={this.state.cat3 ? 'activeCategory' : null}
                                    onClick={() => this.setState({ cat1: false, cat2: false, cat3: true, cat4: false })}
                                >
                                    My Meetups
                                </span>
                                <span
                                    className={this.state.cat4 ? 'activeCategory' : null}
                                    onClick={() => this.setState({ cat1: false, cat2: false, cat3: false, cat4: true })}
                                >
                                    I'm Going
                                </span>
                            </div>
                            <div className='today'>Today</div>
                            <Calendar
                                value={this.state.date}
                                className='calendarComponent'
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
