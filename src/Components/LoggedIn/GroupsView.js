import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './GroupsView.css'
import defaultImg from '../../Assets/default-image.png'

export default class GroupsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            moreToggle: true,
            numToShow: 9
        }
        this.filterGroups = this.filterGroups.bind(this)
        this.groupsList = this.groupsList.bind(this)
        this.showMore = this.showMore.bind(this)
    }

    componentDidMount() {
        if (window.scrollY > 283) window.scrollTo(0, 283)
    }

    filterGroups(type) {
        const { myGroups, allGroups, category } = this.props
        if (type === 'myGroupsCards') {
            let filteredGroups = myGroups.filter(e => e.categories.includes(category))
            return filteredGroups.slice(0, this.state.numToShow)
        } 
        else {
            let idArray = myGroups.map(e => e.group_id)
            let filteredGroups = allGroups.filter(e => !idArray.includes(e.group_id) && e.categories.includes(category))
            return filteredGroups.slice(0, this.state.numToShow)
        }
    }

    groupsList(type) {
        return this.filterGroups(type).map((e, i) => {
            return (
                <Link to={`/${e.url_name}`} key={e.group_id + e.group_name + i}>
                    <div className={`groupsCards ${type}`}>
                        {e.img ?
                            <img src={e.img} alt={e.group_name} />
                            :
                            <img src={defaultImg} alt='default-img' />
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
        let num = this.state.numToShow + 9
        if (num > this.filterGroups().length) {
            this.setState({ moreToggle: false, numToShow: num })
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
                                {this.groupsList('myGroupsCards')}
                            </div>
                        </div>
                        : null
                    }
                    <h4>SUGGESTED MEETUPS</h4>
                    <div className='groupCardContainer'>
                        {this.groupsList('allGroupsCards')}
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
