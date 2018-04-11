import React, { Component } from 'react'
import Header from './Header';
import './Group/Group.css'

export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='group'>
                <Header />
                <div className="groupCard">
                <img src="https://secure.meetupstatic.com/photos/event/b/0/3/600_468662819.jpeg" alt="logo"/>
                    <div className="groupInfo">
                        <h1>Silicon Slopes</h1>
                        <p>Lehi, UT</p>
                        <p>members</p>
                        <p>organizer</p>
                        <div>
                            <button>Join us</button>
                            <button>...</button>
                            <button>right arrow</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
