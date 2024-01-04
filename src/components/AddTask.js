import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            alert('Please add a task!')
            return
        }
        if(!day){
            alert('Please add a Day!')
            return
        }

        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input 
            type="text" 
            id = 'task' 
            placeholder="Add Task" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="DayTime">Day & Time</label>
            <input 
            type="text" 
            id = 'DayTime'
            placeholder="Add Day & Time" 
            value={day}
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="rem">Set Reminder</label>
            <input 
            type="checkbox" 
            id = 'rem'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value='Save Task' className="btn btn-block"/>
    </form>
    )
}

export default AddTask;