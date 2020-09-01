import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'

function Feed() {
    const [posts, setPosts]=useState([])

    useEffect(() =>{
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) =>({
                id: doc.id, data:doc.data()})))
          );  }

    ,[])

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
        {posts.map((post)=>(
            <Post
            key={post.id}
            profilePic={Post.profilePic}
            timestamp={post.timestamp}
            message={post.message}
            username={post.username}
            image={post.image}
            />
        ))}
            
        </div>
    )
}

export default Feed
