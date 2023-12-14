import './App.css'
import { useRenderFormContext } from './context/RenderFormContext';
import Form from './components/Form/Form';
import Header from './components/Header/Header.jsx';
import RenderTasks from './components/RenderTasks/RenderTasks';
import TaskSection from './components/TaskSection/TaskSection';
import FinishedTasks from './components/FinishedTasks/FinishedTasks.jsx';
import { useEffect } from 'react';
import fetchApi from './api/fetchApi.js';
import { useFormContext } from './context/FormContext.jsx';

function App() {
  const { formState } = useRenderFormContext();
  const { updateValue } = useFormContext();

  //Dá fetch na api e atualiza as tasks para serem renderizadas
  async function updateTasksWithApiData() {
    const url = "http://localhost:8080/api/ola";
    const apiData = await fetchApi(url);
    
    updateValue(apiData);
}


useEffect(()=> {
    updateTasksWithApiData();
},[])

  return (
    <div className='container-app'>
      <Header />
      <TaskSection />

      {
        formState ? (<Form />) : ''
      }
     {/*  <FinishedTasks /> */}
      <RenderTasks />
    </div>
  )
}

export default App
