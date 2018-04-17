import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'
import axios from "axios"
import GroupEventCard from './Group/GroupEventCard';
import PastEventCard from './Group/PastEventCard';
import DiscussionCard from './Group/DiscussionCard';
import DiscussionInput from './Group/DiscussionInput';
import AttendeeCard from './Events/AttendeeCard'
import Footer from './Footer'
import dots from '../Assets/dots.svg'
import bigRightArrow from '../Assets/bigRightArrow.svg'
import twitter from '../Assets/twitter.svg'


export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [{}],
            group: {},
            groupComments: [{}],
            members: [{}],
            attendees: [{}],
            user: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
        axios.get(`/api/groups/${this.props.match.params.group}`).then(res => {
            this.setState({
                events: res.data.events,
                group: res.data.group,
                groupComments: res.data.groupComments,
                members: res.data.members,
                attendees: res.data.attendees
            })
        })
    }

    render() {
        const { groupComments, events, members, attendees } = this.state;
        let firstEventAttendees = attendees.filter(obj => obj.event_id == this.state.events[0].event_id)
        const mappedGroupComments = groupComments.map((obj) => {
            return <DiscussionCard comment={obj.comment} userName={obj.username} avatar={obj.image} />
        })
        const mappedMembers = members.map((obj) => {
            return <AttendeeCard image={obj.image} username={obj.username} index={obj.member_id} />
        })
        const pastEvents = events.filter(obj => obj.start_date > Date.now()).map((obj) => {
            let mappedAttendees = attendees.filter(x => x.event_id === obj.event_id)
            return <PastEventCard attendees={mappedAttendees} startDate={obj.start_date} endDate={obj.end_date} eventName={obj.event_name} groupUrl={obj.url_name} groupUrl={this.state.group.url_name} eventId={obj.event_id} />
        })
        console.log(this.state)
        return (
            <div className='group'>
                <Header />
                <div className="groupCard">
                    <div className="groupImage" >
                        <img className="groupCardLogo" src={this.state.group.img} alt="logo" />
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
                                <img className="groupOrganizerAvatar" src={this.state.members[0].image} alt="avatar" />
                                <div className="innerOrganizerDiv">
                                    <p className="tinyText">Organizers</p>
                                    <p id="blackBold">{this.state.members[0].username}</p>
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
                    <div className="groupEventCardHolder">
                        <div className="descriptionSpacer">
                            <div className="eventsAttendeesTop">
                                <h2 style={{ fontSize: 20 }}>Next Meetup</h2>
                                <span>See All</span>
                            </div>
                        </div>
                        <GroupEventCard eventName={this.state.events[0].event_name}
                            eventDescription={this.state.events[0].event_description}
                            venueName={this.state.events[0].venue_name}
                            venueCity={this.state.events[0].venue_city}
                            venueAddress={this.state.events[0].venue_address}
                            groupUrl={this.state.group.url_name}
                            eventId={this.state.events[0].event_id}
                            startDate={this.state.events[0].start_date}
                            endDate={this.state.events[0].end_date}
                            hosted={this.state.events[0]}
                            attendees={firstEventAttendees}
                        />
                    </div>
                    <div className="aligner">
                        <div className="innerLeftAligner">
                            <div className="descriptionSpacer">
                                <div className="eventsAttendeesTop">
                                    <h2 style={{ fontSize: 20 }}>What We're About</h2>
                                </div>
                            </div>
                            <div className="groupDescription">
                                <div className="groupDescriptionDiv">
                                    <p>{this.state.group.description}</p>
                                </div>
                            </div>
                            <div className="descriptionSpacer">
                                <div className="eventsAttendeesTop" style={{ width: 600 }}>
                                    <h2 style={{ fontSize: 20 }}>Members (1,967)</h2>
                                    <span>See All</span>
                                </div>
                            </div>
                            <div className="groupOrganizerCard">
                                <img src={this.state.members[0].image} alt="organizer" />
                                <div className="innerOrganizerDiv">
                                    <p className="tinyText">Organizers</p>
                                    <p id="blackBold">{this.state.members[0].username}</p>
                                </div>
                                <div>
                                    <p>Messages</p>
                                </div>
                            </div>
                            <div className="memberCardHolder">
                                {mappedMembers.slice(1, 9)}
                            </div>
                            <div className="descriptionSpacer">
                                <div className="eventsAttendeesTop" style={{ width: 600 }}>
                                    <h2 style={{ fontSize: 20 }}>Discussions ({this.state.groupComments.length})</h2>
                                    <span>See All</span>
                                </div>
                            </div>
                            <div className="discussionCardHolder">
                                <DiscussionInput user={this.state.user} />
                                {mappedGroupComments.slice(0, 4)}
                            </div>
                            <div className="descriptionSpacer"></div>
                            <div className="descriptionSpacer">
                                <button className="socialHolder">
                                    <img style={{ height: 20, width: 20 }} src={twitter} alt="" />
                                    <p>Twitter</p>
                                </button>
                            </div>
                        </div>
                        {/* --------------------------------------------------------------------------------------- */}
                        <div className="innerRightAligner">
                            <div className="descriptionSpacer">
                                <div className="eventsAttendeesTop">
                                    <h2 style={{ fontSize: 20 }}>Upcoming Meetups</h2>
                                    <span>See All</span>
                                </div>
                                <div className="pastEventsHolder">
                                    {pastEvents.slice(1, 4)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -------------------------------------------------------------------------------------------- */}
                    <div className="groupEventCardHolder">
                        <div className="groupTagWrapper">
                            <div className="groupTagItem"><span>Internet Professionals</span></div>
                            <div className="groupTagItem"><p>Internet </p></div>
                            <div className="groupTagItem"><p>Internet bleh</p></div>
                            <div className="groupTagItem"><p>Internet blooo</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet eh</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet ahaa</p></div>
                            <div className="groupTagItem"><p>Internet asdffg</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet aa</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet </p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet asdf</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                            <div className="groupTagItem"><p>Internet Professionals</p></div>
                        </div>
                        <div className="descriptionSpacer">
                            <hr />
                        </div>
                        <div className="descriptionSpacer">
                            <div className="eventsAttendeesTop">
                                <h2 style={{ fontSize: 20 }}>More Meetups</h2>
                                <span>See All</span>
                            </div>
                        </div>
                        {/* <div className="bottomDiscussionHolder">
                            <PastEventCard
                                startDate={this.state.events.start_date}
                                endDate={this.state.events.end_date}
                                eventName={this.state.events.event_name}
                                groupUrl={this.state.group.url_name}
                            />
                            <PastEventCard
                                startDate={this.state.events.start_date}
                                endDate={this.state.events.end_date}
                                eventName={this.state.events.event_name}
                                groupUrl={this.state.group.url_name}
                            />
                            <PastEventCard
                                startDate={this.state.events.start_date}
                                endDate={this.state.events.end_date}
                                eventName={this.state.events.event_name}
                                groupUrl={this.state.group.url_name}
                            />
                        </div> */}
                        <div className="descriptionSpacer"></div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}
