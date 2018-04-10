import React from 'react'
import logo from '../Assets/Meetup_logo.svg'
import './LoggedOut/LoggedOut.css'
import EventCards from './LoggedOut/EventCards'


export default function LoggedOut() {
    return (
        <div className='loggedOut'>
            <header>
                <img src={logo} alt="logo" className='logo' />
                <section>
                    <span>Create a Meetup</span>
                    <a href={process.env.REACT_APP_LOGIN} className='login'>Log in</a>
                    <a href={process.env.REACT_APP_LOGIN}>Sign up</a>
                </section>
            </header>

            <div className='bigGrid'>
                <video src='https://www.meetup.com/mu_static/en-US/dddafbfe4574fc19c6718950691dcb78.mp4' autoPlay loop />
                <div className='videoContent'>
                    <h2>What do you love?</h2>
                    <h4>Do more of it with Meetup</h4>
                    <a href={process.env.REACT_APP_LOGIN}><button className='pinkBtn'>Sign Up</button></a>
                </div>
                <div className='categoryRow'>
                    <button className='grayBtn'>Join a movement</button>
                    <button className='grayBtn'>Learn to cook</button>
                    <button className='grayBtn'>Train for a marathon</button>
                    <button className='grayBtn'>Build a mobile app</button>
                    <button className='grayBtn'>Hike a mountain</button>
                    <button className='grayBtn' id='practiceLanguageBtn'>Practice a language</button>
                </div>
                <div className='mainBlock'>
                    <h2>Popular Meetups nearby</h2>
                    <EventCards />
                </div>

            </div>




        </div>
    )
}