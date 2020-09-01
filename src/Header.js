import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionOutLinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StoreFrontOutLinedIcon from '@material-ui/icons/StorefrontOutlined'
import FlagIcon from '@material-ui/icons/Flag'
import SuperUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import {Avatar, IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import NotoficationsActiveIcon from '@material-ui/icons/NotificationsActive'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import { useStateValue } from './StateProvider'
function Header() {
    const [{user}, disatch]=useStateValue();
    return (
        <div className="header">
            <div className="header-left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%202019%29.svg.png" alt=""/>
            <div className="header-input">
                <SearchIcon/>
                <input placeholder="Search Facebook" type="text"/>
            </div>

        </div>


        <div className="header-center">
        <div className="header-option header-option--active">
           <HomeIcon fontSize="large"/>
            </div>
        <div className="header-option">
           <FlagIcon fontSize="large"/>
            </div>
        <div className="header-option">
           <SubscriptionOutLinedIcon fontSize="large"/>
            </div>
        <div className="header-option">
           <SuperUserCircleIcon fontSize="large"/>
            </div>



        </div>



        <div className="header-right">
            <div className="header-info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>

            </div>


            <IconButton>
            <AddIcon/>
            </IconButton>
            <IconButton>
            <NotoficationsActiveIcon/>
            </IconButton>
            <IconButton>
            <ForumIcon/>
            </IconButton>
            <IconButton>
            <ExpandMoreIcon/>
            </IconButton>

        </div>
            
        </div>
    )
}

export default Header
