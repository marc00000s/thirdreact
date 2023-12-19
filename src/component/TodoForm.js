import React, {useState} from 'react'

export const TodoForm = ({createTodo}) => {
    const [value, setValue] = useState ("")

    const handleSubmit = e => {
        e.preventDefault();

        createTodo(value)

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='Text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Create Task</button>
    </form>
    ) 
}