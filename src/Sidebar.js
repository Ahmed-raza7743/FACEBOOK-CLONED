import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import LocalHospitalIcon from'@material-ui/icons/LocalHospital'
import ExpandMoreOutLined from '@material-ui/icons/ExpandMore'
import { useStateValue } from './StateProvider'


function Sidebar() {
    const [{user}, dispatch]=useStateValue()
    return (
        <div className="sidebar">
            <SidebarRow 
            src={user.photoURL} 
            title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 information center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Frieds"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutLined} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
