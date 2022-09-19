import React, { Component} from 'react';

import './LikeButton.css';


class LikeButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            liked: !this.state.liked
        });
    }

    // handleLike = () => {
    //     this.setState({likes: this.state.likes + 1})
    // }

    render(){
        const label = this.state.liked ? 'Unlike' : 'Like';
        return(
            <div>
                <button className='like-btn' onClick={this.handleClick}>{label}</button>
                {/* <p>{this.state.likes} Likes</p> */}
            </div>
        )
    }
}

export default LikeButton;