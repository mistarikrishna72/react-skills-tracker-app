import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/sec1/Section1'
import Skills from './components/Skills-sec/Skills'
import Form from './components/form/Form'


const App = () => {
  const [showForm, setShowForm] = useState(false) 
  const addSkillbtn = () =>{
    setShowForm(true)
  }
    const closeForm = () => {
    setShowForm(false)
  }

  return (
    <div className='h-screen w-full flex flex-col items-center gap-10 overflow-auto'>
      <Section1 addSkillbtn={addSkillbtn} />
      <Skills />
      <div className={showForm ? 'block' : 'hidden'}>
        <Form closeForm={closeForm} />
      </div>
    </div>
  )
}

export default App