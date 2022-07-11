import React from 'react'

function Pagination() {
  return (
    <>
        <div className='w-full flex justify-center mb-8'>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl'>Previous</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 bg-gray-100'>1</button>
            <button className='p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl'>Next</button>
        </div>
    </>
  )
}

export default Pagination