import React, { Component } from 'react'
import logo from '../Assets/Meetup_logo.svg'
import './Header/Header.css'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
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
                </section>
            </div>
        )
    }
}
