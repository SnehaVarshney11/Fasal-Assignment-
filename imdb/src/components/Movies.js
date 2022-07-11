import React, { useState, useEffect } from 'react'
import Image from '../spiderman.jpg'
import axios from 'axios';
import { Oval } from  'react-loader-spinner';
import Pagination from './Pagination';

function Movies() {

    const[movies, setMovies] = useState([])
    const[pageNo, setPage] = useState(1);
    const[hover, setHover] = useState('')
    const[favourites, setFav] = useState([])

    function goAhead(){
      setPage(pageNo+1);
    }
    function goBehind(){
      if(pageNo>1){
        setPage(pageNo-1);
      }
    }

    useEffect(function(){
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f69a7ac1105e1cba606d5d0df6443beb&page=${pageNo}`).then((res =>
            {   console.table(res.data.results)
                setMovies(res.data.results);
            }
        ));
    },[pageNo])

    let add = (movies) =>{
        let newArray = [...favourites, movies]
        setFav([...newArray])
        console.log(newArray)
    }

    


  return (
    <>
    <div className='mb-8 text-center'>
        <div className='mt-8 mb-8 font-bold text-2xl text-center'> Trending Movies</div>
        {
            movies.length == 0 ?
            <div className='flex justify-center'> 
            <Oval
                height="100"
                width="100"
                color='grey'
                secondaryColor='grey'
                ariaLabel='loading'
            /> 
            </div> : 

        <div className='flex flex-wrap justify-center'>
            {
                movies.map((movies)=>(
                    <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})] md:h-[30vh] md:w-[250px] h-[25vh] w-[150px] bg-center bg-cover rounded-xl flex items-end m-4 hover:scale-110 ease-out duration-300 relative`}
                    onMouseEnter={()=>setHover(movies.id)}
                    onMouseLeave={()=> setHover("")}
                    >
                    {
                        hover == movies.id && <> {
                            !favourites.find((m)=> m.id==movies.id)?
                            <div className='absolute top-2 right-2 p-2 bg-grey-800 rounded-xl text-xl cursor-pointer' onClick={()=>add(movies) }>😍</div> :
                            <div className='absolute top-2 right-2 p-2 bg-grey-800 rounded-xl text-xl cursor-pointer' onClick={()=>add(movies) }>❌</div>
                        }
                        </>
                    }
                    
                    <div className='w-full bg-gray-900 text-white py-2 text-center text-xl rounded-b-xl'>{movies.title}</div>
                </div>
                ))
            }
                
                
        </div>
        
        }

    </div>
    <Pagination pageNo={pageNo} goBehind={goBehind} goAhead={goAhead}/>

    </>
  )
}

export default Movies