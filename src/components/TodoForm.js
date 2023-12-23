import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [subjectValue, setSubjectValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleSubmit = e => {
         e.preventDefault();

            // Create an object containing both subject and description
            const todoDataString = `Subject: ${subjectValue}, Description: ${descriptionValue}`;


            // Pass the object to the addTodo function
            addTodo(todoDataString);

            // Clear the form fields
            setDescriptionValue('');
            setSubjectValue('');
    };

    return (
        <form className ="TodoForm" onSubmit={handleSubmit}>
            <label htmlFor="subject"> Subject: </label>
            <input type="text" id="subject" className='todo-input' value={subjectValue}
            placeholder='What is the task today?' onChange = {(e) => setSubjectValue(e.target.value)}/>

            <label htmlFor="description"> Description: </label>
            <textarea
                    id="description"
                    className="todo-input"
                    value={descriptionValue}
                    placeholder="Enter the task description"
                    onChange={(e) => setDescriptionValue(e.target.value)}
            ></textarea>

            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}