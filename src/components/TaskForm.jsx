import { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const [title, setTitle] = useState('')
    const [descripcion, setDescipcion] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleTextareaChange = (e) => {
        setDescipcion(e.target.value);
    }

    const handleSubmint = (e) => {
        e.preventDefault()
        console.log(title, descripcion);
        createTask(
            {
                title,
                descripcion
            }
        );
        setTitle('');
        setDescipcion('');
    };


    return (
        <div className='bg-slate-700 p-6'>
            <form className='bg-slate-800 p-10 mb-4 flex flex-col flex-wrap justify-center items-center	' onSubmit={handleSubmint}>
                <input className='my-2 w-full' onChange={handleInputChange} type="text" placeholder="agregar tarea" value={title} autoFocus />
                <textarea className='my-2 w-full' onChange={handleTextareaChange} placeholder='descripcion de la tarea' value={descripcion}></textarea>
                <button className='bg-blue-700 p-3 w-1/5 rounded-md text-white '>Add Task</button>
            </form>
        </div>

    );
}


export default TaskForm;
