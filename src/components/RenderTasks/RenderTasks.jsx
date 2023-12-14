import './render.css';
import { useTaskContext } from "../../context/TaskContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function RenderTasks() {
    const { tasks, changeTaskBehavior } = useTaskContext();

    return (
        <div>
            <div className="container-tasks">
                {tasks.map((element, index) => {
                    return (
                        <div className="tasks" key={index}>
                            <div>
                                <h3>{element.taskName}</h3>
                                <p>{element.taskType}</p>
                            </div>
                            <div>
                                <button className="finish-task" onClick={()=> changeTaskBehavior(index)}><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", }} /></button>
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