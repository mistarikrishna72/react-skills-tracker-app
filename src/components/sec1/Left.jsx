import React from 'react'

const Left = ({ addSkillbtn }) => {
  return (
    <div className='h-full w-full xl:w-1/2 px-10 xl:px-15 flex flex-col items-start justify-center gap-5'>
        <div>
            <h2 className='text-6xl lg:text-7xl xl:text-6xl font-bold'>Track your skills.</h2>
            <h2 className='text-6xl lg:text-7xl xl:text-6xl font-bold'>Grow every day.</h2>
            <p className='text-2xl mt-5 text-slate-500 font-semibold mb-3'>Add the skills you are learning and <br /> track your progress in one place.</p>
        </div>
        <button onClick={addSkillbtn} className='bg-violet-500 px-5 py-1 text-white font-bold text-3xl rounded-lg cursor-pointer active:scale-95'>+ Add Skill</button>
    </div>
  )
}

export default Left