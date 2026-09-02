import React from 'react'

const Left = () => {
  return (
    <div className='h-full w-1/2 px-15 flex flex-col items-start justify-center '>
        <div className=''>
            <h2 className='text-6xl font-bold'>Track your skills.</h2>
            <h2 className='text-6xl font-bold'>Grow every day.</h2>
            <p className='text-2xl mt-3 text-slate-500 font-semibold mb-3'>Add the skills you are learning and <br /> track your progress in one place.</p>
        </div>
        <button className='bg-violet-500 px-5 py-1 text-white font-bold text-2xl rounded-lg cursor-pointer active:scale-95'>+ Add Skill</button>
    </div>
  )
}

export default Left