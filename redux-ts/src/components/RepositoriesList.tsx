const RepositoriesList:React.FC = ()=>{
    const onSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList