import React, { useEffect, useState } from 'react';
import fetchApi from "../../api/fetchApi";
import { useTaskContext } from "../../context/TaskContext";
class TaskData {
  constructor(taskName, taskType) {
    this.taskName = taskName;
    this.taskType = taskType;
  }
}

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

const Tasks = () => {
  const { updateValue } = useTaskContext();

  //    GET METHOD    //
  async function getTasks() {
    
    //Dá fetch na api e atualiza as tasks para serem renderizadas
    const url = "http://localhost:8080/tasks/all";
    const { success, data, error } = await fetchApi(url);

    if (success) {
      let newTask;
      for (let i = 0; i < data.length; i++) {
        newTask = new TaskData(data[i].taskName, data[i].taskType);
        updateValue(newTask)
      } // Vai percorrer o retorno da API pra extrair os dados e renderiza-los
    } else {
      console.error("Erro ao solicitar dados da API", error);
    }
  }
//    GET METHOD    //
  

  //Atualiza os valores vindos da API
  useEffect(() => {
    getTasks();
  }, []);
}

export { Tasks, TaskData, postTask}