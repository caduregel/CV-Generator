import { useState } from "react";

export default function Input({ type = 'text', label = '', Inputvalue, name = '', updateResults }) {
    const [value, setValue] = useState(Inputvalue);
    return (
        <>
            <label>{label}</label>
            <input type={type}
                value={value}
                name={name}
                onChange={(event) => {
                    setValue(event.target.value);
                    updateResults(name, event.target.value)
                }} />
        </>
    )
}