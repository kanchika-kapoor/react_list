import { useState } from "react"

export const GuestList:React.FC= ()=>{
    const [name, setName] = useState('')
    const [guest, setGuest] = useState<string[]>([])

    const addGuestList = ()=>{
        setName('')
        setGuest([...guest, name])
    }

    return <div>
        <h2>GuestList</h2>
        <ul>
            {guest.map(person=>{
                 return (<li>{person}</li>)
            })}
        </ul>
        <input type="text" value={name} onChange = {(e)=>{setName(e.target.value)}}/>
        <button onClick={addGuestList}>Add Guest</button>
    </div>
}