import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = () => {
  return (
    <div className='mt-2 h-[45vh] lg:flex w-full'>
        <Left />
        <Right />
    </div>
  )
}

export default Hero