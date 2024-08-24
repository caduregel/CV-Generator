import Input from "./inputs"
import './form.css'

export default function Form({ submitForm }) {
    return (
        <>
            <div className="form_container">
                <h2>General Info</h2>
                <Input label="Name:" />
                <Input label="Email:" />
                <Input label="Phone Number:" />
                <h2>Education</h2>
                <Input label="School:" />
                <Input label="Graduation Year:" type="date" />
                <h2>Work Experience</h2>
                <Input label="Company:" />

                <input type="button" value='Generate CV' onClick={submitForm} />
            </div>
        </>
    )
}