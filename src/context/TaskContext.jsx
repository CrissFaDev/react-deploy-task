import PropTypes from 'prop-types';
import { useState, useEffect , createContext } from 'react'
import { tasks as data } from "../components/Tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            descripcion: task.descripcion
        }])
    }

    function deleteTask(id) {
        console.log(tasks);
        console.log(id);
        setTasks(tasks.filter(task => task.id !== id))
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

TaskContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};



