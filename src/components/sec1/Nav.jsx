import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-auto bg-indigo-950 text-white px-10 py-2 flex justify-between'>
        <div className='flex items-center'>
            <i className="ri-firebase-line text-5xl"></i>
            <span className='text-2xl font-extrabold'>Skills Tracker</span>
            </div>
        <div className='flex items-center'>
            <ul className='flex gap-5 text-xl font-semibold'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>My Skills</li>
                <li className='cursor-pointer'>About</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav