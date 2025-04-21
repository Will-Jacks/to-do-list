import { createContext, useContext, useState, useEffect } from "react";
export const TaskContext = createContext();

export class TaskData {
    constructor(taskName, taskType) {
        this.taskName = taskName;
        this.taskType = taskType;
    }
}

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);


    function updateValue(newTask) {
        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    const deleteTasks = (id) => {
        const deletedTasks = tasks.filter((element) => element.id != id); // Delete tasks
        setTasks(deletedTasks);
        deleteTask(id);
    }

    //    GET METHOD FRONT-END   //
    async function getTasks() {
        const url = "http://localhost:8080/tasks/all";
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        if (data) setTasks(data);
    }
    //    GET METHOD FRONT-END    //


    //    POST METHOD    //
    async function postTask(newTask) {

        const url = "http://localhost:8080/tasks/cadastrar";
        console.log(newTask);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if (!response.ok) {
                throw new Error("Falha ao tentar cadastrar tarefa!");
            }

            getTasks();

        } catch (e) {
            console.error("Erro durante a requisição POST", e.message);
        };
    }
    //    POST METHOD    //


    //    DELETE METHOD    //

    async function deleteTask(id) {
        const url = `http://localhost:8080/tasks/excluir/${id}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }

            });

            if (!response.ok) {
                throw new Error("Falha ao tentar excluir tarefa!");
            }
            const data = await response.text();
            console.log(data);

        } catch (e) {
            console.error("Erro durante o DELETE", e.message);
        }
    }
    //    DELETE METHOD    //


    //Ao entrar na página, o useEffect dá um fetch na API
    useEffect(() => {
        getTasks();
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, deleteTasks, updateValue, postTask }}>
            {children}
        </TaskContext.Provider>
    );
}