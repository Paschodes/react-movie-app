import React, { useEffect, useState } from 'react'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

const APIKEY = "9196bd2"

const Feature = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${APIKEY}`)
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
        <div className='feature'>
            <div className='rated'>
                <span className='rated-span'>{data.Rated}</span>
            </div>
            <div className='top'>
                <span className='series'>{data.Type}</span>
                <h1 className='title'>{data.Title}</h1>
                <p className='description'>{data.Plot}</p>

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
        }
    </div>
    
  )
}

export default Feature;