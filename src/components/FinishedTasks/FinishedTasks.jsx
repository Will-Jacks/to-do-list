import React from 'react'
import { useFormContext } from '../../context/FormContext'

const FinishedTasks = () => {

    const { finishedTasks } = useFormContext();

    return (
        <>
            <h3>Concluído</h3>
            
            {
                finishedTasks.map((task, index)=> {
                    return(
                        <div key={index}>
                            <h3>{task.taskName}</h3>
                        </div>
                    )   
                })
            }
        </>
    )
}

export default FinishedTasks