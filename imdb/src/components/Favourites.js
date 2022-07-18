import React, { useState } from 'react'
import Pagination from './Pagination'

function Favourites() {

  const[curGenre, setCurGenre] = useState('All Genres');

  return <>
    <div className='mt-4 px-2 flex justify-center flex-wrap space-x-2 space-y-2'>
      <button className={
        curGenre == 'All Genres' ? 
        'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold' :
        'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
        }>
        All Genres
      </button>
      <button className={
        curGenre == 'Action' ? 
        'm-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold' :
        'm-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'
        }>
        Action
      </button>
      <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
        Comedy
      </button>
    </div>
    <div className='text-center'>
        <input type="text" placeholder='Search' className='border border-2 text-center p-1 m-2'/>
        <input type="number" placeholder='Rows' className='border border-2 text-center p-1 m-2'/>
    </div>
    <div>Table Container</div>
    <div className='mt-4'>
      <Pagination/>
    </div>
  </>

}

export default Favourites