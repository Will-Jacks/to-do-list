import './render.css';
import { useFormContext } from "../../context/FormContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function RenderTasks() {
    const { tasks, updateValue } = useFormContext();

    return (
        <div>
            <div className="container-tasks">
                {tasks.map((element, index) => {
                    return (
                        <div className="tasks" key={index}>
                            <div>
                                <h3>{element.inputValue}</h3>
                                <p>{element.selectValue}</p>
                            </div>
                            <div>
                                <button className="finish-task"><FontAwesomeIcon icon={faCheck} style={{ color: "#fff", }} /></button>
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