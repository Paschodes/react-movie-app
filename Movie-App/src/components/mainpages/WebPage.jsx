import React from 'react'
import './WebPage.css'

import Navbar from './Navbar';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

const WebPage = () => {
  return (
    <div className='container'>
        <Navbar />
        
        <div className='top'>
            <h1><span>THE PERFECT</span><span> MOTHER</span></h1>
            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type.
            </p>

            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>

                <button className='more'>
                    <InfoOutlined />
                    <span>More info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default WebPage;