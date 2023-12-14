import { createContext, useContext, useState, useEffect } from "react";
import fetchApi from "../api/fetchApi";
export const TaskContext = createContext();

export class TaskData {
    constructor(id, taskName, taskType) {
        this.id = id;
        this.taskName = taskName;
        this.taskType = taskType;
    }
    static createWithoutId(taskName, taskType) {
        return new TaskData(null, taskName, taskType);
    }
}

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

        const deleteTasks = tasks.filter((element) => element.id != id); // Delete tasks
        setTasks(deleteTasks);
        deleteTask(id);
    }

    //    GET METHOD    //
    async function getTasks() {

        //Dá fetch na api e atualiza as tasks para serem renderizadas
        const url = "http://localhost:8080/tasks/all";
        const { success, data, error } = await fetchApi(url);

        if (success) {
            let newTask;
            // Vai percorrer o retorno da API pra extrair os dados e renderiza-los
            for (let i = 0; i < data.length; i++) {
                newTask = new TaskData(data[i].id, data[i].taskName, data[i].taskType);
                updateValue(newTask);

            }
        } else {
            console.error("Erro ao solicitar dados da API", error);
        }
    }
    //    GET METHOD    //


    //    POST METHOD    //
    async function postTask(newTask) {

        const url = "http://localhost:8080/tasks/cadastrar";

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

            const data = await response.text();
            console.log(data);
        } catch (e) {
            console.error("Erro durante a requisição POST", e.message);
        };

    }
    //    POST METHOD    //


    //    DELETE METHOD    //

    async function deleteTask(id) {
        const url = `http://localhost:8080/tasks/excluir/${id}`;
        console.log(id);
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


    //Atualiza os valores vindos da API
    useEffect(() => {
        getTasks();
    }, []);
    return (
        <TaskContext.Provider value={{ tasks, changeTaskBehavior, updateValue, postTask }}>
            {children}
        </TaskContext.Provider>
    );
}