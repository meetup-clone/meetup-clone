import React from 'react'
import dots from '../../Assets/dots.svg'
import avatarIcon from '../../Assets/avatar-icon.svg'

export default function DiscussionInput(props) {
    return (
<div className="discussionInputMain">
    <img style={{height: 40, width: 40}} src={avatarIcon}/>
    <input placeholder="Start a discussion..." />
</div>
    )
}