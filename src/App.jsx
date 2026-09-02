import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/sec1/Section1'
import Skills from './components/Skills-sec/Skills'


const App = () => {
  return (
    <div className='h-screen w-full flex flex-col overflow-hidden'>
      <Section1 />
      <Skills />
    </div>
  )
}

export default App