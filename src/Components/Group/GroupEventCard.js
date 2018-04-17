import React from 'react'
import { Link } from 'react-router-dom'
import mapPin from '../../Assets/mapPin.svg'
import avatar from '../../Assets/avatar-icon.svg'


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

    var groupMappedList = props.attendees.map(obj => {
        let avatarImage = { avatar }
        obj.image ? avatarImage = obj.image : avatarImage = { avatar };
        return <li style={{ backgroundImage: `url(${avatarImage})` }}></li>
    })
    return (
        <div className="groupEventCard">
            <Link to={`/${props.groupUrl}/events/${props.eventId}`}>
                <div className="linkDiv">
                    <div style={{ padding: 20 }}>
                        <div className="groupEventCardLeft">
                            <p>{date}</p>
                            <p>mon</p>
                        </div>
                    </div>
                    <div className="mainGroupEventCardContent">
                        <div className="dateAndTitleDiv">
                            <p>{dayOfWeek}, {month} {date}, {fullYear}, {splicedTime}</p>
                            <h1>{props.eventName}</h1>
                        </div>
                        <div style={{ alignItems: "center" }} className="organizerWrapper">
                            <img className="hostedAvatar" src={props.attendees[0].image ? props.attendees[0].image : avatar} alt="avatar" />
                            <p>hosted by {props.attendees[0].username}</p>
                        </div>
                        <p id="blackP">{props.eventDescription}</p>
                        <div className="groupAvatarHolder">
                            <ul>
                                {groupMappedList.slice(0, 6)}
                                <li id="peopleGoing">{props.attendees.length} going</li>
                            </ul>
                        </div>
                    </div>
                    <div className="groupEventCardRight">
                        <button onCLick={() => props.attendEvent()}>Attend</button>
                        <div className="organizerWrapper" style={{ width: '100%', paddingTop: 25 }}>
                            <img style={{ height: 25, width: 25 }} src={mapPin} alt="" />
                            <div className="groupAddress">
                                <p id="blackBold">{props.venueName}</p>
                                <p>{props.venueAddress} - {props.venueCity}, UT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}