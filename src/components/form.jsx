import Input from "./inputs"
import './form.css'
import { useState } from "react"

export default function Form({ submitForm, results }) {
    const [formResults, setFormResults] = useState(results)

    const updateResults = (whichField, result) => {
        const newResults = { ...formResults }
        newResults[whichField] = result
        setFormResults(newResults)
    }
    return (
        <>
            <div className="form_container">
                <h2>General Info</h2>
                <Input label="Name:" name="name" Inputvalue={formResults.name} updateResults={updateResults} />
                <Input label="Email:" name="email" Inputvalue={formResults.email} updateResults={updateResults} />
                <Input label="Phone Number:" name="phone" Inputvalue={formResults.phone} updateResults={updateResults} />
                <h2>Education</h2>
                <Input label="School:" Inputvalue={formResults.school} name="school" updateResults={updateResults} />
                <Input label="Graduation Year:" type="date" name="graduation" Inputvalue={formResults.graduation} updateResults={updateResults} />
                <h2>Work Experience</h2>
                <Input label="Company:" name="company" Inputvalue={formResults.company} updateResults={updateResults} />

                <button onClick={() => { submitForm(formResults) }} >Generate CV</button>
            </div>
        </>
    )
}