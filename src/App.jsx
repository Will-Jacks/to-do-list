import './App.css'
import { useRenderFormContext } from './context/Tasks/RenderFormContext.jsx';
import Form from './components/Tasks/Form/Form.jsx';
import Header from './components/Tasks/Header/Header.jsx';
import RenderTasks from './components/Tasks/RenderTasks/RenderTasks';
import TaskSection from './components/Tasks/TaskSection/TaskSection';




function App() {
  const { formState } = useRenderFormContext();

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
