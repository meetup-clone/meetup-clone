import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'material-ui/DatePicker'
import './Schedule/Schedule.css'
import EventMap from './Events/EventMap'

export default class Schedule extends Component {
    constructor() {
        super()
        this.state = {
            groupName: '',
            groupURLName: '',
            event_name: '',
            startTimeInput: '19:00',
            startDate: new Date(Date.now()),
            endTimeInput: '21:00',
            endDate: new Date(Date.now()),
            venue_name: '',
            venueAddress: '',
            checkLocation: false,
            latitude: 0,
            longitude: 0,
            venue_directions: '',
            event_description: '',
            mapUpdate: true
        }
    }

    componentDidMount() {
        axios.get(`/api/groupName/${this.props.match.params.id}`).then(res => {
            this.setState({ groupName: res.data.group_name, groupURLName: res.data.url_name })
        })
    }

    createTime(timeInput, dateInput) {
        let stringDate = dateInput.toString()
        let correctTime = stringDate.replace('00:00', timeInput)
        let milliseconds = new Date(correctTime).getTime()
        return milliseconds
    }

    geocoder() {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.venueAddress}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`)
            .then(res => {
                this.setState({
                    latitude: res.data.results[0].geometry.location.lat,
                    longitude: res.data.results[0].geometry.location.lng,
                    venueAddress: res.data.results[0].formatted_address,
                    checkLocation: true,
                    mapUpdate: false
                })
            })
    }

    saveEvent() {
        const { event_name, event_description, venue_name, venueAddress,
                venue_directions, startTimeInput, endTimeInput, startDate,
                endDate, latitude, longitude, groupURLName } = this.state
        const { id } = this.props.match.params
        let venueSplit = venueAddress.split(', ')
        let venue_city = venueSplit[1]
        let venue_state = venueSplit[2].substr(0, 2)
        let venue_address = venueSplit[0]
        let start_date = this.createTime(startTimeInput, startDate)
        let end_date = this.createTime(endTimeInput, endDate)
    
        let obj = {
            group_id: id, event_name, event_description, venue_name,
            venue_city, venue_state, venue_address, venue_directions,
            start_date, end_date, latitude, longitude
        }
        axios.post('/api/createEvent', obj).then(res => {
            this.props.history.push(`/${groupURLName}/events/${res.data[0].event_id}`)
        })
    }

    render() {
        const { startTimeInput, endTimeInput, startDate, endDate, venueAddress, venue_name,
            checkLocation, latitude, longitude, mapUpdate } = this.state
        return (
            <div className='schedule'>
                <div className='scheduleContainer'>
                    <h1>Schedule a Meetup</h1>
                    <h4>{this.state.groupName}</h4>
                    <div className='meetupTitle'>
                        <h2>Meetup Title</h2>
                        <h5>Keep it short, clear, and descriptive.*</h5>
                        <input onChange={(e) => this.setState({ event_name: e.target.value })} required />
                    </div>
                    <div className='whenSection'>
                        <h2>When</h2>
                        <h5>Start time</h5>
                        <DatePicker value={startDate} locale='en-US' 
                                    onChange={(event, date) => this.setState({ startDate: date, endDate: date })} 
                                    id='startDate'
                                    autoOk={true}/>
                        <input value={startTimeInput} type='time' onChange={e => this.setState({ startTimeInput: e.target.value })} />
                        <h5>End time</h5>
                        <DatePicker value={endDate} locale='en-US' 
                                    onChange={(event, date) => this.setState({ endDate: date })} 
                                    id='endDate'
                                    autoOk={true}/>
                        <input value={endTimeInput} type='time' onChange={e => this.setState({ endTimeInput: e.target.value })} />
                        <h6>Recommended 2 hours</h6>
                    </div>
                    <div>
                        <h2>Where</h2>
                        {!checkLocation
                            ?
                            <div>
                                <h5>Venue Name</h5>
                                <input onChange={e => this.setState({ venue_name: e.target.value })} />
                                <h5>Venue Address</h5>
                                <input onChange={e => this.setState({ venueAddress: e.target.value })} />
                                <button onClick={() => this.geocoder()}>Check Location</button>
                            </div>
                            :
                            <div>
                                <div>
                                    <h5>{venue_name}</h5>
                                    <h6>{venueAddress}</h6>
                                    <EventMap latitude={+latitude} longitude={+longitude} mapUpdate={mapUpdate} />
                                    <h5>How to find us</h5>
                                    <input placeholder='e.g. Meet us at the red umbrella at the back' onChange={e => this.setState({ venue_directions: e.target.value })} />
                                </div>
                                <p onClick={() => this.setState({ checkLocation: false })}>Change</p>
                            </div>
                        }
                    </div>
                    <div>
                        <h2>What</h2>
                        <textarea onChange={e => this.setState({ event_description: e.target.value })} />
                    </div>
                    <div>
                        <button onClick={() => this.props.history.goBack()}>Cancel</button>
                        <button onClick={() => this.saveEvent()}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
