import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/sec1/Section1'
import Skills from './components/Skills-sec/Skills'


const App = () => {
  return (
    <div className='h-screen w-full flex flex-col gap-10 overflow-auto'>
      <Section1 />
      <Skills />
    </div>
  )
}

export default App