import React from 'react'

const Form = () => {
  return (
    <div className='absolute w-full h-screen backdrop-blur-xs  flex justify-center items-center hidden'>
        <div className='shadow-2xl shadow-black p-5 w-1/2 flex flex-col items-strat justify-center bg-white border-2 rounded-xl'>
        <div className='w-full mb-4 flex items-center justify-between'>
            <h2 className='text-4xl font-extrabold'>Add Skill</h2>
            <i className="ri-close-circle-fill mr-3 text-3xl text-red-500 cursor-pointer active:scale-95"></i>
        </div>
        <form id="formContainer" className=' flex flex-col items-strat gap-4 justify-center'>
            <div className='flex flex-col gap-1'>
                <label className='text-2xl font-bold'>Skill Name</label>
                <input className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 outline-none' placeholder='eg. Node.js' type="text" required/>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-2xl font-bold'>Skill Level</label>
                <select id="skillLvl" className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 outline-none' required>
                    <option value="strat">Just Start</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermidiate">Intermidiate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Master">Master</option>
                </select>
            </div>
            <div className='flex flex-col gap-1'>
                <label className='text-2xl font-bold'>Description</label>
                <textarea className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 h-50 outline-none' required placeholder='Describe what you are learning...'></textarea>
            </div>
            <div className='w-full flex items-center justify-end gap-5'>
                <button className='py-2 px-4 cursor-pointer active:scale-95 text-xl text-slate-500 border-1 rounded-lg font-semibold'>Cancel</button>
                <button className='py-2 px-4 cursor-pointer active:scale-95 text-xl rounded-lg bg-blue-500 text-white font-semibold'>Add Skill</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Form