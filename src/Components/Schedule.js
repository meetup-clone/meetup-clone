import React, { Component } from 'react'
import axios from 'axios'
import './Schedule/Schedule.css'

export default class Schedule extends Component {
    constructor() {
        super()
        this.state = {
            groupName: '',
            title: '',
        }
    }

    componentDidMount() {
        axios.get(`/api/groupName/${this.props.match.params.id}`).then(res => {
            this.setState({ groupName: res.data.group_name })
        })
    }
    
    render() {
        return (
            <div className='schedule'>
                <div className='scheduleContainer'>
                    <h1>Schedule a Meetup</h1>
                    <h4>{this.state.groupName}</h4>
                    <div className='meetupTitle'>
                        <h2>Meetup Title</h2>
                        <h5>Keep it short, clear, and descriptive.*</h5>
                        <input onChange={(e) => this.setState({ title: e.target.value })} required />
                    </div>
                </div>
            </div>
        )
    }
}
