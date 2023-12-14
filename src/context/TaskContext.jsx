import { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext();



export const useTaskContext = () => {
    return useContext(TaskContext);
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    async function updateValue(newTask) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].taskName == newTask.taskName) {
                console.log("Erro ao cadastrar tarefa! Já existe no banco de dados!");
                return;
            }
        }
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const changeTaskBehavior = (id) => {

        const deleteTasks = tasks.filter((_, index) => {
            return index != id;
        }); // Delete tasks
        setTasks(deleteTasks);

    }

    return (
        <TaskContext.Provider value={{ tasks, changeTaskBehavior, updateValue }}>
            {children}
        </TaskContext.Provider>
    );
}