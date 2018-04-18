import React from 'react'
import { Link } from 'react-router-dom'
import GroupEventCard from './GroupEventCard';
import cirlceCalendar from '../../Assets/circle-calendar.svg'
import blueCalendar from '../../Assets/blue-calendar.svg'


export default function MeetupsTab(props) {

    const mappedComingGroupEventCards = props.events.filter(obj => obj.start_date > Date.now()).map(obj => {
        let mappedAttendees = props.attendees.filter(x => x.event_id === obj.event_id)
        return <GroupEventCard eventName={obj.event_name}
            eventDescription={obj.event_description}
            venueName={obj.venue_name}
            venueCity={obj.venue_city}
            venueAddress={obj.venue_address}
            groupUrl={props.groupUrl}
            eventId={obj.event_id}
            startDate={obj.start_date}
            endDate={obj.end_date}
            hosted={obj}
            attendees={mappedAttendees} />
    })
    const mappedPastGroupEventCards = props.events.filter(obj => obj.start_date < Date.now()).map(obj => {
        let mappedAttendees = props.attendees.filter(x => x.event_id === obj.event_id)
        return <GroupEventCard eventName={obj.event_name}
            eventDescription={obj.event_description}
            venueName={obj.venue_name}
            venueCity={obj.venue_city}
            venueAddress={obj.venue_address}
            groupUrl={props.groupUrl}
            eventId={obj.event_id}
            startDate={obj.start_date}
            endDate={obj.end_date}
            hosted={obj}
            attendees={mappedAttendees} />
    })
    return (
        <div className="meetupTabMain">
            {props.meetupTimeToggle ?
                <div className="eventsAttendeesTop">
                    <div className="meetupTabNav">
                        <div className="notSelectedTab"><h3 onClick={() => props.toggleFuture()}>Upcoming</h3></div>
                        <div className="selectedTab" ><h3 onClick={() => props.togglePast()}>Past</h3></div>
                    </div>
                    <Link to='/home'><div className="meetupCalendarHolder">
                        <img style={{ height: 18, width: 18 }} src={blueCalendar} alt="calendar" />
                        <span>Calendar</span>
                    </div></Link>
                </div>
                :
                <div className="eventsAttendeesTop">
                    <div className="meetupTabNav">
                        <div className="selectedTab"><h3 onClick={() => props.toggleFuture()}>Upcoming</h3></div>
                        <div className="notSelectedTab" ><h3 onClick={() => props.togglePast()}>Past</h3></div>
                    </div>
                    <Link to='/home'><div className="meetupCalendarHolder">
                        <img style={{ height: 18, width: 18 }} src={blueCalendar} alt="calendar" />
                        <span>Calendar</span>
                    </div></Link>
                </div>}
            {props.meetupTimeToggle ?
                <div className="toggleDiv">
                    {mappedPastGroupEventCards.length < 1 ?
                        <div className="groupEventCardPlaceholder">
                            <div className="noMeetupDiv">
                                <img style={{ height: 75, width: 75 }} src={cirlceCalendar} alt="calendar" />
                                <h3>No Past Meetups</h3>
                            </div>
                        </div>
                        :
                        <div>
                            {mappedPastGroupEventCards}
                        </div>}
                </div>
                :
                <div className="toggleDiv">
                    {mappedComingGroupEventCards.length < 1 ?
                        <div className="groupEventCardPlaceholder">
                            <div className="noMeetupDiv">
                                <img style={{ height: 75, width: 75 }} src={cirlceCalendar} alt="calendar" />
                                <h3>No Upcoming Meetups</h3>
                            </div>
                        </div>
                        :
                        <div>
                            {mappedComingGroupEventCards}
                        </div>}
                </div>}
            <div className="descriptionSpacer"></div>
            <div className="descriptionSpacerTopBorder"></div>
            <div className="descriptionSpacer">
                <div className="eventsAttendeesTop">
                    <h2 style={{ fontSize: 20 }}>More Meetups</h2>
                    <span>See All</span>
                </div>
            </div>
        </div>
    )
}