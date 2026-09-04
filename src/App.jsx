import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/sec1/Section1'
import Skills from './components/Skills-sec/Skills'
import Form from './components/form/Form'


const App = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center gap-10 overflow-auto relative'>
      <Section1 />
      <Skills />
      <Form />
    </div>
  )
}

export default App