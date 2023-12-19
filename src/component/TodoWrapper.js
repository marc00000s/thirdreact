import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { UpdateTodoForm } from './UpdateTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState ([])

    const createTodo = todo => {
        setTodos ([...todos, {id: uuidv4(), task: todo, completed: false, isUpdating: false}])
        console.log (todos)
    }
    
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {... todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !=id))
    }

    const updateTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {... todo, isUpdating: !todo.isUpdating}:todo))
    }

    const updateTask = (task, id) => {
        setTodos (todos.map (todo => todo.id === id? {...todo, task, isUpdating: !todo.isUpdating}:todo))
    }
  return (
     <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm createTodo={createTodo}/>
        {todos.map((todo, index) =>(
            todo.isUpdating ? (
                <UpdateTodoForm updateTodo={updateTask} task = {todo}/>
            ) : (
            <Todo task= {todo} key={index} toggleComplete={toggleComplete} deleteTodo= {deleteTodo} updateTodo={updateTodo}/>
        )
        
        ))}

        </div>
    )
}