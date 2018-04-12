import React from 'react'
import apple from '../Assets/downloadApple.png'
import google from '../Assets/downloadGoogle.png'
import facebook from '../Assets/Facebook-gray.svg'
import twitter from '../Assets/Twitter-gray.svg'
import youtube from '../Assets/Youtube-gray.svg'
import instagram from '../Assets/Instagram-gray.svg'

export default function Footer() {
    return (
        <div className='footer'>
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
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                                <img src={youtube} alt="" />
                                <img src={instagram} alt="" />
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
    )
}