import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'
import axios from "axios"
import GroupEventCard from './Group/GroupEventCard';
import PastEventCard from './Group/PastEventCard';
import DiscussionCard from './Group/DiscussionCard';
import DiscussionInput from './Group/DiscussionInput';
import MeetupsTab from './Group/MeetupsTab';
import AttendeeCard from './Events/AttendeeCard'
import Footer from './Footer'
import dots from '../Assets/dots.svg'
import bigRightArrow from '../Assets/bigRightArrow.svg'
import twitter from '../Assets/twitter.svg'
import defaultImage from '../Assets/default-image.png'
import cirlceCalendar from '../Assets/circle-calendar.svg'
import downArrow from '../Assets/darkgray-down-arrow.svg'


export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [{}],
            group: {},
            groupComments: [{}],
            newComment: "",
            members: [{}],
            attendees: [{}],
            user: {},
            meetupToggle: true,
            meetupTimeToggle: false
        }
        this.typingComment = this.typingComment.bind(this);
        this.postDiscussion = this.postDiscussion.bind(this);
        this.attendEvent = this.attendEvent.bind(this);
        this.cancelGroup = this.cancelGroup.bind(this);
        this.joinGroup = this.joinGroup.bind(this);
        this.toggleFuture = this.toggleFuture.bind(this);
        this.togglePast = this.togglePast.bind(this);
        this.monthsAbbrv = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
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

    joinGroup() {
        const { members, user } = this.state
        for (let i = 0; i < members.length; i++) {
            if (members[i].user_id === user.user_id) {
                return
            }
        }
        axios.post('/api/joingroup', { groupId: this.state.group.group_id }).then(res => {
            this.setState({ members: res.data })
        })
    }

    attendEvent(e) {
        const { attendees, user } = this.state
        for (let i = 0; i < attendees.length; i++) {
            if (attendees[i].user_id === user.user_id) {
                return
            }
        }
        axios.post('/api/attendevent', { eventId: e }).then(res => {
            this.setState({ attendees: res.data })
        })
    }

    cancelGroup() {
        axios.delete(`/api/cancelGroup/${this.state.group.group_id}`).then(res => {
            this.setState({ members: res.data })
        })
    }

    typingComment(e) {
        this.setState({ newComment: e.target.value })
    }

    postDiscussion() {
        let date = new Date(Date.now())
        let month = date.getMonth()
        let today = date.getDate()
        let currentMonth = this.monthsAbbrv[month]
        let monthAbb = currentMonth.toLowerCase()
        let monthFinal = monthAbb.replace(monthAbb[0], monthAbb[0].toUpperCase())
        let day = monthFinal + ' ' + today

        axios.post('/api/postdiscussion', {
            user_id: this.state.user.user_id,
            comment: this.state.newComment,
            group_id: this.state.group.group_id,
            date: day
        }).then(res => {
            this.setState({ groupComments: res.data, newComment: "" })
        })

    }

    toggleToGroup() {
        this.setState({
            meetupToggle: true
        })
    }
    toggleToMeetups() {
        this.setState({
            meetupToggle: false
        })
    }
    togglePast() {
        this.setState({
            meetupTimeToggle: true
        })
    }
    toggleFuture() {
        this.setState({
            meetupTimeToggle: false
        })
    }

    render() {
        const { groupComments, events, members, attendees } = this.state;
        let firstEventAttendees = attendees.filter(obj => obj.event_id === this.state.events[0].event_id)
        const mappedGroupComments = groupComments.map((obj, i) => {
            return <DiscussionCard key={i} date={obj.date} comment={obj.comment} userName={obj.username} avatar={obj.image} />
        })
        const mappedMembers = members.map((obj, i) => {
            return <AttendeeCard key={i} image={obj.image} username={obj.username} index={obj.member_id} />
        })
        const pastEvents = events.filter(obj => obj.start_date > Date.now()).map((obj, i) => {
            let mappedAttendees = attendees.filter(x => x.event_id === obj.event_id)
            return <PastEventCard key={i} attendees={mappedAttendees} startDate={obj.start_date} endDate={obj.end_date} eventName={obj.event_name} groupUrl={this.state.group.url_name} eventId={obj.event_id} />
        })
        return (
            <div className='group'>
                <Header />
                <div className="groupCard">
                    <div className="groupImage" >
                        {this.state.group.img ?
                            <img className="groupCardLogo" src={this.state.group.img} alt="logo" /> : <img className="groupCardLogo" src={defaultImage} alt="logo" />}
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
                            {this.state.members.filter(obj => obj.user_id === this.state.user.user_id).length > 0 ?
                                this.state.members[0].user_id === this.state.user.user_id ?
                                    <div className="toggleGroupButtonWrapper">
                                        <button onClick={() => this.joinGroup()} className="joinBtn">Schedule</button>
                                        <button className="whiteBtn"><img style={{ height: 10, width: 10 }} src={dots} alt="..." /></button>
                                    </div>
                                    :
                                    <button onClick={() => this.cancelGroup()} className="memberBtn">You're a member   <img src={downArrow} alt="arrow" /></button>
                                :
                                <div className="toggleGroupButtonWrapper">
                                    <button onClick={() => this.joinGroup()} className="joinBtn">Join us</button>
                                    <button className="whiteBtn"><img style={{ height: 10, width: 10 }} src={dots} alt="..." /></button>
                                </div>}
                            <button className="whiteBtn"><img style={{ height: 15, width: 15 }} src={bigRightArrow} alt="big right arrow" /></button>
                        </div>
                    </div>
                </div>
                <div className="groupNavBarWrapper">
                    <div>
                        <ul className="groupNavBar">
                            {this.state.meetupToggle ?
                                <div style={{ width: 175 }} className="flexBetween">
                                    <li style={{ color: "#00a2c7" }} onClick={() => this.toggleToGroup()}>Our Group</li>
                                    <li onClick={() => this.toggleToMeetups()} >Meetups</li></div>
                                :
                                <div style={{ width: 175 }} className="flexBetween">
                                    <li onClick={() => this.toggleToGroup()}>Our Group</li>
                                    <li style={{ color: "#00a2c7" }} onClick={() => this.toggleToMeetups()} >Meetups</li>
                                </div>}
                            <li>Members</li>
                            <li>Photos</li>
                            <li>Discussions</li>
                            <li>More</li>
                        </ul>
                    </div>
                    <div className="groupNavBarFiller"></div>
                </div>
                <div className="grayBackground">
                    {this.state.meetupToggle ?
                        <div>
                            <div className="groupEventCardHolder">
                                <div className="descriptionSpacer">
                                    <div className="eventsAttendeesTop">
                                        <h2 style={{ fontSize: 20 }}>Next Meetup</h2>
                                        <span>See All</span>
                                    </div>
                                </div>
                                {this.state.events.length > 0 ?
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
                                        attendEvent={this.attendEvent}
                                        cancelAttend={this.cancelAttend}
                                    />
                                    :
                                    <div className="groupEventCardPlaceholder">
                                        <div className="noMeetupDiv">
                                            <img style={{ height: 75, width: 75 }} src={cirlceCalendar} alt="calendar" />
                                            <h3>No Upcoming Meetups</h3>
                                        </div>
                                    </div>}
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
                                        <DiscussionInput comment={this.state.newComment} user={this.state.user} postDiscussion={this.postDiscussion} typingComment={this.typingComment} />
                                        {mappedGroupComments.slice((mappedGroupComments.length - 4), mappedGroupComments.length)}
                                    </div>
                                    <div className="descriptionSpacer">
                                    <div className="eventsAttendeesTop">
                                        <p>Find us also at</p>
                                    </div>
                                </div>
                                    <div style={{paddingTop: 0}} className="descriptionSpacer">
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
                                        {pastEvents.length < 1 ?
                                            <div className="miniGroupEventCardPlaceholder">
                                                <div className="noMeetupDiv">
                                                    <img style={{ height: 75, width: 75 }} src={cirlceCalendar} alt="calendar" />
                                                    <h3>No Upcoming Meetups</h3>
                                                </div>
                                            </div>
                                            :
                                            <div className="pastEventsHolder">
                                                {pastEvents.slice(1, 4)}
                                            </div>}
                                    </div>
                                </div>
                            </div>
                            {/* -------------------------------------------------------------------------------------------- */}
                            <div className="descriptionSpacer">
                                    <div className="eventsAttendeesTop">
                                        <p>Related topics</p>
                                    </div>
                                </div>
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
                                <div className="descriptionSpacerTopBorder">
                                </div>
                                <div className="descriptionSpacer">
                                    <div className="eventsAttendeesTop">
                                        <h2 style={{ fontSize: 20 }}>More Meetups</h2>
                                        <span>See All</span>
                                    </div>
                                </div>
                                <div className="bottomDiscussionHolder">
                                    <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />
                                    <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />                        <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />
                                </div>
                                <div className="descriptionSpacer"></div>
                            </div>
                        </div>
                        :
                        <div className="groupEventCardHolder">
                            <MeetupsTab togglePast={this.togglePast} toggleFuture={this.toggleFuture} meetupTimeToggle={this.state.meetupTimeToggle} events={this.state.events} groupUrl={this.state.group.url_name} attendees={this.state.attendees} />
                            <div className="bottomDiscussionHolder">
                                    <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />
                                    <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />                        <PastEventCard
                                        startDate={1527685200000}
                                        endDate={1527692400000}
                                        eventName={"FreeCodeCamp - Study Group"}
                                        groupUrl={"UtahJS"}
                                        attendees={this.state.attendees}
                                    />
                                </div>
                                <div className="descriptionSpacer"></div>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}
