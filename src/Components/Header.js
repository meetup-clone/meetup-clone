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
            menu: false,
        }
    }
    componentDidMount() {
        axios.get('/auth/me').then(res => this.setState({ user: res.data }))
        axios.get('api/groups').then(res => this.setState({ groups: res.data }))
    }
    render() {
        let { user, groups, menu } = this.state
        return (
            <div className='header'>
                <div className='nav'>
                    <Link to='/home'><img src={logo} alt='logo' className='logo' /></Link>
                    <section>
                        <Link to='/create'><span>Create a Meetup</span></Link>
                        <span>Explore</span>
                        <span>Messages</span>
                        <span>Notifications</span>
                        <div className='menu' onClick={() => this.setState({ menu: !menu })}>
                            <img src={user.image} alt='profile' className='profile' />
                            <span className='caret'>╲╱</span>
                        </div>
                    </section>
                </div>
                {menu ?
                    <div className='shadow' onClick={() => this.setState({ menu: false })}>
                        <div className='dropdown' onClick={(e) => e.stopPropagation()} >
                            <div className='headerGroups'>
                                {groups.length > 0 ?
                                    <div className='hoverPink'>
                                        <Link to={`/${groups[0].url_name}`} className='headerGroupText'>
                                            <h4>{groups[0].group_name}</h4>
                                        </Link>
                                    </div>
                                    :
                                    <div className='noGroupsYet'>
                                        <h3>You're not a member of any Meetup Groups yet.</h3>
                                    </div>
                                }
                            </div>
                            <div className='links'>
                                <div className='hoverPink'>
                                    <Link to='/' className='linkText'>Profile</Link>
                                </div>
                                <hr />
                                <div className='hoverPink'>
                                    <Link to='/' className='linkText'>Settings</Link>
                                </div>
                                <hr />
                                <div className='hoverPink'>
                                    <a href={process.env.REACT_APP_LOGOUT} className='linkText'>Log out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
            </div>
        )
    }
}
