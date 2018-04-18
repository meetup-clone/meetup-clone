import React from 'react'
import avatar from '../../Assets/avatar-icon.svg'
import sendArrow from '../../Assets/send-arrow.svg'
import blueArrow from '../../Assets/blue-arrow.svg'

export default function CommentInput(props) {
    return (
        <div className="discussionInputMain">
            <img src={props.image ? props.image : avatar} alt='profile' style={{ height: 40, width: 40, borderRadius: 50 }} />
            <input maxLength="140" value={props.comment} placeholder="Leave a comment..." onChange={e => props.typingComment(e)} />
            {props.comment.length ?
                <img className="sendButton" src={blueArrow} alt="send button" onClick={() => props.postComment()} />
                :
                <img className="sendButton" src={sendArrow} alt="send button" />
            }
        </div>
    )
}