import { useState } from 'react';
import React from 'react'
import NetflixLogo from '../intro/NetflixLogo';
import {  ArrowDropDown, Notifications, Search } from '@mui/icons-material';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='nav-container'>
            <div className='left'>
                <div className='net-img'>
                    <NetflixLogo />
                </div>
                
                <a href="/">Home</a>
                <a href="/">TVShows</a>
                <a href="/">Movies</a>
                <a href="/">New&Popular</a>
                <a href="/">My List</a>
                <a href="/">Browse by Languages</a>
            </div>
            
            <div className='right'>
                <div className='search-field'>
                    <Search className='icon'/>
                    <input type="text" placeholder='movies...'/>
                </div>
                <a href="/">Kids</a>
                <Notifications className='icon'/>
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1553004660570701826/J4TijNiM_400x400.jpg" alt="" />
                    <ArrowDropDown className='icon'/>
                </div>
            </div>
            </div>
            
        </nav>
  )
}

export default Navbar;