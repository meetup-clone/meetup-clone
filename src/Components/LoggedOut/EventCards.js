import React from 'react'
import laptop from '../../Assets/laptop.jpg'
import lake from '../../Assets/lake.jpg'
import tennis from '../../Assets/tennis.jpg'
import thumb1 from '../../Assets/thumb1.jpeg'
import thumb2 from '../../Assets/thumb2.jpeg'
import thumb3 from '../../Assets/thumb3.jpeg'


export default function EventCards() {
    return (
        <div className='eventCards'>
            <h2>Popular Meetups nearby</h2>
            <div className='eventsHolder'>
            <section className='eventCard'>
                <img src={laptop} alt="img"/>
                <div className='eventCardDate'>
                    <p>11</p>
                    <p>APR</p>
                </div>
                <div className='eventCardContent'>
                    <h4>Wednesday, April 11, 6:30 AM</h4>
                    <h2>Core Body Boot Camp</h2>
                    <img className='eventCardAvatar' src={thumb1} alt="img"/>
                    <h4 className='hosted'>Hosted by Anthony B.</h4>
                    <h2 className='from'><span id='from'>From</span>The Rise</h2>
                </div>
            </section>

            <section className='eventCard'>
                <img src={tennis} alt="img"/>
                <div className='eventCardDate'>
                    <p>11</p>
                    <p>APR</p>
                </div>
                <div className='eventCardContent'>
                    <h4>Wednesday, April 11, 6:30 AM</h4>
                    <h2>Core Body Boot Camp</h2>
                    <img className='eventCardAvatar' src={thumb2} alt="img"/>
                    <h4 className='hosted'>Hosted by Anthony B.</h4>
                    <h2 className='from'><span id='from'>From</span>The Rise</h2>
                </div>
            </section>
            
            <section className='eventCard' id='thirdEvent'>
                <img src={lake} alt="img"/>
                <div className='eventCardDate'>
                    <p>11</p>
                    <p>APR</p>
                </div>
                <div className='eventCardContent'>
                    <h4>Wednesday, April 11, 6:30 AM</h4>
                    <h2>Core Body Boot Camp</h2>
                    <img className='eventCardAvatar' src={thumb3} alt="img"/>
                    <h4 className='hosted'>Hosted by Anthony B.</h4>
                    <h2 className='from'><span id='from'>From</span>The Rise</h2>
                </div>
            </section>
            </div>
            
        </div>
    )
}