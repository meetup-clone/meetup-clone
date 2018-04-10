import React, { Component } from 'react'
import './Header/Header.css'
import logo from '../Assets/Meetup_logo.svg'
import axios from 'axios'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
    }
    render() {
        return (
            <div className='header'>
                <img src={logo} alt='logo' className='logo' />
                <section>
                    <span>Create a Meetup</span>
                    <span>Explore</span>
                    <span>Messages</span>
                    <span>Notifications</span>
                    <img src={this.state.user.image} alt='profile' className='profile'/>
                    <span className='caret'>╲╱</span>
                </section>
            </div>
        )
    }
}
