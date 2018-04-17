import React from 'react'
import { Link } from 'react-router-dom'

export default function PastEventCard(props) {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var newDate = new Date(props.startDate);

    var dayOfWeek = days[newDate.getDay()];
    var month = months[newDate.getMonth()];
    var date = newDate.getDate();
    var fullYear = newDate.getFullYear()
    var time = newDate.toLocaleTimeString()
    var splicedTime = `${time.substring(0, time.length - 6)} ${time.substring(time.length - 3, time.length)}`

    return (
        <div className="miniEventMainDiv">
        <Link to={`/${props.groupUrl}/events/${props.eventId}`}>
            <div className="miniEventContainer">
                <div className="groupEventCardLeft">
                    <p>{date}</p>
                    <p>mon</p>
                </div>
                <div className="miniDateAndTitleDiv">
                    <p>{dayOfWeek}, {month} {date}, {fullYear}, {splicedTime}</p>
                    <h2>{props.eventName}</h2>
                </div>
            </div>
            <div style={{ width: 180, alignItems: "center", paddingLeft: 20 }} className="organizerWrapper">
                <img className="hostedAvatar" src="https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg" alt="avatar" />
                <p>hosted by Erin Valenti</p>
            </div>
            <div className="miniBottomDiv">
            <div className="miniGroupAvatarHolder">
                <ul>
                    <li style={{ backgroundImage: `url(https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg)` }}></li>
                    <li style={{ backgroundImage: `url(https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg)` }}></li>
                    <li style={{ backgroundImage: `url(https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg)` }}></li>
                    <li id="peopleGoing">3 going</li>
                </ul>
            </div>
            </div>
            </Link>
        </div>

    )
}