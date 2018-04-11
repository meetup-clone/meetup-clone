import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import './Events/Events.css'

export default class Events extends Component {
    constructor() {
        super()

        this.state = {
            event: {}
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.event)
        axios.get(`/api/event/${this.props.match.params.event}`).then(res => {
            console.log(res.data)
            this.setState({event: res.data})
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='events'>
                    <div className='eventsTopSection'>
                        <div>
                        11
                        </div>
                        <div className='eventsTopContent'>

                        </div>
                        <div className='eventsTopGoing'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}