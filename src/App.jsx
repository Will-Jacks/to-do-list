import './App.css'
import { useRenderFormContext } from './context/RenderFormContext';
import Form from './components/Form/Form';
import Header from './components/Header/Header.jsx';
import RenderTasks from './components/RenderTasks/RenderTasks';
import TaskSection from './components/TaskSection/TaskSection';
import FinishedTasks from './components/FinishedTasks/FinishedTasks.jsx';
import FetchAPI from './components/FetchAPI/FetchAPI.jsx';

function App() {
  const { formState } = useRenderFormContext();

  return (
    <div className='container-app'>
      <FetchAPI />
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
