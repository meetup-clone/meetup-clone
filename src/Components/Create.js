import React, { Component } from 'react'
import './Create/Create.css'
import Header from './Header.js'
import Footer from './Footer.js'

export default class Create extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='create'>
                <Header />
                <img src='https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg' alt='' />
                <Footer />
            </div>
        )
    }

}
