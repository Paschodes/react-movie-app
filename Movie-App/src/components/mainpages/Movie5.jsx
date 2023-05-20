import React, { useEffect, useState } from 'react'
import PlayCircle from '@mui/icons-material/PlayCircleOutline';
import RecommendIcon from '@mui/icons-material/Recommend';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const APIKEY = "9196bd2"

const Movie5 = () => {

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
        <div className='popular'>
            <div>
                <div className='row-container'>
                    <div className='row-content'>
                        <div className='slider'>
                            <div className='card'>
                                <img src={data.Poster} alt="movie-poster" />
                                <div className='card-details'>
                                    <div className='card-icons'>
                                        <div>
                                            <PlayCircle className='icon-child'/>
                                            <CheckCircleIcon className='icon-child'/>
                                            <RecommendIcon className='icon-child'/>
                                        </div>
                                        <div>
                                            <ArrowDropDownCircleIcon className='icon-child'/>
                                        </div>
                                    </div>

                                    <div className='card-info'>
                                        <a href='/' className='match'>{data.Ratings[0].Value} Match</a>
                                        <a href='/' className='card-rated'>{data.Rated}</a>
                                        <a href='/'>{data.Runtime}</a>
                                    </div>

                                    <div className='card-desc'>
                                        <a href='/'>{data.Genre}</a>
                                        
                                    </div>
                                </div>
                            </div>

                            
                            
                            
                            
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        }
    </div>
  )
}

export default Movie5;