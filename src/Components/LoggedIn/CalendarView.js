import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CalendarView.css'
import Calendar from 'react-calendar'

export default class CalendarView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cat1: true,
            cat2: false,
            cat3: false,
            cat4: false,
            date: new Date(Date.now())
        }
        this.filterEvents = this.filterEvents.bind(this)
        this.listEvents = this.listEvents.bind(this)
        this.convertTime = this.convertTime.bind(this)
    }

    componentDidMount() {
        if (window.scrollY > 283) window.scrollTo(0, 283)
    }

    filterEvents() {
        if (this.state.cat1) {
            let filteredEvents = this.props.allEvents.filter(e => {
                return e.start_date >= this.state.date
            })
            return filteredEvents
        }
        else if (this.state.cat2) {
            let filteredEvents = this.props.allEvents.filter(e => {
                return e.start_date >= this.state.date
            })
            return filteredEvents
        }
        else if (this.state.cat3) {
            let filteredEvents = this.props.myEvents.filter(e => {
                return e.start_date >= this.state.date
            })
        }
        else if (this.state.cat4) {
            let filteredEvents = this.props.myEvents.filter(e => {
                return e.start_date >= this.state.date
            })
        }
    }

    listEvents() {
        let filteredEvents = this.filterEvents()
        return filteredEvents.map((e, i) => {
            return (
                <div className='eventListCard' key={e.event_name + e.event_id + i}>
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
                        {/* <span className='attendees'>{`${this.props.attendees[this.props.attendees.indexOf(e.event_id)].count} Members going`}</span> */}
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
        return (
            <div className='calendarView'>
                <div className='leftCol'>
                    <div className='todaysDate'>{new Date(Date.now()).toDateString().toUpperCase()}</div>
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
                    <div className='today' onClick={() => this.setState({ date: new Date(Date.now()) })}>
                        Today
                    </div>
                    <Calendar
                        value={this.state.date}
                        onChange={(date) => this.setState({ date: date.getTime() })}
                        className='calendarComponent'
                    />
                </div>
            </div>
        )
    }

}
