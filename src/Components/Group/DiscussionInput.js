import React from 'react'
import avatar from '../../Assets/avatar-icon.svg'
import sendArrow from '../../Assets/send-arrow.svg'
import blueArrow from '../../Assets/blue-arrow.svg'

export default function DiscussionInput(props) {
    console.log(props.comment)
    return (
        <div className="discussionInputMain">
            <img src={props.user.image ? props.user.image : avatar} alt='profile' style={{ height: 40, width: 40, borderRadius: 50 }}/>
            <input maxLength="140" placeholder="Start a discussion..." onChange={e => props.typingComment(e)}/>
            { props.comment.length ?
            <img className="sendButton" src={blueArrow} alt="send button"/>
            :
            <img className="sendButton" src={sendArrow} alt="send button"/>
            }
        </div>
    )
}