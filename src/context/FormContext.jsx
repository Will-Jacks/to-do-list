import { createContext, useContext, useState, useEffect } from "react";

export const FormContext = createContext();



export const useFormContext = () => {
    return useContext(FormContext);
}

export const FormProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const updateValue = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    const changeTaskBehavior = (id) => {

        const incompleteTasks = tasks.filter((_, index) => {
            return index != id;
        }); // Delete tasks
        setTasks(incompleteTasks);

        //Task done here!
        const completedTasks = tasks.filter((_, index) => {
            return index == id;
        });


        //Deu erro aqui, não estou conseguindo exibir as tasks completas
        setFinishedTasks([...finishedTasks, completedTasks]);
        //Corrigir depois

    }   

    return (
        <FormContext.Provider value={{ tasks, updateValue, changeTaskBehavior, finishedTasks }}>
            {children}
        </FormContext.Provider>
    );
}