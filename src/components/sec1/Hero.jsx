import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='h-1/2 mt-4 w-full flex'>
        <Left />
        <Right />
    </div>
  )
}

export default Hero