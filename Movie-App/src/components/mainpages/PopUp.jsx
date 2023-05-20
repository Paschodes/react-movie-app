import React, { useEffect, useState } from 'react'
import { NoiseAware, PlayArrow, RecommendRounded, Subtitles } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './PopUp.css'

const APIKEY = "9196bd2"


const PopUp = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?t=from+scratch&apikey=${APIKEY}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error(`This is an HTTP Error: the status is ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            setData(data)
            setError(null)
        })
        .catch((error) => {
            setError(error)
            setData(null)
        })
        .finally(() => setLoading(false))
    })
  return (
    <div>
        {loading && <h3>StillLoading... stay tuned!</h3>}
        {error && <h3>{`There is a problem fetching your data - ${error}`}</h3>}

        {data && 
        <div className='popup'>
            <div className='popup-top'>
                <img src={data.Poster} alt="image" />
    
                <div className='popup-title'>
                    <h3>{data.Title}</h3>
                
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
                        <span>{data.Ratings[0].Value} Match</span>
                        <span>{data.Year}</span>
                        <span>{data.Runtime}</span>
                        <NoiseAware />
                        <Subtitles />
                    </div>

                    <div>
                        <span className='card-rated'>{data.Rated}</span>
                        <p>{data.Genre}</p>
                    </div>

                    <div className='third'>
                        Released: {data.Released}
                    </div>

                    <div>
                        <p>{data.Plot}</p>
                    </div>
                </div>

                <div className='detail-right'>
                    <div>
                        <span>Cast:</span>
                        <span> {data.Actors}</span>
                    </div>
                    <div>
                        <span>Awards:</span>
                        <span> {data.Awards}</span>
                    </div>
                    <div>
                        <span>Language:</span>
                        <span> {data.Language}</span>
                    </div>
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default PopUp;