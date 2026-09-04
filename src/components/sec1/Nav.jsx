import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-auto bg-violet-950 text-white px-10 py-2 flex justify-between items-center'>
        <div className='flex items-center'>
            <i className="ri-firebase-line text-5xl text-violet-400"></i>
            <span className='text-2xl font-extrabold'>Skills Tracker</span>
            </div>
        <div className='flex lg:block hidden items-center'>
            <ul className='flex gap-5 text-xl font-semibold'>
                <li className='cursor-pointer hover:text-slate-300'>Home</li>
                <li className='cursor-pointer hover:text-slate-300'>My Skills</li>
                <li className='cursor-pointer hover:text-slate-300'>About</li>
            </ul>
        </div>
        <div className='flex items-center lg:hidden'>
            <i className="ri-menu-line text-3xl cursor-pointer"></i>
        </div>
    </div>
  )
}

export default Nav