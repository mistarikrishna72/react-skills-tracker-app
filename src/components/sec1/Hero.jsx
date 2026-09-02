import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='h-auto mt-4 w-full flex items-center'>
        <Left />
        <Right />
    </div>
  )
}

export default Hero