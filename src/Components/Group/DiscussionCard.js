import React from 'react'
import dots from '../../Assets/dots.svg'
import blueHeart from '../../Assets/blue-heart.svg'

export default function DiscussionCard(props) {
    return (
        <div className="discussionCardMain">
        <div className="discussionCardTopWrapper">
        <div className="discussionCardTop">
            <img src="https://secure.meetupstatic.com/photos/member/c/9/3/0/thumb_274911504.jpeg" alt=""/>
            <h5>Don Bogardus</h5>
            <p> - date</p>
        </div>
        <img className="threeDots" src={dots} alt="..."/>
        </div>
        <h2>this is a comment that is vey long and should take up a lot of space and whatnot.</h2>
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