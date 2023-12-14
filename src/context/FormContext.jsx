import { createContext, useContext, useState, useEffect } from "react";

export const FormContext = createContext();



export const useFormContext = () => {
    return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    }, []);

    useEffect(()=> {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

    const updateValue = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    async function setLocalStorageTasks(newTask) {
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].taskName == newTask.taskName) {
                alert("Tarefa já criada anteriormente!");
                return;
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateValue(newTask);
    }

    const changeTaskBehavior = (id) => {

        const incompleteTasks = tasks.filter((_, index) => {
            return index != id;
        }); // Delete tasks
        setTasks(incompleteTasks);

    }   

    return (
        <FormContext.Provider value={{ tasks , changeTaskBehavior, setLocalStorageTasks }}>
            {children}
        </FormContext.Provider>
    );
}