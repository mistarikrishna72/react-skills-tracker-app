import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='mt-4 h-[50vh] w-full flex items-center'>
        <Left />
        <Right />
    </div>
  )
}

export default Hero