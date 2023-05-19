import React from 'react'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

const Feature = () => {
  return (
    <div>
        <div className='rated'>
            <span className='rated-span'>18+</span>
        </div>
        <div className='top'>
            <span className='series'>SERIES</span>
            <h1 className='title'>THE PERFECT MOTHER</h1>
            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

            </p>

            <div className='buttons'>
                <button className='play'>
                    <PlayArrow />
                    <span>Play</span>
                </button>

                <button className='more'>
                    <InfoOutlined />
                    <span className='more-span'> More info</span>
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Feature;