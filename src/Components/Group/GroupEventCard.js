import React from 'react'
import {Link} from 'react-router-dom'


export default function GroupEventCard(props) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var newDate = new Date(props.startDate);

    var dayOfWeek = days[newDate.getDay()];
    var month = months[newDate.getMonth()];
    var date = newDate.getDate();
    var fullYear = newDate.getFullYear()
    var time = newDate.toLocaleTimeString()
    var splicedTime = `${time.substring(0, time.length - 6)} ${time.substring(time.length - 3, time.length)}`
    return(
        <div className="groupEventCard">
        <Link to={`/${props.groupUrl}/events/${props.eventId}`}>
        <div className="linkDiv">
        <div>
            <h3>short month</h3>
            <h3>{date}</h3>
        </div>
        <div>
            <p>{dayOfWeek}, {month} {date}, {fullYear}, {splicedTime}</p>
            <br /> 
            <h1>{props.eventName}</h1>
            <br />
            <h3>{props.eventDescription}</h3>
            <br />
            <p># of people going</p>
        </div>
        <div>
        <h3>{props.venueName}</h3>
        <p>{props.venueCity}</p>
        <p>{props.venueAddress}</p>
        </div>
        </div>
        </Link>
        </div>
    )
}