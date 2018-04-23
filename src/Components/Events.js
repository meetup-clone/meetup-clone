import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'
import './Events/Events.css'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'
import bigRightArrow from '../Assets/bigRightArrow.svg'
import AttendeeCard from './Events/AttendeeCard'
import CommentInput from './Events/CommentInput'
import EventComment from './Events/EventComment'
import clock from '../Assets/clock.svg'
import mapPin from '../Assets/mapPin.svg'
import calendar from '../Assets/white-calendar.svg'
import EventMap from './Events/EventMap'
import Footer from './Footer'

export default class Events extends Component {
    constructor() {
        super()

        this.state = {
            event: {},
            mapUpdate: true,
            attendees: [{}],
            commentInput: '',
            comments: [],
            currentUser: {},
            scrollCheck: false
        }
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.monthsAbbrv = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
        this.dateNumber = ''
        this.dateString = ''
        this.month = ''
        this.startTime = ''
        this.endTime = ''
        this.attendEvent = this.attendEvent.bind(this)
        this.cancelAttend = this.cancelAttend.bind(this)
        this.postComment = this.postComment.bind(this)
        this.typingComment = this.typingComment.bind(this)
        this.scrollToggle = this.scrollToggle.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get(`/api/event/${this.props.match.params.event}`).then(res => {
            this.setState({ event: res.data[0], mapUpdate: false })
            let date = new Date(this.state.event.start_date)
            let endDate = new Date(this.state.event.end_date)
            let today = date.getDay()
            let dateNumber = date.getDate()
            let month = date.getMonth()
            let fullYear = date.getFullYear()
            let startTime = date.toLocaleTimeString()
            let endTime = endDate.toLocaleTimeString()
            this.month = this.months[month]
            this.monthAbbrv = this.monthsAbbrv[month]
            this.dateNumber = dateNumber
            this.dateString = `${this.days[today]}, ${this.months[month]} ${dateNumber}, ${fullYear}`
            this.startTime = startTime.substr(0, startTime.length - 6) + startTime.substr(startTime.length - 3, startTime.length - 1)
            this.endTime = endTime.substr(0, endTime.length - 6) + endTime.substr(endTime.length - 3, endTime.length - 1)
        })
        axios.get(`/api/attendees/${this.props.match.params.event}`).then(res => {
            this.setState({ attendees: res.data })
        })
        axios.get(`/api/event/comments/${this.props.match.params.event}`).then(res => {
            this.setState({ comments: res.data })
        })
        axios.get('/auth/me').then(res => {
            this.setState({ currentUser: res.data })
        })
    }

    attendEvent() {
        const { attendees, currentUser } = this.state
        for (let i = 0; i < attendees.length; i++) {
            if (attendees[i].user_id === currentUser.user_id) {
                return
            }
        }
        axios.post('/api/attendevent', { eventId: this.props.match.params.event }).then(res => {
            this.setState({ attendees: res.data })
        })
    }

    cancelAttend() {
        axios.delete(`/api/cancelattend/${this.props.match.params.event}`).then(res => {
            this.setState({ attendees: res.data })
        })
    }

    postComment() {
        let date = new Date(Date.now())
        let month = date.getMonth()
        let today = date.getDate()
        let currentMonth = this.monthsAbbrv[month]
        let monthAbb = currentMonth.toLowerCase()
        let monthFinal = monthAbb.replace(monthAbb[0], monthAbb[0].toUpperCase())
        let day = monthFinal + ' ' + today

        axios.post('/api/postcomment', {
            user_id: this.state.currentUser.user_id,
            comment: this.state.commentInput,
            event_id: this.props.match.params.event,
            date: day
        }).then(res => {
            this.setState({ comments: res.data, commentInput: '' })
        })

    }

    typingComment(e) {
        this.setState({ commentInput: e.target.value })
    }

    scrollToggle() {
        if (window.pageYOffset > 263) {
            this.setState({ scrollCheck: true })
        }
        else {
            this.setState({ scrollCheck: false })
        }
    }

    render() {
        const { event_description, event_name, venue_address,
            venue_city, venue_directions, venue_name,
            group_name, url_name, latitude, longitude } = this.state.event
        const { attendees, comments, currentUser, commentInput, mapUpdate, scrollCheck } = this.state

        let eightAttendees = attendees.slice(0, 8)
        const mappedAttendees = eightAttendees.map((x, i) => {
            return <AttendeeCard key={x.user_id + i * 2} index={i} image={x.image} username={x.username} />
        })

        const mappedComments = comments.map((x, i) => {
            return <EventComment key={x.comment_id} comment={x.comment} date={x.date} image={x.image} username={x.username} />
        })

        window.onscroll = this.scrollToggle
        return (
            <div>
                <Header />
                <div className='events'>
                    <div className='eventsTopSection'>
                        <div style={{ display: 'flex' }}>
                            <div className='eventCardDate' id='eventDateIcon'>
                                <p>{this.dateNumber}</p>
                                <p>{this.monthAbbrv}</p>
                            </div>
                            <div className='eventsTopContent'>
                                <h4 className='eventDateString'>{this.dateString}</h4>
                                <h2>{event_name}</h2>
                                <div className='eventsTopImageContent'>
                                    <img className='eventCardAvatar' id='organizerAvatar' src={attendees.length ? attendees[0].image : null} alt="img" />
                                    <div>
                                        <h5>Hosted by <span>{attendees.length ? attendees[0].username : null}</span></h5>
                                        <Link to={`/${url_name}`}><h5>From <span>{group_name}</span></h5></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='eventsTopGoing'>
                            <h3>Are you going? <span>{`${attendees.length} people going`}</span></h3>
                            <div className='eventsGoingBtns'>
                                <button onClick={() => this.attendEvent()}>✔</button>
                                <button onClick={() => this.cancelAttend()}>X</button>
                            </div>
                            <div className='eventsSocialHolder'>
                                <img src={facebook} alt="img" />
                                <h4>Share</h4>
                                <img src={twitter} alt="img" />
                                <h4>Tweet</h4>
                                <img src={bigRightArrow} alt="img" />
                                <h4>Invite</h4>
                            </div>
                        </div>
                    </div>

                    {/* ---------------------------------------------------- */}

                        <section className={scrollCheck ? 'eventsHiddenMenu eventsHiddenToggle' : 'eventsHiddenMenu'}>
                            <div className='hiddenContainer'>
                                <div className='hiddenContentHolder'>
                                    <div className='eventCardDate' id='eventDateIcon'>
                                        <p>{this.dateNumber}</p>
                                        <p>{this.monthAbbrv}</p>
                                    </div>
                                    <div>
                                        <h4 className='eventDateString' id='dateString'>{this.dateString}</h4>
                                        <h3>{event_name}</h3>
                                    </div>
                                </div>
                                <div className='eventsGoingBtns' id='hiddenBtns'>
                                    <button onClick={() => this.attendEvent()}>✔</button>
                                    <button onClick={() => this.cancelAttend()}>X</button>
                                </div>
                            </div>
                        </section>

                    <div className='eventsBody'>
                        <section className='eventsBodyContent'>
                            <div className='eventsDetails'>
                                <h2>Details</h2>
                                <h3>{event_description}</h3>
                            </div>
                            <div className='eventsAttendees'>
                                <div className='eventsAttendeesTop'>
                                    <h2>{`Attendees (${attendees.length})`}</h2>
                                    <span>See all</span>
                                </div>
                                <div className='attendeesCards'>
                                    {mappedAttendees}
                                </div>
                            </div>
                            <div className='eventsComments'>
                                <h2>Comments</h2>
                                <CommentInput image={currentUser.image} comment={commentInput} postComment={this.postComment} typingComment={this.typingComment} />
                                <div>
                                    {mappedComments}
                                </div>
                            </div>
                            <Link to={`/${group_name}`}><div className='eventsSeeMeetups'>
                                <div><img src={calendar} alt="img" /></div>
                                <section>
                                    <h4>See all meetups from</h4>
                                    <h3>UtahJS</h3>
                                </section>
                            </div></Link>
                        </section>

                        <section className='eventsSticky'>
                            <section className={scrollCheck ? 'eventsMap eventsMapToggle' : 'eventsMap'}>
                                <div className='eventsTimeHolder'>
                                    <img src={clock} alt="img" />
                                    <div>
                                        <h5>{this.dateString}</h5>
                                        <h5>{this.startTime} to {this.endTime}</h5>
                                        <h4>Add to Calendar</h4>
                                    </div>
                                </div>
                                <div className='eventsTimeHolder'>
                                    <img src={mapPin} alt="img" />
                                    <div>
                                        <h5>{venue_name}</h5>
                                        <h6>{venue_address}<span>᛫</span>{venue_city}</h6>
                                        <h6>{venue_directions}</h6>
                                    </div>
                                </div>
                                <EventMap latitude={+latitude} longitude={+longitude} mapUpdate={mapUpdate} />
                            </section>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}