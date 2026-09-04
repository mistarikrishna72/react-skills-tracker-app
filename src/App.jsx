import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Section1 from './components/sec1/Section1'
import Skills from './components/Skills-sec/Skills'
import Form from './components/form/Form'

const App = () => {

  const [showForm, setShowForm] = useState(false)

  const [skills, setSkills] = useState([
    {
      id: 1,
      name: 'JavaScript',
      level: 'Intermediate',
      description: 'Learning JavaScript concepts and building projects.',
      progress: 80
    }
  ])

  const addSkillbtn = () => {
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }

  const addSkill = (newSkill) => {
    setSkills([...skills, newSkill])
    setShowForm(false)
  }

  return (
    <div className='h-screen w-full flex flex-col items-center gap-10 overflow-auto'>

      <Section1 addSkillbtn={addSkillbtn} />

      <Skills skills={skills} />

      <div className={showForm ? 'block' : 'hidden'}>
        <Form
          closeForm={closeForm}
          addSkill={addSkill}
        />
      </div>

    </div>
  )
}

export default App