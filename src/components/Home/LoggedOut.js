import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../../Assets/Meetup_logo.svg'


export default function LoggedOut() {
    return (
        <div className='loggedOut'>
            <header>
                <img src={logo} alt="logo" className='logo'/>
                <section>
                    <span>Create a Meetup</span>
                    <span>Log in</span>
                    <span>Sign up</span>
                </section>
            </header>
        </div>
    )
}