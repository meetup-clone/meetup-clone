import React from 'react'
import { Link } from 'react-router-dom'
import GroupEventCard from './GroupEventCard';


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
            <div>
                <span onClick={() => props.toggleFuture()}>Coming Events</span>
                <span onClick={() => props.togglePast()}>Past Events</span>
            </div>
            {props.meetupTimeToggle ?
                <div className="toggleDiv">
                    <div className="eventsAttendeesTop">
                        <h2 style={{ fontSize: 20 }}>Past Meetups</h2>
                        <span>See All</span>
                    </div>
                    {mappedPastGroupEventCards}
                </div>
                :
                <div className="toggleDiv">
                    <div className="eventsAttendeesTop">
                        <h2 style={{ fontSize: 20 }}>Coming Meetups</h2>
                        <span>See All</span>
                    </div>
                    {mappedComingGroupEventCards}
                </div>}
            <div className="descriptionSpacer"></div>
        </div>
    )
}