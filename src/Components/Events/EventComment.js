import React from 'react'
import dots from '../../Assets/dots.svg'

export default function EventComment(props) {
    return (
        <div className='discussionCard'>
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
            <p># of replies</p>
            <h5>reply</h5>
            </div>
            <p># of likes</p>
        </div>
        </div>
        </div>
    )
}