import React from 'react';
import Logo from "../Logo.jpg"; 

function NavBar(){
    return <>
        <div className='border pl-12 flex space-x-8 items-center py-4'>
            <img className='w-[50px] md:w-[80px]' src = {Logo}></img>
            <div className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</div>
            <div className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</div>
        </div>
    </>
}

export default NavBar;