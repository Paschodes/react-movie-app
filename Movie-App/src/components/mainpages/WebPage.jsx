import React from 'react'
import './WebPage.css'
import Navbar from './Navbar';
import Feature from './Feature';
import Cards from './Cards';
import PopUp from './PopUp';


const WebPage = () => {
  return (
    <div className='container'>
        <Navbar />
        <Feature />
        <Cards />
        <PopUp />
        
    </div>
  )
}

export default WebPage;