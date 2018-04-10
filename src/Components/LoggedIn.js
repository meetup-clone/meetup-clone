import React, {Component} from 'react'
import './LoggedIn/LoggedIn.css'
import Header from './Header.js'

// import {Link} from 'react-router-dom'

export default class LoggedIn extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
        return (
            <div className='loggedIn'>
                <Header />
              <h1>LoggedIn</h1>
            </div>
        )
    }
}