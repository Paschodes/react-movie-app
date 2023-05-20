import React from 'react'
import Movie1 from './Movie1';
import Movie2 from './Movie2';
import Movie3 from './Movie3';
import Movie4 from './Movie4';
import Movie5 from './Movie5';


const Cards = () => {

    

  return (
    <div>
        <h2 className='popular-h2'>Popular on Netflix</h2>

        <div className='movie-cards'>
        <Movie1 />
        <Movie2 />
        <Movie3 />
        <Movie4 />
        <Movie5 />
    </div>
    </div>
    
  )
}

export default Cards;