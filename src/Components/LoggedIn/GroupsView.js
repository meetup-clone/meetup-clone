import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GroupsView.css'

export default class GroupsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
            numToShow: 3
        }
        this.groupsList = this.groupsList.bind(this)
    }

    groupsList(groups) {
        return groups.map((e, i) => {
            return (
                <Link to={`/${e.url_name}`} key={e.group_id + e.group_name + i}>
                    <div className='groupCard'>
                        {e.img ?
                            <img src={e.img} alt={e.group_name} size='' />
                            : null
                        }
                        <div className='groupCardText'>
                            <h3>{e.group_name}</h3>
                            <p>{`We're ${e.members} Members`}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    render() {


        return (
            <div className='groupsView'>
                <div className='groupsViewContainer'>
                    {this.props.myGroups.length ?
                        <div>
                            <h4>YOUR MEETUPS</h4>
                            <div className='groupCardContainer'>
                                {this.groupsList(this.props.myGroups)}
                            </div>
                        </div>
                        : null
                    }
                    <h4>SUGGESTED MEETUPS</h4>
                    <div className='groupCardContainer'>
                        {this.state.showMore ? this.groupsList(this.props.allGroups)
                            : this.groupsList(this.props.allGroups.slice(0, this.state.numToShow))
                        }
                    </div>
                    <div 
                        className='showMore' 
                        onClick={() => this.setState({ showMore: true, numToShow: this.state.numToShow + 3 })}
                    >
                        Show more
                    </div>
                </div>
            </div>
        )
    }
}
