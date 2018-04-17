import React from 'react'
import { Link } from 'react-router-dom'

export default function EventCard(props) {
    const { event, index, date, classStyle, convertTime } = props
    return (
        <div key={event.event_name + index + event.event_id + event.start_date}>
            {date ?
                <div className='eventDate'>{new Date(event.start_date).toDateString().toUpperCase()}</div>
                : null
            }
            <div className={classStyle}>
                <div className='eventListCard'>
                    <div className='eventTime'>
                        {convertTime(event.start_date)}
                    </div>
                    <div className='eventDetails'>
                        <Link to={`/${event.url_name}`}>
                            <span className='groupName'>{(event.group_name).toUpperCase()}</span>
                        </Link>
                        <Link to={`/${event.url_name}/events/${event.event_id}`}>
                            <span className='eventName'>{event.event_name}</span>
                        </Link>
                        <span className='attendees'>{`${event.attendees} Members going`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
