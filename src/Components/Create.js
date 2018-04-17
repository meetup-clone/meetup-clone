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
            city: 'Provo, UT',
            topic: '',
            name: '',
            description: ''
        }
        this.createGroup = this.createGroup.bind(this)
    }

    createGroup() {
        let groupUrl = this.state.name.replace(/ /g, '-')
        let location = this.state.city.split(', ')
        let formattedCity = location[0].replace(/,/g, '')
        let formattedState = location[1].replace(/,/g, '')
        let topics = ''
        for (let key in this.state) {
            if (key === 'step2' || key === 'step3' || key === 'step4' || key === 'changeCity' ||
                key === 'city'  || key === 'topic' || key === 'name'  || key === 'description') {
                    continue
                }
            if (this.state[key]) {
                topics += key + ', '
            }
        }
        let newGroup = {
            group_name: this.state.name,
            url_name: groupUrl,
            description: this.state.description,
            city: formattedCity,
            state: formattedState,
            members: 1,
            categories: topics
        }
        axios.post('/api/groups', newGroup).then(res => this.props.history.push(`/${res.data.url_name}`))
    }

    render() {
        const { step2, step3, step4, city, changeCity, topic, name, description } = this.state
        const { outdoors, tech, family, wellness, sports, learning, photography, food, writing,
                language, music, movements, lgbtq, film, scifi, beliefs } = this.state
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
                                <span className='stepCity'>{city}</span>
                                {!changeCity ?
                                    <span className='changeCity' onClick={() => this.setState({ changeCity: true })}>
                                        (change location)
                                    </span>
                                    : null
                                }
                                {changeCity ?
                                    <input
                                        placeholder='Enter a city and state'
                                        onChange={(e) => this.setState({ city: e.target.value })}
                                    />
                                    : null
                                }
                                {!step2 ?
                                    <div className='next' onClick={() => this.setState({ step2: true })} >
                                        <h5>Next</h5>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                        {step2 ?
                            <div className='step'>
                                <div className='stepImage'><img src={textBubbles} alt='' /></div>
                                <div className='stepText'>
                                    <div>STEP 2 OF 4</div>
                                    <h2>What will your Meetup be about?</h2>
                                    <input
                                        placeholder='Search for a topic'
                                        value={topic}
                                        onChange={(e) => this.setState({ topic: e.target.value })}
                                    />
                                    <div className='topics'>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ outdoors: !outdoors })}
                                        >
                                            <span>Outdoors</span>
                                            <img src={outdoors ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ tech: !tech })}
                                        >
                                            <span>Tech</span>
                                            <img src={tech ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ family: !family })}
                                        >
                                            <span>Family</span>
                                            <img src={family ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ wellness: !wellness })}
                                        >
                                            <span>Wellness</span>
                                            <img src={wellness ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ sports: !sports })}
                                        >
                                            <span>Sports</span>
                                            <img src={sports ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ learning: !learning })}
                                        >
                                            <span>Learning</span>
                                            <img src={learning ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ photography: !photography })}
                                        >
                                            <span>Photography</span>
                                            <img src={photography ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ food: !food })}
                                        >
                                            <span>Food</span>
                                            <img src={food ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ writing: !writing })}
                                        >
                                            <span>Writing</span>
                                            <img src={writing ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ language: !language })}
                                        >
                                            <span>Language</span>
                                            <img src={language ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ music: !music })}
                                        >
                                            <span>Music</span>
                                            <img src={music ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ movements: !movements })}
                                        >
                                            <span>Movements</span>
                                            <img src={movements ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ lgbtq: !lgbtq })}
                                        >
                                            <span>LGBTQ</span>
                                            <img src={lgbtq ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ film: !film })}
                                        >
                                            <span>Film</span>
                                            <img src={film ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ scifi: !scifi })}
                                        >
                                            <span>Sci-Fi</span>
                                            <img src={scifi ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                        <div
                                            className='topic'
                                            onClick={() => this.setState({ beliefs: !beliefs })}
                                        >
                                            <span>Beliefs</span>
                                            <img src={beliefs ? heartPink : heartOutline} alt='topics' />
                                        </div>
                                    </div>
                                    {!step3 ?
                                        <div className='next' onClick={() => this.setState({ step3: true })} >
                                            <h5>Next</h5>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            : null
                        }
                        {step3 ?
                            <div className='step'>
                                <div className='stepImage'><img src={tag} alt='' /></div>
                                <div className='stepText'>
                                    <div>STEP 3 OF 4</div>
                                    <h2>What will your Meetup's name be?</h2>
                                    <input
                                        placeholder='example: Salt Lake City Hiking Meetup'
                                        value={name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                    <h2>Describe who should join, and what your Meetup will do.</h2>
                                    <textarea
                                        rows="8"
                                        maxLength="50000"
                                        aria-required="true"
                                        aria-invalid="false"
                                        required="true"
                                        value={description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    ></textarea>
                                    {!step4 ?
                                        <div className='next' onClick={() => this.setState({ step4: true })} >
                                            <h5>Next</h5>
                                        </div>
                                        : null
                                    }
                                </div>
                            </div>
                            : null
                        }
                        {step4 ?
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
