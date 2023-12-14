import './App.css'
import { useRenderFormContext } from './context/RenderFormContext';
import Form from './components/Form/Form';
import Header from './components/Header/Header.jsx';
import RenderTasks from './components/RenderTasks/RenderTasks';
import TaskSection from './components/TaskSection/TaskSection';
import { useEffect } from 'react';
import { useTaskContext } from './context/TaskContext.jsx';



function App() {
  const { tasks } = useTaskContext();
  const { formState } = useRenderFormContext();

  useEffect(()=> {

  } 
  ,[tasks])

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
