const EventComponent: React.FC = ()=>{
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
    }

    const onDrag = (e:React.DragEvent<HTMLDivElement>)=>{
        console.log('dragging element!',e)
    }


    return (
        <div>Event handler
            <input type="text" onChange={onChange}/>
            <div draggable onDrag={onDrag}>Draggable div</div>
        </div>
    )
}

export default EventComponent