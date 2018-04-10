import React from 'react'
import logo from '../Assets/Meetup_logo.svg'
import './LoggedOut/LoggedOut.css'


export default function LoggedOut() {
    return (
        <div className='loggedOut'>
            <header>
                <img src={logo} alt="logo" className='logo' />
                <section>
                    <span>Create a Meetup</span>
                    <a href={process.env.REACT_APP_LOGIN}>Log in</a>
                    <span>Sign up</span>
                </section>
            </header>

            <div className='bigGrid'>
                <video src='https://www.meetup.com/mu_static/en-US/dddafbfe4574fc19c6718950691dcb78.mp4' autoPlay loop />
                <div className='videoContent'>
                    <h2>What do you love?</h2>
                    <h4>Do more of it with Meetup</h4>
                    <button className='pinkBtn'>Sign Up</button>
                </div>
                <div className='categoryRow'>
                    <button>Join a movement</button>
                    <button>Learn to cook</button>
                    <button>Train for a marathon</button>
                    <button>Build a mobile app</button>
                    <button>Hike a mountain</button>
                    <button>Practice a language</button>
                </div>
                <section className='mainBlock'>

                </section>

            </div>




        </div>
    )
}