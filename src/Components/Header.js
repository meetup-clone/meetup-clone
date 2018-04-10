import React, { Component } from 'react'
import './Header/Header.css'
import logo from '../Assets/Meetup_logo.svg'
import axios from 'axios'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            toggle: false
        }
    }
    componentDidMount() {
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
    }
    render() {
        return (
            <div className='header'>
                <div className='nav'>
                    <img src={logo} alt='logo' className='logo' />
                    <section>
                        <span>Create a Meetup</span>
                        <span>Explore</span>
                        <span>Messages</span>
                        <span>Notifications</span>
                        <div className='toggle' onClick={() => this.setState({ toggle: !this.state.toggle })}>
                            <img src={this.state.user.image} alt='profile' className='profile'/>
                            <span className='caret'>╲╱</span>
                        </div>
                    </section>
                </div>
                {this.state.toggle ? 
                    <div className='dropdown'>
                        <span>Profile</span>
                        <span>Settings</span>
                        <span>Log out</span>
                    </div>
                : null }
                
            </div>
        )
    }
}
