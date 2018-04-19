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
        this.filterMyGroups = this.filterMyGroups.bind(this)
        this.filterAllGroups = this.filterAllGroups.bind(this)
        this.groupsList = this.groupsList.bind(this)
        this.showMore = this.showMore.bind(this)
    }

    componentDidMount() {
        if (window.scrollY > 283) window.scrollTo(0, 283)
    }

    filterMyGroups() {
        const { myGroups, category } = this.props
        if (myGroups.length === 0) return []
        let filteredMyGroups = myGroups.filter(e => e.categories.includes(category))
        return filteredMyGroups.slice(0, this.state.numToShow)
    }

    filterAllGroups() {
        const { myGroups, allGroups, category } = this.props
        if (myGroups.length === 0 || allGroups.length === 0) return []
        let idArray = myGroups.map(e => e.group_id)
        let filteredAllGroups = allGroups.filter(e => !idArray.includes(e.group_id) && e.categories.includes(category))
        return filteredAllGroups.slice(0, this.state.numToShow)
    }

    groupsList(type) {
        let groups = []
        if (type === 'myGroupsCards') {
            groups = this.filterMyGroups()
        }
        else {
            groups = this.filterAllGroups()
        }
        if (groups.length === 0) return null
        return groups.map((e, i) => {
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
        if (this.filterAllGroups().length === 0) {
            this.setState({ moreToggle: false, numToShow: 9 })
        }
        if (num > this.filterAllGroups().length) {
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
