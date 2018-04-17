import React from 'react'
import dots from '../../Assets/dots.svg'

export default function EventComment(props) {
    return (
        <div className='discussionCard'>
            <div className="discussionCardMain">
                <div className="discussionCardTopWrapper">
                    <div className="discussionCardTop">
                        <img src={props.image} alt="img" />
                        <h5>{props.username}</h5>
                        <p>{props.date}</p>
                    </div>
                    <img className="threeDots" src={dots} alt="..." />
                </div>
                <h2>{props.comment}</h2>
                <div className="discussionCardBottom">
                    <div className="replyWrapper">
                        <h5>reply</h5>
                    </div>
                    <p># of likes</p>
                </div>
            </div>
        </div>
    )
}