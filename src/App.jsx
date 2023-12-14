import './App.css'
import { useRenderFormContext } from './context/RenderFormContext';
import Form from './components/Form/Form';
import Header from './components/Header/Header.jsx';
import RenderTasks from './components/RenderTasks/RenderTasks';
import TaskSection from './components/TaskSection/TaskSection';
import { useEffect } from 'react';
import fetchApi from './api/fetchApi.js';
import { useFormContext } from './context/FormContext.jsx';
import { TaskData } from './components/Form/Form.jsx';

function App() {
  const { formState } = useRenderFormContext();
  const { tasks, setLocalStorageTasks } = useFormContext();

  //Dá fetch na api e atualiza as tasks para serem renderizadas
  async function updateTasksWithApiData() {
    const url = "http://localhost:8080/controller/tasks";
    const response = await fetchApi(url);
    

    //Espera o localstorage terminar a promise para depois setar com os dados da API
    if (tasks.length > 0) {

      for (let i = 0; i < response.length; i++) {
        const newTask = new TaskData(response[i].taskName, response[i].taskType);
        setLocalStorageTasks(newTask);
      } // Vai percorrer o retorno da API pra extrair os dados e renderiza-los

    }
  }

  //Atualiza os valores vindos da API
  useEffect(() => {
    updateTasksWithApiData();
  }, []);

  return (
    <div className='container-app'>
      <Header />
      <TaskSection />

      {
        formState ? (<Form />) : ''
      }
      <RenderTasks />
    </div>
  )
}

export default App
