import React, { useEffect } from 'react';
import fetchApi from "../../api/fetchApi";
import { useTaskContext } from "../../context/TaskContext";
class TaskData {
  constructor(taskName, taskType) {
    this.taskName = taskName;
    this.taskType = taskType;
  }
}

const Tasks = () => {
  const { updateValue } = useTaskContext();
  //Dá fetch na api e atualiza as tasks para serem renderizadas
  async function updateTasksWithApiData() {
    const url = "http://localhost:8080/tasks/all";
    const response = await fetchApi(url);

    let newTask;
    for (let i = 0; i < response.length; i++) {
      newTask = new TaskData(response[i].taskName, response[i].taskType);
      updateValue(newTask);
    } // Vai percorrer o retorno da API pra extrair os dados e renderiza-los
  }

  //Atualiza os valores vindos da API
  useEffect(() => {
    updateTasksWithApiData();
  }, []);

  /* return (
    <div>tasks</div>
  ) */
}

export { Tasks, TaskData }