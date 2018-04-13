import React, { Component } from 'react'
import './Create/Create.css'
import Header from './Header.js'
import Footer from './Footer.js'
import hotAirBalloons from '../Assets/hotAirBalloons.png'
import globe from '../Assets/globe.svg'
import textBubbles from '../Assets/textBubbles.svg'
import tag from '../Assets/tag.svg'
import people from '../Assets/people.svg'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className='create'>
                    <img className='hotAirBalloons' src={hotAirBalloons} alt='' />
                    <div className='stepContainer'>
                        <div className='steps'>
                            <img src={globe} alt='' />
                            <div className='stepsText'>
                                <div>STEP 1 OF 4</div>
                                <h2>What's your new Meetup Group's hometown?</h2>
                                <span>Provo, UT  (change location)</span>
                            </div>
                        </div>
                        <div className='steps'>
                            <img src={textBubbles} alt='' />
                            <div className='stepsText'>
                                <div>STEP 2 OF 4</div>
                                <h2>What will your Meetup be about?</h2>
                                <input placeholder='Search for a topic' />
                            </div>
                        </div>
                        <div className='steps'>
                            <img src={tag} alt='' />
                            <div className='stepsText'>
                                <div>STEP 3 OF 4</div>
                                <h2>What will your Meetup's name be?</h2>
                                <input placeholder='example: Salt Lake City Hiking Meetup' />
                                <h2>Describe who should join, and what your Meetup will do.</h2>
                                <textarea rows="8" maxlength="50000" aria-required="true" aria-invalid="false" required="true"></textarea>
                            </div>
                        </div>
                        <div className='steps'>
                            <img src={people} alt='' />
                            <div className='stepsText'>
                                <div>STEP 4 OF 4</div>
                                <h2>What it means to be a Meetup</h2>
                                <ul>
                                    <li>Real, in-person conversations</li>
                                    <li>Open and honest intentions</li>
                                    <li>Always safe and respectful</li>
                                    <li>Put your members first</li>
                                </ul>
                                <p>We review all Meetups based on our.</p>
                                <div className='agree'><h5>Agree & Continue</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
