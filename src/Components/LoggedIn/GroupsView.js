import React from 'react'
import './GroupsView.css'

export default function GroupsView(props) {

    let groupsList = props.allGroups.map((e, i) => {
        return (
            <div className='groupCard'>
                <img src={e.img} alt={e.group_name} />
                <h4>{e.group_name}</h4>
                <span>{`We're ${e.members} Members`}</span>
            </div>
        )
    })
    return (
        <div className='groupsView'>
            {groupsList}
        </div>
    )
}
