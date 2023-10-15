import './App.css'
import Form from './components/Form/Form';
import Header from './components/Header/Header.jsx';
import RenderTasks from './components/RenderTasks/RenderTasks';
import { useFormContext } from './context/FormContext';
import { useRenderFormContext } from './context/RenderFormContext';

import TaskSection from './components/TaskSection/TaskSection';

function App() {

  const { tasks } = useFormContext();
  const { formState, updateFormState } = useRenderFormContext();

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
