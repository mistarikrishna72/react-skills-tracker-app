import React from 'react'
import Nav from './Nav'
import Hero from './Hero'

const Section1 = ({ addSkillbtn }) => {
  return (
    <div className='h-1/2 w-full'>
        <Nav />
        <Hero addSkillbtn={addSkillbtn}/>
    </div>
  )
}

export default Section1