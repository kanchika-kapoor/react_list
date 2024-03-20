import {useState} from 'react'
import { useActions } from '../hooks/useActions'

const RepositoriesList:React.FC = ()=>{
    const [term, setTerm] = useState('')
    const { SearchRepositories } = useActions()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        SearchRepositories(term)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={term} onChange={
                    (e)=>setTerm(e.target.value)
                }/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList