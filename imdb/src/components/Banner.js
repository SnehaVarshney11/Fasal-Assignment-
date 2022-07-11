import React, { useState, useEffect } from 'react'
import Image from '../spiderman.jpg'
import axios from 'axios';

function Banner() {

  const[movies, setMovies] = useState({})

    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=f69a7ac1105e1cba606d5d0df6443beb").then((res =>
            {   console.table(res.data.results)
                setMovies(res.data.results[0]);
            }
        ));
    },[])

  return (
    <>
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] h-[40vh] md:h[60vh] bg-center bg-cover flex items-end`}>
            <div className='text-xl md:text-3xl text-white p-6 bg-gray-900-opacity-50 w-full flex justify-center'>{movies.title}</div>
        </div>
    </>
  )
}

export default Banner