import React from 'react'

export default function AttendeeCard(props) {
    return (
        <div className='attendeeCard'>
            <img src={props.image} alt="img"/>
            <h4>{props.username}</h4>
            <h5>{props.index === 0 ? 'Organizer' : 'Member'}</h5>
        </div>
    )
}