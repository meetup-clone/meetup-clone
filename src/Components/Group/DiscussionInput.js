import React from 'react'
import dots from '../../Assets/dots.svg'
import avatar from '../../Assets/avatar-icon.svg'
import sendArrow from '../../Assets/send-arrow.svg'

export default function DiscussionInput(props) {
    return (
        <div className="discussionInputMain">
            <img src={props.user.image ? props.user.image : avatar} alt='profile' style={{height: 40, width: 40}} />
            <input maxlength="140" placeholder="Start a discussion..." />
            <img className="sendButton" src={sendArrow} />
        </div>
    )
}