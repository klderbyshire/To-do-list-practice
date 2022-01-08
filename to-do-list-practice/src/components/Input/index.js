import {useState} from "react";

function Input({ onSubmit }) {

    const [text, setText] = useState("")

    function handleChange(event) {
setText(event.target.value)
    }
    
    return ( 
    <div>
        <input onChange={handleChange} />
        <button 
        onClick={function () {
            onSubmit(text)
        }}>
        ADD TODO</button>

    </div>
    )}

export default Input;