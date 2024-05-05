import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from 'react'

function TaskList() {

    const { tasks } = useContext(TaskContext)

    //console.log(tasks);
    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl text-center">no hay tareas aun</h1>
    }

    return (
        <div className="grid grid-cols-4 gap-2 mt-1">
            {
                tasks.map((task) => {
                    return (
                        <TaskCard task={task} key={task.id} />
                    )
                })
            }
        </div>
    )
}



export default TaskList;
