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
import twoAvatars from '../Assets/two-avatars.svg'
import infinity from '../Assets/infinity.svg'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            myEvents: [],
            myGroupEvents: [],
            allEvents: [{}],
            myGroups: [],
            allGroups: [{}],
            currentCity: 'Provo, UT',
            meetupsToggle: false,
            category: '',
            viewToggle: true,
        }
        this.filterTopicsButtons = this.filterTopicsButtons.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.location.query) {
            this.setState({ viewToggle: this.props.location.query.viewToggle })
        }
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
        axios.get('/api/myEvents').then(res => this.setState({ myEvents: res.data }))
        axios.get('/api/myGroupEvents').then(res => this.setState({ myGroupEvents: res.data }))
        axios.get('/api/allEvents').then(res => this.setState({ allEvents: res.data }))
        axios.get('/api/myGroups').then(res => this.setState({ myGroups: res.data }))
        axios.get('/api/allGroups').then(res => this.setState({ allGroups: res.data }))
    }

    filterTopicsButtons() {
        let topics = ['Outdoors', 'Tech', 'Family', 'Wellness', 'Sports', 'Learning', 'Photography',
            'Food', 'Writing', 'Language', 'Music', 'Movements', 'LGBTQ', 'Film', 'Sci-Fi', 'Beliefs']
        let buttons = topics.map((e, i) => {
            return (
                <div
                    key={i + e}
                    className='categories'
                    onClick={() => this.setState({ category: e, meetupsToggle: false })}
                >
                    {e}
                </div>
            )
        })
        return buttons
    }

    render() {
        const { user, myEvents, myGroupEvents, allEvents, myGroups, allGroups,
            meetupsToggle, currentCity, category, viewToggle } = this.state
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
                            value={category}
                            onChange={(e) => this.setState({ category: e.target.value })}
                            onClick={() => this.setState({ meetupsToggle: !meetupsToggle })}
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
                                value={currentCity}
                                onChange={(e) => this.setState({ currentCity: e.target.value })}
                                className='filterByCity'
                            />
                        </div>
                        <div className='viewButtons'>
                            <div
                                className={viewToggle ? 'groupsToggle' : 'groupsToggle activeView'}
                                onClick={() => this.setState({ viewToggle: false })}
                            >
                                Groups
                                    </div>
                            <div
                                className={viewToggle ? 'calendarToggle activeView' : 'calendarToggle'}
                                onClick={() => this.setState({ viewToggle: true })}
                            >
                                Calendar
                                    </div>
                        </div>
                    </div>
                    {meetupsToggle ?
                        <div className='meetupsFilter'>
                            <div className='filterColumn'>
                                <div
                                    className='categories'
                                    onClick={() => this.setState({ category: '', meetupsToggle: false })}
                                >
                                    <img src={infinity} alt='infinity' className='infinity' />
                                    All Meetups
                                </div>
                                <div
                                    className='categories'
                                    onClick={() => this.setState({ category: 'friends', meetupsToggle: false })}
                                >
                                    <img src={twoAvatars} alt='twoAvatars' className='twoAvatars' />
                                    Friends Meetups
                                </div>
                                {this.filterTopicsButtons()}
                            </div>
                        </div>
                        : null
                    }
                    {meetupsToggle ?
                        <div className='shadow' onClick={() => this.setState({ meetupsToggle: false })}></div>
                        : null
                    }
                </div>
                {viewToggle ?
                    <CalendarView
                        user={user}
                        myEvents={myEvents}
                        myGroupEvents={myGroupEvents}
                        allEvents={allEvents}
                        category={category.replace(/-/g, '').toLowerCase()}
                    />
                    :
                    <GroupsView
                        myGroups={myGroups}
                        allGroups={allGroups}
                        category={category.replace(/-/g, '').toLowerCase()}
                    />
                }
                <Footer />
            </div >
        )
    }
}
