import React from 'react'
import dots from '../../Assets/dots.svg'
import blueHeart from '../../Assets/blue-heart.svg'
import pinkHeart from '../../Assets/heart-pink.svg'

export default class DiscussionCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }


    render() {
    return (
        <div className="discussionCardMain">
            <div className="discussionCardTopWrapper">
                <div className="discussionCardTop">
                    <img src={this.props.avatar} alt="" />
                    <h5>{this.props.userName}</h5>
                    <p>{this.props.date}</p>
                </div>
                <img className="threeDots" src={dots} alt="..." />
            </div>
            <h2>{this.props.comment}</h2>
            <div className="discussionCardBottom">
                <div className="replyWrapper">
                    <h5>reply</h5>
                </div>
                {this.state.toggle ?
                <div onClick={() => this.setState({toggle: false})} style={{width: "auto"}} className="likeHolder">
                    <img style={{ height: 15, width: 15}} src={pinkHeart} alt="pink heart" />
                    <p style={{marginLeft: 10}} >Unlike</p>
                </div>
                :
                <div onClick={() => this.setState({toggle: true})} className="likeHolder">
                    <img style={{ height: 15, width: 15 }} src={blueHeart} alt="blue heart" />
                    <p>Like</p>
                </div>}
            </div>
        </div>
    )
}
}