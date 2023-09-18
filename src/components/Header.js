import React, { useState } from 'react'
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Header({toggle ,onSearch}) {
  const [inputSearch, setInputSearch] = useState("");


  const handleSearch = async()=>{
    try{
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBLFEbFVTwJ4sDAn1UTxQQIg4WPX0U6CYY&part=snippet&maxResults=30&type=video&q=${inputSearch}`

      );
      onSearch(response.data.items);

    } catch(error){
      console.log('Error', error);
    }
  }


  return (
    <div className='header'>
      <div className='header-left'>
        <MenuIcon onClick={()=> toggle()}  />
        <Link to="/"> <img className='logo' src='image/yt.png' alt='youtube' /></Link>
      </div>


      <form className='header-center'> 
      <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type='text'/>
      <Link to={`/search/${inputSearch}`}><button type='submit' onClick={handleSearch} ><SearchIcon className='Search' /> </button></Link>
      </form>


      <div className='header-right'>
        <VideoCallOutlinedIcon className='hright' />
        <NotificationsNoneIcon className='hright' />
        <Avatar  className="avat" src='' />
      </div>


    </div>
  )
}

export default Header;




