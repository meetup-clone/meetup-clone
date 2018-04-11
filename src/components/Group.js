import React, { Component } from 'react'
import Header from './Header'

export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='Group'>
            <Header/>
                <h1>Group</h1>
            </div>
        )
    }
}
