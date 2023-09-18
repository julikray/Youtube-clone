import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Sidebar() {
  return (
    <div className= "sidebar" >

        <SidebarRow  selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending"  />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
        <hr/>
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow Icon={HistoryIcon} title="History"  />
        <SidebarRow Icon={SlideshowIcon} title="Your Videos" />
        <SidebarRow Icon={AccessTimeIcon} title="Watch later" />
        <SidebarRow Icon={ThumbUpIcon} title="Liked videos"  />
        <SidebarRow Icon={KeyboardArrowDownIcon} title="Show more" />
         <hr/>




        </div>









  );
};

export default Sidebar;