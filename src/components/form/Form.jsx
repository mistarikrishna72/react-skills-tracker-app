import React, { useState } from 'react'

const Form = ({ closeForm, addSkill }) => {

  const [name, setName] = useState('')
  const [level, setLevel] = useState('Beginner')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newSkill = {
      id: Date.now(),
      name: name,
      level: level,
      description: description,
      progress:
        level === 'Just Start' ? 10 :
        level === 'Beginner' ? 25 :
        level === 'Intermediate' ? 50 :
        level === 'Advanced' ? 75 :
        100
    }

    addSkill(newSkill)
  }

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-xs flex justify-center items-center'>

      <div className='shadow-2xl shadow-black p-5 w-1/2 flex flex-col items-start justify-center bg-white border-2 rounded-xl'>

        <div className='w-full mb-4 flex items-center justify-between'>

          <h2 className='text-4xl font-extrabold'>
            Add Skill
          </h2>

          <i
            onClick={closeForm}
            className="ri-close-circle-fill mr-3 text-3xl text-red-500 cursor-pointer active:scale-95"
          ></i>

        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-start gap-4 justify-center w-full'
        >

          <div className='flex flex-col gap-1 w-full'>
            <label className='text-2xl font-bold'>
              Skill Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 outline-none'
              placeholder='eg. Node.js'
              type='text'
              required
            />
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label className='text-2xl font-bold'>
              Skill Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 outline-none'
              required
            >
              <option value="Just Start">Just Start</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Master">Master</option>
            </select>
          </div>

          <div className='flex flex-col gap-1 w-full'>
            <label className='text-2xl font-bold'>
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='border-1 rounded-lg text-2xl font-semibold px-2 py-2 h-50 outline-none'
              required
              placeholder='Describe what you are learning...'
            ></textarea>
          </div>

          <div className='w-full flex items-center justify-end gap-5'>

            <button
              type='button'
              onClick={closeForm}
              className='py-2 px-4 cursor-pointer active:scale-95 text-xl text-slate-500 border-1 rounded-lg font-semibold'
            >
              Cancel
            </button>

            <button
              type='submit'
              className='py-2 px-4 cursor-pointer active:scale-95 text-xl rounded-lg bg-blue-500 text-white font-semibold'
            >
              Add Skill
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default Form