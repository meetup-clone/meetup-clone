import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GroupsView.css'

export default class GroupsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moreToggle: true,
            numToShow: 6
        }
        this.filterGroups = this.filterGroups.bind(this)
        this.groupsList = this.groupsList.bind(this)
        this.showMore = this.showMore.bind(this)
    }

    componentDidMount() {
        if (window.scrollY > 283) window.scrollTo(0, 283)
    }

    filterGroups() {
        const { myGroups, allGroups } = this.props
        let idArray = myGroups.map(e => e.group_id)
        let newArr = allGroups.filter(e => !idArray.includes(e.group_id))
        return newArr.slice(0, this.state.numToShow)
    }

    groupsList(groups) {
        return groups.map((e, i) => {
            return (
                <Link to={`/${e.url_name}`} key={e.group_id + e.group_name + i}>
                    <div className='groupCard'>
                        {e.img ?
                            <img src={e.img} alt={e.group_name} size='' />
                            : null
                        }
                        <div className='groupCardText'>
                            <h3>{e.group_name}</h3>
                            <p>{`We're ${e.members} Members`}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }
    
    showMore() {
        let num = this.state.numToShow + 6
        if (num > this.props.allGroups.length) {
            this.setState({ showMore: false, numToShow: num })
        }
        else {
            this.setState({ numToShow: num })
        }
    }

    render() {
        const { myGroups } = this.props
        const { moreToggle } = this.state
        return (
            <div className='groupsView'>
                <div className='groupsViewContainer'>
                    {myGroups.length ?
                        <div>
                            <h4>YOUR MEETUPS</h4>
                            <div className='groupCardContainer'>
                                {this.groupsList(myGroups)}
                            </div>
                        </div>
                        : null
                    }
                    <h4>SUGGESTED MEETUPS</h4>
                    <div className='groupCardContainer'>
                        {this.groupsList(this.filterGroups())}
                    </div>
                    {moreToggle ?
                        <div 
                            className='showMore' 
                            onClick={() => this.showMore()}
                        >
                            Show more
                        </div>
                        : null
                    }
                </div>
            </div>
        )
    }
}
