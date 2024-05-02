import React from 'react'
import logo from '../../../assets/logo.png';

function Header() {
  return (
    <div className='flex justify-between items-center shadow-lg p-4 border rounded-lg'>
      <button className="btn btn-primary btn-sm:btn-md">New Crush</button>
      <h2 className="font-bold text-sm md:text-2xl">Share Your Celebrity Crush</h2>
      <div className='flex gap-2 items-center'>
        <img src={logo} className='w-10 h-10 rounded full'/>
        <h2 className='font-bold text-sm hidden md:block'>By<br></br> Argenis De La Rosa</h2>
      </div>
    </div>
  )
}

export default Header
