import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'
import axios from "axios"
import GroupEventCard from './Group/GroupEventCard';

export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: {},
            group: {},
            groupComments: {},
            members: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.group)
        axios.get(`/api/groups/${this.props.match.params.group}`).then(res => {
            this.setState({
                events: res.data.events,
                group: res.data.group,
                groupComments: res.data.groupComments,
                members: res.data.members
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='group'>
                <Header />
                <div className="groupCard">
                <img className="groupImage" src={this.state.group.img} alt="logo"/>
                    <div className="groupInfo">
                        <h1>{this.state.group.group_name}</h1>
                        <p>{this.state.group.city}, {this.state.group.state}</p>
                        <p>members - {this.state.group.members}</p>
                        <p>organizer</p>
                        <div>
                            <button>Join us</button>
                            <button>...</button>
                            <button>right arrow</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="groupNavBar">
                        <li>Our Group</li>
                        <li>Meetups</li>
                        <li>Members</li>
                        <li>Photos</li>
                        <li>Discussions</li>
                        <li>More</li>
                    </ul>
                </div>
                <div className="grayBackground">
                    <GroupEventCard eventName={this.state.events.event_name}
                    eventDescription={this.state.events.event_description} 
                    venueName={this.state.events.venue_name} 
                    venueCity={this.state.events.venue_city} 
                    venueAddress={this.state.events.venue_address} 
                    groupUrl={this.state.group.url_name} 
                    eventId={this.state.events.event_id} 
                    startDate={this.state.events.start_date}
                    endDate={this.state.events.end_date}
                    />
                </div>
            </div>
        )
    }
}
