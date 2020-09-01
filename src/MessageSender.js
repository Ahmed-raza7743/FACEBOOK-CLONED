import React, { useState } from 'react'
import './MessageSender.css'
import {Avatar} from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from './StateProvider'

function MessageSender() {
    const [{user}, dispatch]=useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const handleSubmit=(e) =>{
        e.preventDefault()
        //some db stuff
        setInput("")
        setimageUrl("")//after hitting enter and it clean the input filedf
    }
    return (
        <div className="messageSender">
            <div className="messageSender-top">
            <Avatar src={user.photoURL}/>
            <form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                 className="messageSender-input" type="text" placeholder={"whats on your mind,${user.dispalyName}"}/>
                <input 
                value={imageUrl}
                onChange={(e) => setimageUrl(e.target.value)} type="text" placeholder="image URL (optional"/>
                <button onClick={handleSubmit} type="submit">hidden submit</button>
            </form> 
            </div>
            <div className="messageSender-bottom">
                <div className="messageSender-option">
                            <VideocamIcon style={{color:"red"}}/>
                        <h3>live video</h3>

                 </div>
                     <div className="messageSender-bottom">
                     <div className="messageSender-option">
                            <InsertEmotionIcon style={{color:"orange"}}/>
                             <h3>Feeling/Activity</h3>

                    </div>
                    </div>
                   <div className="messageSender-bottom">
                  <div className="messageSender-option">
                        <PhotoLibraryIcon style={{color:"green"}}/>
                            <h3>video/photo</h3>

                </div>
            </div>
            
        </div>
        </div>
    )
}

export default MessageSender
