export default function Input({ type='text', label='', value='',}) {
    return (
        <>
            <label>{label}</label>
            <input type={type} value={value}/>
        </>
    )
}