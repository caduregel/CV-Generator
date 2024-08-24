/* eslint-disable react/prop-types */
import { useState } from 'react'
import Form from './components/form'
import './App.css'

function App() {
  const [submittedForm, setSubmittedForm] = useState(false)

  const [formResults, setFormResults] = useState({
    'name': ''

  })

  const submitForm = () => {
    setSubmittedForm(true)
  }

  if (submittedForm) {
    return (
      <p>submitted form</p>
    )
  } else {
    return (
      <>
        <Form submitForm={submitForm}/>
      </>
    )
  }
}

export default App
