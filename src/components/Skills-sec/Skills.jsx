import React from 'react'

const Skills = ({skills}) => {
  return (
    <div className='border-t-1 border-gray-500 py-10 h-[55]'>
        <h2 className='px-15 mb-3'><i className="ri-dashboard-horizontal-line text-3xl mr-1"></i> 
        <span className='text-3xl font-bold underline'>My Skills</span></h2>
        <div className='h-1/2 w-full px-15 py-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5'>
            
           {skills.map(function(skill){
               return <div className='h-70 bg-white rounded-xl py-4 px-5   shadow-sm shadow-black'>
                   <div className='mb-5'>
                       <h2 className='text-4xl font-extrabold'>{skill.name}</h2>
                       <h4 className='text-xl font-bold text-orange-400 mb-4'>{skill.level}</h4>
                       <p className='font-semibold text-slate-600'>{skill.description}</p>
                   </div>
                   <div className='flex flex-col w-full'>
                       <h5 className='w-full flex justify-end text-lg items-end'>{skill.progress}</h5>
                       <div className='w-full h-[10px] border-2 rounded-xl'>
                        <div className='h-full bg-blue-400 rounded-xl'
                  style={{ width: `${skill.progress}%` }}></div>
                       </div>
                   </div>
                   <div className='w-full mt-5 flex justify-end items-center'>
                       <button className='cursor-pointer border-2 px-3 py-1 rounded-lg text-red-600 active:scale-95 font-bold'>Delete</button>
                   </div>
               </div>
           })}
            
    </div>
    </div>
  )
}

export default Skills