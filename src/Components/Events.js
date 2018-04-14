import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import './Events/Events.css'
import facebook from '../Assets/facebook.svg'
import twitter from '../Assets/twitter.svg'
import bigRightArrow from '../Assets/bigRightArrow.svg'
import AttendeeCard from './Events/AttendeeCard'
import mapPin from '../Assets/mapPin.svg'
import Footer from './Footer'
import EventComment from './Events/EventComment'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default class Events extends Component {
    constructor() {
        super()

        this.state = {
            event: {},
            attendees: [{}],
            comments: []
        }
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        this.dateNumber = ''
        this.dateString = ''
        this.month = ''
        this.startTime = ''
        this.endTime = ''
    }

    componentDidMount() {
        axios.get(`/api/event/${this.props.match.params.event}`).then(res => {
            this.setState({ event: res.data[0] })
            let date = new Date(this.state.event.start_date)
            let today = date.getDay()
            let dateNumber = date.getDate()
            let month = date.getMonth()
            let fullYear = date.getFullYear()
            this.month = this.months[month]
            this.dateNumber = dateNumber
            this.dateString = `${this.days[today]}, ${this.months[month]} ${dateNumber}, ${fullYear}`
            this.startTime = ''
            this.endTime = ''
        })
        axios.get(`/api/attendees/${this.props.match.params.event}`).then(res => {
            this.setState({ attendees: res.data })
        })
        axios.get(`api/event/comments/${this.props.match.params.event}`).then(res => {
            console.log(res.data)
            this.setState({ comments: res.data})
        })


    }

    render() {
        // console.log(this.state, 'thisstate')
        const { start_date, end_date, event_description,
            event_name, venue_address, venue, city,
            venue_directions, venue_name, group_name } = this.state.event
        const { attendees, comments } = this.state

        const mappedAttendees = attendees.map((x, i) => {
            return <AttendeeCard key={x.attendees_id} index={i} image={x.image} username={x.username} />
        })

        const mappedComments = comments.map((x, i) => {
            return <EventComment />
        })

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: 40.760654, lng: -111.891096 }}
            >
                <Marker
                    position={{ lat: 40.760654, lng: -111.891096 }}
                />
            </GoogleMap>
        ))
        return (
            <div>
                <Header />
                <div className='events'>
                    <div className='eventsTopSection'>
                        <div style={{ display: 'flex' }}>
                            <div className='eventCardDate' id='eventDateIcon'>
                                <p>{this.dateNumber}</p>
                                <p>{this.month}</p>
                            </div>
                            <div className='eventsTopContent'>
                                <h4>{this.dateString}</h4>
                                <h2>{event_name}</h2>
                                <div className='eventsTopImageContent'>
                                    <img className='eventCardAvatar' id='organizerAvatar' src={attendees[0].image} alt="img" />
                                    <div>
                                        <h5>Hosted by <span>{attendees[0].username}</span></h5>
                                        <h5>From <span>{group_name}</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='eventsTopGoing'>
                            <h3>Are you going? <span>{`${attendees.length} people going`}</span></h3>
                            <div className='eventsGoingBtns'>
                                <button>✔</button>
                                <button>X</button>
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
                            </div>

                        </section>
                        <section className='eventsMap'>
                            <div className='eventsTimeHolder'>
                                <img src={mapPin} alt="img"/>
                                <div>
                                    <h5>{this.dateString}</h5>
                                    <h5></h5>
                                </div>
                            </div>
                            <div>
                                map below
                            </div>
                            <MapWithAMarker
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `212px` }} />}
                            />
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
// group_name: UtahJS
// end_date:1523502000000
// event_description:"6:30 – 7:30 JS Learners Meetup"
// event_id:3
// event_name:"UtahJS SLC Meetup"
// group_id:1
// start_date:1523494800000
// venue_address:"1930 S. State St"
// venue_city:"Salt Lake City"
// venue_directions:"Southwest end of O.C. Tanner Campus"
// venue_name:"O.C. Tanner Event Center"
// venue_state:"UT"