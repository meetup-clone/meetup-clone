import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'
import axios from "axios"
import GroupEventCard from './Group/GroupEventCard';
import PastEventCard from './Group/PastEventCard';
import DiscussionCard from './Group/DiscussionCard';
import AttendeeCard from './Events/AttendeeCard'
import Footer from './Footer'
import dots from '../Assets/dots.svg'
import bigRightArrow from '../Assets/bigRightArrow.svg'


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
                    <div>
                        <img className="groupImage" src={this.state.group.img} alt="logo" />
                    </div>
                    <div className="groupInfo">
                        <h1 style={{ marginTop: -10 }}>{this.state.group.group_name}</h1>
                        <div className="groupInfoHolder">
                            <div>
                                <p className="tinyText">Location</p>
                                <p id="blackBold">{this.state.group.city}, {this.state.group.state}</p>
                            </div>
                            <div>
                                <p className="tinyText">Members</p>
                                <p id="blackBold">{this.state.group.members}</p>
                            </div>
                            <div className="organizerWrapper">
                                <img className="groupOrganizerAvatar" src="https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg" alt="avatar" />
                                <div className="innerOrganizerDiv">
                                    <p className="tinyText">Organizers</p>
                                    <p id="blackBold">Erin Valenti</p>
                                </div>
                            </div>
                        </div>
                        <div className="groupButtonWrapper">
                            <button className="joinBtn">Join us</button>
                            <button className="whiteBtn"><img style={{ height: 10, width: 10 }} src={dots} alt="..." /></button>
                            <button className="whiteBtn"><img style={{ height: 15, width: 15 }} src={bigRightArrow} alt="big right arrow" /></button>
                        </div>
                    </div>
                </div>
                <div className="groupNavBarWrapper">
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
                    <div className="groupNavBarFiller"></div>
                </div>
                <div className="grayBackground">
                    <div className="aligner">
                        <div className="groupEventCardSpacer">
                            <div className="eventsAttendeesTop">
                                <h2 style={{ fontSize: 20 }}>Next Meetup</h2>
                                <span>See All</span>
                            </div>
                        </div>
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
                        <div className="descriptionSpacer"></div>
                        <div className="groupDescription">
                            <div className="groupDescriptionDiv">
                                <p>{this.state.group.description}</p>
                            </div>
                            <PastEventCard
                                startDate={this.state.events.start_date}
                                endDate={this.state.events.end_date}
                                eventName={this.state.events.event_name}
                                groupUrl={this.state.group.url_name}
                            />
                        </div>
                        <div className="descriptionSpacer">
                            <div className="eventsAttendeesTop" style={{width: 600}}>
                                <h2 style={{ fontSize: 20 }}>Members (1,967)</h2>
                                <span>See All</span>
                            </div>
                        </div>
                        <div className="groupOrganizerCard">
                            <img src="https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg" alt="organizer" />
                            <div className="innerOrganizerDiv">
                                <p className="tinyText">Organizers</p>
                                <p id="blackBold">Erin Valenti</p>
                            </div>
                            <div>
                                <p>Messages</p>
                            </div>
                        </div>
                        <div className="memberCardHolder">
                            <AttendeeCard />
                            <AttendeeCard />
                            <AttendeeCard />
                            <AttendeeCard />
                            <AttendeeCard />
                            <AttendeeCard />
                        </div>
                        <div className="descriptionSpacer">
                        <div className="eventsAttendeesTop" style={{width: 600}}>
                                <h2 style={{ fontSize: 20 }}>Discussions (4)</h2>
                                <span>See All</span>
                            </div>
                        </div>
                        <div className="discussionCardHolder">
                            <DiscussionCard />
                            <DiscussionCard />
                            <DiscussionCard />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
