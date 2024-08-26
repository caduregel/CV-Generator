import { useState } from 'react'
import Form from './components/form'
import './App.css'
import './components/form.css'

function App() {
  const [submittedForm, setSubmittedForm] = useState(false)
  const [results, setResults] = useState({
    'name': '',
    'email': '',
    'phone': '',
    'school': '',
    'graduation': '',
    'company': '',
  })


  const submitForm = (formResults) => {
    // const newResults = {...formResults}
    setResults(formResults)
    setSubmittedForm(true)
  }

  const editForm = () => {
    setSubmittedForm(false)
  }

  if (submittedForm) {
    return (
      <>
        <div className='form_container'>
          <h2>info:</h2>
          <p>{results.name}</p>
          <p>{results.email}</p>
          <p>{results.phone}</p>
          <h2>Education</h2>
          <p>{results.school}</p>
          <p>{results.graduation}</p>
          <h2>Work Experience</h2>
          <p>{results.company}</p>
          <button onClick={editForm}>Edit CV</button>
        </div>
      </>

    )
  } else {
    return (
      <>
        <Form submitForm={submitForm} results={results}/>
      </>
    )
  }
}

export default App
