import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'
import axios from "axios"

export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: {},
            group: {},
            groupComments: {},
            members: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.group)
        axios.get(`/api/groups/${this.props.match.group}`).then(res => {
            this.setState({
                events: res.data.events,
                group: res.data.group,
                groupComments: res.data.groupComments,
                members: res.data.members
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className='group'>
                <Header />
                <div className="groupCard">
                <img className="groupImage" src={this.state.group.img} alt="logo"/>
                    <div className="groupInfo">
                        <h1>{this.state.group.group_name}</h1>
                        <p>{this.state.group.city}, {this.state.group.state}</p>
                        <p>members - {this.state.group.members}</p>
                        <p>organizer</p>
                        <div>
                            <button>Join us</button>
                            <button>...</button>
                            <button>right arrow</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="groupNavBar">
                        <li>Our Group</li>
                        <li>Meetups</li>
                        <li>Members</li>
                        <li>Photos</li>
                        <li>Discussions</li>
                        <li>More</li>
                    </ul>
                </div>
            </div>
        )
    }
}
