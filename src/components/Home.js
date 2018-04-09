import React, {Component} from 'react'
import LoggedIn from './Home/LoggedIn'
import LoggedOut from './Home/LoggedOut'
import './Home/Home.css'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            loggedIn: false
        }
    }
    render() {
        return (
            <div className='home'>
                {
                    this.state.loggedIn
                        ?
                        <LoggedIn />
                        :
                        <LoggedOut />
                }
            </div>
        )
    }
}