import React from 'react'

export default function EventCards(props) {
    let monthsAbbrv = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let date = new Date(Date.now())
    let today = days[date.getDay()]
    let dateNumber = date.getDate()
    let month = months[date.getMonth()]
    let monthAbbrv = monthsAbbrv[date.getMonth()]
    return (
            <section className='eventCard'>
                <img src={props.img} alt="img"/>
                <div className='eventCardDate'>
                    <p>{dateNumber}</p>
                    <p>{monthAbbrv}</p>
                </div>
                <div className='eventCardContent'>
                    <h4>{`${today}, ${month} ${dateNumber}, ${props.time}`}</h4>
                    <h2>{props.title}</h2>
                    <img className='eventCardAvatar' src={props.person} alt="img"/>
                    <h4 className='hosted'>{`Hosted by ${props.host}`}</h4>
                    <h2 className='from'><span id='from'>From</span>{props.from}</h2>
                </div>
            </section>
    )
}