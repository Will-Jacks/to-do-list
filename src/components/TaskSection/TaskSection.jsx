import './taskSection.css';

import { useRenderFormContext } from '../../context/RenderFormContext';
import { useTaskContext } from '../../context/TaskContext';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function TaskSection() {
    const { tasks } = useTaskContext();
    const { formState, updateFormState } = useRenderFormContext();


    return (
        <div>
            {
                tasks.length > 0 ? (
                    <div>
                        <div className="wrapper-task-plus">
                            <h2 className="main-title-tasks">Tarefas</h2>
                            <abbr title="Adicionar tarefa">
                                <button
                                    onClick={() => updateFormState(!formState)}
                                    className='update-form-state-button'
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        style={{ color: "#000000", }}
                                    />
                                </button>
                            </abbr>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='wrapper-task-plus'>
                            <h2 className='main-title-tasks'>Tarefas</h2>
                            <abbr title="Adicionar tarefa">
                                <button
                                    onClick={() => updateFormState(!formState)}
                                    className='update-form-state-button'
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        style={{ color: "#000000", }}
                                    />
                                </button>
                            </abbr>
                        </div>
                        <p>Nenhuma tarefa cadastrada ainda</p>
                    </div>
                )
            }
        </div>
    )

}

export default TaskSection;