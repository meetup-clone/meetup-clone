import React from 'react'
import dots from '../../Assets/dots.svg'
import blueHeart from '../../Assets/blue-heart.svg'

export default function DiscussionCard(props) {
    return (
        <div className="discussionCardMain">
        <div className="discussionCardTopWrapper">
        <div className="discussionCardTop">
            <img src={props.avatar} alt=""/>
            <h5>{props.userName}</h5>
            <p> - date</p>
        </div>
        <img className="threeDots" src={dots} alt="..."/>
        </div>
        <h2>{props.comment}</h2>
        <div className="discussionCardBottom">
            <div className="replyWrapper">
            <h5>reply</h5>
            </div>
            <div className="likeHolder">
            <img style={{height: 15, width: 15}} src={blueHeart} alt="blue heart"/>
            <p>Like</p>
            </div>
        </div>
        </div>
    )
}