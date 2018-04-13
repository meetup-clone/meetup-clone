import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './CreateGroup/CreateGroup.css'
import Header from './Header.js'
import Footer from './Footer.js'

export default class CreateGroup extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='createGroup'>
                <Header />
                <img src='https://secure.meetupstatic.com/s/img/5771697722992842330638/start_v2/globe.svg' alt='' />
                <Footer />
            </div>
        )
    }

}