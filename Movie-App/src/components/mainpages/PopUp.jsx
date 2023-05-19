import React from 'react'
import { NoiseAware, PlayArrow, RecommendRounded, Subtitles } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './PopUp.css'


const PopUp = () => {
  return (
    <div>
        <div className='popup'>
            <div className='popup-top'>
                <img src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg" alt="image" />
    
                <div className='popup-title'>
                    <h3>The Witcher</h3>
                
                    <div className='popup-icon-btn'>
                        <button className='play'>
                            <PlayArrow />
                            <span>Play</span>
                        </button>

                        <CheckCircleIcon className='icon-child' />
                        <RecommendRounded className='icon-child' />
                    </div>

                </div>
            </div>
            
            <div className='popup-bottom'>
                <div className='detail-left'>
                    <div className='first'>
                        <span>98% Match</span>
                        <span>2022</span>
                        <span>2 seasons</span>
                        <NoiseAware />
                        <Subtitles />
                    </div>

                    <div>
                        <span className='card-rated'>18+</span>
                        <p>Violence, sex, nudity, language, substances, suicide, self-harm</p>
                    </div>

                    <div className='third'>
                        Volume 1 Coming June 29, Volume 2 Coming July 27
                    </div>

                    <div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>

                <div className='detail-right'>
                    <div>
                        <span>Cast:</span>
                        <span> Henry Cavil, Anya Charlotra, Freya Alla, more</span>
                    </div>
                    <div>
                        <span>Genres:</span>
                        <span> TV Dramas, TV shows, Based on Books, TV action & Adventure</span>
                    </div>
                    <div>
                        <span>This Show is:</span>
                        <span> Exciting</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PopUp;