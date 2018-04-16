import React, { Component } from 'react'
import axios from 'axios'
import './Create/Create.css'
import Header from './Header.js'
import Footer from './Footer.js'
import hotAirBalloons from '../Assets/hotAirBalloons.png'
import globe from '../Assets/globe.svg'
import textBubbles from '../Assets/textBubbles.svg'
import tag from '../Assets/tag.svg'
import people from '../Assets/people.svg'
import heartOutline from '../Assets/heart-outline.svg'
import heartPink from '../Assets/heart-pink.svg'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            step1: true,
            step2: false,
            step3: false,
            step4: false,
            changeCity: false,
            outdoors: false,
            tech: false,
            family: false,
            wellness: false,
            sports: false,
            learning: false,
            photography: false,
            food: false,
            writing: false,
            language: false,
            music: false,
            movements: false,
            lgbtq: false,
            film: false,
            scifi: false,
            beliefs: false,
            city: 'Provo UT',
            topic: '',
            name: '',
            description: ''
        }
        this.createGroup = this.createGroup.bind(this)
    }

    createGroup() {
        let groupUrl = this.state.name.replace(/ /g, '-')
        let location = this.state.city.split(' ')
        let city = location[0]
        let state = location[1]
        let newGroup = {
            group_name: this.state.name,
            url_name: groupUrl,
            description: this.state.description,
            city: city,
            state: state,
            members: 1
        }
        axios.post('/api/groups', newGroup).then(res => this.props.history.push(`/${res.data.url_name}`))
    }

    render() {
        return (
            <div>
                <Header />
                <div className='create'>
                    <img className='hotAirBalloons' src={hotAirBalloons} alt='' />
                    <div className='stepContainer'>
                        <div className='step'>
                            <div className='stepImage'><img src={globe} alt='' /></div>
                            <div className='stepText'>
                                <div>STEP 1 OF 4</div>
                                <h2>What's your new Meetup Group's hometown?</h2>
                                <span className='stepCity'>{this.state.city}</span>
                                {!this.state.changeCity ?
                                    <span className='changeCity' onClick={() => this.setState({ changeCity: true })}>
                                        (change location)
                                    </span>
                                    : null
                                }
                                {this.state.changeCity ?
                                    <input
                                        placeholder='Enter a city and state'
                                        onChange={(e) => this.setState({ city: e.target.value })}
                                    />
                                    : null
                                }
                                {!this.state.step2 ?
                                    <div className='next' onClick={() => this.setState({ step2: true })} >
                                        <h5>Next</h5>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                        {this.state.step2 ?
                            <div className='step'>
                                <div className='stepImage'><img src={textBubbles} alt='' /></div>
                                <div className='stepText'>
                                    <div>STEP 2 OF 4</div>
                                    <h2>What will your Meetup be about?</h2>
                                    <input
                                        placeholder='Search for a topic'
                                        value={this.state.topic}
                                        onChange={(e) => this.setState({ topic: e.target.value })}
                                    />
                                    <div className='topics'>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ outdoors: !this.state.outdoors })}
                                        >
                                            <span>Outdoors</span>
                                            <img src={this.state.outdoors ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ tech: !this.state.tech })}
                                        >
                                            <span>Tech</span>
                                            <img src={this.state.tech ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ family: !this.state.family })}
                                        >
                                            <span>Family</span>
                                            <img src={this.state.family ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ wellness: !this.state.wellness })}
                                        >
                                            <span>Wellness</span>
                                            <img src={this.state.wellness ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ sports: !this.state.sports })}
                                        >
                                            <span>Sports</span>
                                            <img src={this.state.sports ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ learning: !this.state.learning })}
                                        >
                                            <span>Learning</span>
                                            <img src={this.state.learning ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ photography: !this.state.photography })}
                                        >
                                            <span>Photography</span>
                                            <img src={this.state.photography ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ food: !this.state.food })}
                                        >
                                            <span>Food</span>
                                            <img src={this.state.food ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ writing: !this.state.writing })}
                                        >
                                            <span>Writing</span>
                                            <img src={this.state.writing ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ language: !this.state.language })}
                                        >
                                            <span>Language</span>
                                            <img src={this.state.language ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ music: !this.state.music })}
                                        >
                                            <span>Music</span>
                                            <img src={this.state.music ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ movements: !this.state.movements })}
                                        >
                                            <span>Movements</span>
                                            <img src={this.state.movements ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ lgbtq: !this.state.lgbtq })}
                                        >
                                            <span>LGBTQ</span>
                                            <img src={this.state.lgbtq ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ film: !this.state.film })}
                                        >
                                            <span>Film</span>
                                            <img src={this.state.film ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ scifi: !this.state.scifi })}
                                        >
                                            <span>Sci-Fi</span>
                                            <img src={this.state.scifi ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ beliefs: !this.state.beliefs })}
                                        >
                                            <span>Beliefs</span>
                                            <img src={this.state.beliefs ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                    </div>
                                    {!this.state.step3 ?
                                        <div className='next' onClick={() => this.setState({ step3: true })} >
                                            <h5>Next</h5>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            : null
                        }
                        {this.state.step3 ?
                            <div className='step'>
                                <div className='stepImage'><img src={tag} alt='' /></div>
                                <div className='stepText'>
                                    <div>STEP 3 OF 4</div>
                                    <h2>What will your Meetup's name be?</h2>
                                    <input
                                        placeholder='example: Salt Lake City Hiking Meetup'
                                        value={this.state.name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                    <h2>Describe who should join, and what your Meetup will do.</h2>
                                    <textarea
                                        rows="8"
                                        maxLength="50000"
                                        aria-required="true"
                                        aria-invalid="false"
                                        required="true"
                                        value={this.state.description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    ></textarea>
                                    {!this.state.step4 ?
                                        <div className='next' onClick={() => this.setState({ step4: true })} >
                                            <h5>Next</h5>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            : null
                        }
                        {this.state.step4 ?
                            <div className='step'>
                                <div className='stepImage'><img src={people} alt='' /></div>
                                <div className='stepText'>
                                    <div>STEP 4 OF 4</div>
                                    <h2>What it means to be a Meetup</h2>
                                    <ul>
                                        <li>Real, in-person conversations</li>
                                        <li>Open and honest intentions</li>
                                        <li>Always safe and respectful</li>
                                        <li>Put your members first</li>
                                    </ul>
                                    <p>We review all Meetups based on our Community Guidlines.</p>
                                    <div className='next' onClick={() => this.createGroup()}>
                                        <h5>Agree & Continue</h5>
                                    </div>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
