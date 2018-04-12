import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import './Events/Events.css'

export default class Events extends Component {
    constructor() {
        super()

        this.state = {
            event: {},
            attendees: []
        }
    }

    componentDidMount() {
        axios.get(`/api/event/${this.props.match.params.event}`).then(res => {
            this.setState({event: res.data[0]})
        })
        axios.get(`/api/attendees/${this.props.match.params.event}`).then(res => {
            this.setState({attendees: res.data})
        })
    }

    render() {
        console.log(this.state, 'thisstate')
        const {start_date, end_date, event_description, 
               event_name, venue_address, venue,city, 
               venue_directions, venue_name} = this.state.event

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
// end_date:1523502000000
// event_description:"6:30 – 7:30 JS Learners Meetup"
// event_id:3
// event_name:"UtahJS SLC Meetup"
// group_id:1
// start_date:1523494800000
// venue_address:"1930 S. State St"
// venue_city:"Salt Lake City"
// venue_directions:"Southwest end of O.C. Tanner Campus"
// venue_name:"O.C. Tanner Event Center"
// venue_state:"UT"