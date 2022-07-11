import React, {useState} from 'react'

function Pagination({pageNo, goBehind, goAhead}) {
  
  return (
    <>
        <div className='w-full flex justify-center mb-8'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl' onClick={goBehind}>Prev</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-100'>{pageNo}</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl' onClick={goAhead} >Next</button>
        </div>
    </>
  )
}

export default Pagination