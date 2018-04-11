import React from 'react'
import logo from '../Assets/Meetup_logo.svg'
import './LoggedOut/LoggedOut.css'
import EventCards from './LoggedOut/EventCards'
import CategoryGrid from './LoggedOut/CategoryGrid'
import rightArrow from '../Assets/right-arrow.svg'
import magnifying from '../Assets/magnifying.svg'
import phone from '../Assets/holdingPhone.png'
import apple from '../Assets/downloadApple.png'
import google from '../Assets/downloadGoogle.png'
import facebook from '../Assets/Facebook-gray.svg'
import twitter from '../Assets/Twitter-gray.svg'
import youtube from '../Assets/Youtube-gray.svg'
import instagram from '../Assets/Instagram-gray.svg'

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
                    <EventCards />
                    <h2 className='exploreBy'>Explore by category</h2>
                    <CategoryGrid />
                    <div className='howMeetupWorks'>
                        <h2>How Meetup Works</h2>
                        <div className='findCreate'>
                            <div className='findAMeetup'>
                                <h3>Find a Meetup</h3>
                                <h4>Discover local Meetups for all the things you love.</h4>
                                <div className='blueText'>
                                    <h4>Sign up</h4>
                                    <img src={rightArrow} alt="" />
                                </div>
                            </div>
                            <div className='createAMeetup'>
                                <h3>Create a Meetup</h3>
                                <h4>Create your own Meetup, and draw from a community of millions.</h4>
                                <div className='blueText'>
                                    <h4>Create a Meetup</h4>
                                    <img src={rightArrow} alt="img" />
                                </div>

                            </div>
                            {/* <img src={magnifying} alt=""/> */}
                        </div>
                    </div>
                </div>
                <div className='getTheApp'>
                    <div className='getTheAppContent'>
                        <h2>Get the app</h2>
                        <div className='blueText' id='learnMoreBlueText'>
                            <h4>Learn more</h4>
                            <img src={rightArrow} alt="img" id='learnMoreArrow' />
                        </div>
                        <div>
                            <img src={apple} alt="img" />
                            <img src={google} alt="img" />
                        </div>

                    </div>
                    <img id='phone' src={phone} alt="img" />
                </div>
                <div className='meetupCompanyInfo'>
                    <div className='meetupCompanyInfoContent'>
                        <div className='companyInfoTop'>
                            <p>Create a Meetup</p>
                        </div>
                        <div className='companyInfoColumns'>
                            <div className='companyInfoColumn'>
                                <h3>Your Account</h3>
                                <h4>Sign up</h4>
                                <h4>Log in</h4>
                                <h4>Help</h4>
                            </div>
                            <div className='companyInfoColumn'>
                                <h3>Discover</h3>
                                <h4>Groups</h4>
                                <h4>Calendar</h4>
                                <h4>Topics</h4>
                                <h4>Cities</h4>
                            </div>
                            <div className='companyInfoColumn'>
                                <h3>Meetup</h3>
                                <h4>About</h4>
                                <h4>Meetup Pro</h4>
                                <h4>Careers</h4>
                                <h4>Apps</h4>
                                <h4>API</h4>
                            </div>
                            <div>
                                <div className='socialMediaHolder'>
                                    <img src={facebook} alt=""/>
                                    <img src={twitter} alt=""/>
                                    <img src={youtube} alt=""/>
                                    <img src={instagram} alt=""/>
                                </div>
                                <div className='languageDropdown'>
                                    English
                                </div>
                                <div className='downloadBtnsHolder'>
                                    <img className='downloadAppBtn' src={apple} alt="img" />
                                    <img className='downloadAppBtn' src={google} alt="img" /> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <h3>© Meetup 2018</h3><h3>᛫</h3>
                    <h3>Terms of Service</h3><h3>᛫</h3>
                    <h3>Privacy Policy</h3><h3>᛫</h3>
                    <h3>Cookie Policy</h3>
                </footer>
            </div>




        </div>
    )
}