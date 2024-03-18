import { useState } from "react"

export const GuestList:React.FC= ()=>{
    const [name, setName] = useState('')


    return <div>
        <h2>GuestList</h2>
        <input type="text" value={name} onChange = {(e)=>{setName(e.target.value)}}/>
        <button>Add Guest</button>
    </div>
}