import {useState, useEffect, useRef} from 'react'

const users = [
    {name:'user1',age:20},
    {name:'user2',age:21},
    {name:'user3',age:23}
]

const UserSearch = ()=>{
    const inputRef = useRef<HTMLInputElement|null>(null)
    const [name, setName] = useState('')
    const [user,setUser] = useState<{
        name: string;
        age: number;
    } | undefined>()

    useEffect(()=>{
        if(!inputRef.current){ return }
        inputRef.current.focus()
    },[])

    const onClick = ()=>{
        const serchUser = users.find(usr=>{return usr.name==name})
        setUser(serchUser)
    }


    return (
        <div>
            <h2>UserSearch</h2>
            <input ref={inputRef} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={onClick}>Find User</button>
            <div>
                <ul>
                    {user && user.name}
                    {user && user.age}
                </ul>
            </div>
        </div>
    )
}

export default UserSearch