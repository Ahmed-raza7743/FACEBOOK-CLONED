import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutLinedIcon from '@material-ui/icons/ChatBubbleOutline'
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined'

import NearMeIcon from '@material-ui/icons/NearMe'

function Post({profilePic, image, username, timestamp, message})
 {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic}
                className="post-avatar" />
                <div className="post-topinfo">
    <h1>{username}</h1>
    <p>timestamp </p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt=""/>
            </div>
            <div className="post-options">
                <div className="post-option"><p>Like</p><ThumbUpIcon/></div>
                <div className="post-option"><p>Comment</p><ChatBubbleOutLinedIcon/></div>
                <div className="post-option"><p>Share</p><NearMeIcon /></div>
                <div className="post-option">
                    <AccountCircleIcon/>
                 
                </div>
            </div>
            
        </div>
    )
}

export default Post
