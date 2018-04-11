import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header/Header.css'
import logo from '../Assets/Meetup_logo.svg'
import axios from 'axios'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            user: {},
            groups: [],
            toggle: false
        }
    }
    componentDidMount() {
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
        axios.get('api/groups').then(res => this.setState({ groups: res.data }))
    }
    render() {
        let { groups } = this.state
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
                            <img src={this.state.user.image} alt='profile' className='profile' />
                            <span className='caret'>╲╱</span>
                        </div>
                    </section>
                </div>
                <div className='shadow' onClick={() => this.setState({ toggle: !this.state.toggle })}>
                    {this.state.toggle ?
                        <div className='dropdown' onClick={(e) => e.stopPropagation()}>
                            <div className='groups'>
                                {groups.length > 0 ?
                                    <div>
                                        <Link to={`/${groups[0].url_name}`} className='hoverPink'><h4>{groups[0].group_name}</h4></Link>
                                    </div>
                                    :
                                    <div>
                                        <h3>You're not a member of any Meetup Groups yet.</h3>
                                    </div>
                                }
                            </div>
                            <div className='links'>
                                <Link to='/' className='hoverPink'>Profile</Link>
                                <hr />
                                <Link to='/' className='hoverPink'>Settings</Link>
                                <hr />
                                <a href={process.env.REACT_APP_LOGOUT} className='hoverPink'>Log out</a>
                            </div>
                        </div>
                        : null}
                </div>

            </div>
        )
    }
}
