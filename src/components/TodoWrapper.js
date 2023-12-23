import React, {useState, useEffect} from 'react'
import {TodoForm} from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import {Todo} from './Todo';
uuidv4();

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([]);

       useEffect(() => {
            // Load todos from localStorage when the component mounts
            const savedTodos = JSON.parse(localStorage.getItem('todos'));
            if (savedTodos) {
              setTodos(savedTodos);
            }
          }, []);

       useEffect(() => {
            // Save todos to localStorage whenever todos change
            localStorage.setItem('todos', JSON.stringify(todos));
          }, [todos]);

        const addTodo = todo => {
            setTodos([...todos, {id: uuidv4(), task: todo,
            completed: false, isEditing: false}])
            //console.log(todos)

        }

        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo,
            completed: !todo.completed} : todo))
        }

        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    return (
        <div className='TodoWrapper'>
            <h1>Happy Birthday!</h1>
            <TodoForm addTodo={addTodo}/>
            {todos.map((todo,index) => (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete} />
            ))}
        </div>
    )
}