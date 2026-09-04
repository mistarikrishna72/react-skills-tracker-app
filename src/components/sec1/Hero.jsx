import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = ({ addSkillbtn }) => {
  return (
    <div className='h-[45vh] lg:flex w-full'>
        <Left addSkillbtn={addSkillbtn} />
        <Right />
    </div>
  )
}

export default Hero