import './render.css';
import { useTaskContext } from "../../../context/Tasks/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react';

function RenderTasks() {
    const { tasks, deleteTasks } = useTaskContext();

    return (
        <div>
            <div className="container-tasks">
                {tasks.map((element, index) => {
                    return (
                        <div className="tasks" key={element.id}>
                            <div>
                                <h3>{element.taskName}</h3>
                                <p>{element.taskType}</p>
                                <p>ID: {element.id}</p>
                            </div>
                            <div>
                                <button className="finish-task" onClick={() => deleteTasks(element.id)}><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", }} /></button>
                            </div>
                        </div>
                    )
                })}
                <div>
                </div>
            </div>
        </div>
    );

}


export default RenderTasks;