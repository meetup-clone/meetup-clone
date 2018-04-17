import React, { Component } from 'react'
import './CalendarView.css'
import EventCard from './EventCard.js'
import Calendar from 'react-calendar'

export default class CalendarView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cat1: true,
            cat2: false,
            cat3: false,
            cat4: false,
            date: Date.now(),
            moreToggle: true,
            numToShow: 6
        }
        this.filterEvents = this.filterEvents.bind(this)
        this.listEvents = this.listEvents.bind(this)
        this.compareDate = this.compareDate.bind(this)
        this.convertTime = this.convertTime.bind(this)
        this.showMore = this.showMore.bind(this)
    }

    componentDidMount() {
        if (window.scrollY > 283) window.scrollTo(0, 283)
    }

    filterEvents() {
        const { cat1, cat2, cat3, cat4, numToShow, date } = this.state
        const { user, myEvents, myGroupEvents, allEvents } = this.props
        if (cat1) {
            let filteredEvents = allEvents.slice(0, numToShow).filter(e => {
                return e.start_date >= date
            })
            return filteredEvents
        }
        else if (cat2) {
            let filteredEvents = allEvents.slice(0, numToShow).filter(e => {
                return e.start_date >= date && e.categories.includes(user.category)
            })
            return filteredEvents
        }
        else if (cat3) {
            let filteredEvents = myGroupEvents.slice(0, numToShow).filter(e => {
                return e.start_date >= date
            })
            return filteredEvents
        }
        else if (cat4) {
            let filteredEvents = myEvents.slice(0, numToShow).filter(e => {
                return e.start_date >= date
            })
            return filteredEvents
        }
    }

    listEvents() {
        let events = this.filterEvents()
        if (events.length === 0) return null
        let list = []
        for (let i = 0; i < events.length; i++) {
            // BOTH ROUNDED
            if ((i === 0 || this.compareDate(events[i].start_date, events[i - 1].start_date)) 
            && (i === events.length - 1 || this.compareDate(events[i + 1].start_date, events[i].start_date))) {
                list.push(
                    <EventCard 
                        key={events[i].event_id + events[i].start_date + i}
                        event={events[i]}
                        date={true}
                        classStyle={'event start end'}
                        convertTime={this.convertTime}
                    />
                )
            }
            // STARTS ROUNDED
            else if (i === 0 || this.compareDate(events[i].start_date, events[i - 1].start_date)) {
                list.push(
                    <EventCard
                        key={events[i].event_id + events[i].start_date + i}
                        event={events[i]}
                        date={true}
                        classStyle={'event start'}
                        convertTime={this.convertTime}
                    />
                )
            }
            // ENDS ROUNDED
            else if (i === events.length - 1 || this.compareDate(events[i + 1].start_date, events[i].start_date)) {
                list.push(
                    <EventCard
                        key={events[i].event_id + events[i].start_date + i}
                        event={events[i]}
                        date={false}
                        classStyle={'event end'}
                        convertTime={this.convertTime}
                    />
                )
            }
            // MIDDLE (NEITHER ROUNDED)
            else {
                list.push(
                    <EventCard
                        key={events[i].event_id + events[i].start_date + i}
                        event={events[i]}
                        date={false}
                        classStyle={'event'}
                        convertTime={this.convertTime}
                    />
                )
            }
        }
        return list
    }

    compareDate(time1, time2) {
        let date1 = new Date(time1)
        let date2 = new Date(time2)
        date1 = date1.getFullYear() + '/' + (date1.getMonth() + 1) + '/' + date1.getDate()
        date2 = date2.getFullYear() + '/' + (date2.getMonth() + 1) + '/' + date2.getDate()
        return date1 > date2
    }

    convertTime(milliseconds) {
        let time = new Date(milliseconds)
        let newTime = time.toLocaleTimeString()
        return newTime.substr(0, newTime.length - 6) + newTime.substr(newTime.length - 3, newTime.length - 1)
    }

    showMore() {
        let num = this.state.numToShow + 6
        if (num > this.filterEvents().length) {
            this.setState({ moreToggle: false, numToShow: num })
        }
        else {
            this.setState({ numToShow: num })
        }
    }

    render() {
        const { moreToggle, cat1, cat2, cat3, cat4, date } = this.state
        return (
            <div className='calendarView'>
                <div className='leftCol'>
                    {this.listEvents()}
                    {moreToggle ?
                        <div className='showMore' onClick={() => this.showMore()}>
                            Show more
                        </div>
                        : null
                    }
                </div>
                <div className='rightCol'>
                    <div className='meetupCategories'>
                        <span
                            className={cat1 ? 'activeCategory' : null}
                            onClick={() => this.setState({ cat1: true, cat2: false, cat3: false, cat4: false })}
                        >
                            All Meetups
                                </span>
                        <span
                            className={cat2 ? 'activeCategory' : null}
                            onClick={() => this.setState({ cat1: false, cat2: true, cat3: false, cat4: false })}
                        >
                            My Meetups & suggestions
                                </span>
                        <span
                            className={cat3 ? 'activeCategory' : null}
                            onClick={() => this.setState({ cat1: false, cat2: false, cat3: true, cat4: false })}
                        >
                            My Meetups
                                </span>
                        <span
                            className={cat4 ? 'activeCategory' : null}
                            onClick={() => this.setState({ cat1: false, cat2: false, cat3: false, cat4: true })}
                        >
                            I'm Going
                                </span>
                    </div>
                    <div className='today' onClick={() => this.setState({ date: new Date(Date.now()) })}>
                        Today
                    </div>
                    <Calendar
                        value={new Date(date)}
                        onChange={(date) => this.setState({ date: date.getTime() })}
                        className='calendarComponent'
                    />
                </div>
            </div>
        )
    }

}
