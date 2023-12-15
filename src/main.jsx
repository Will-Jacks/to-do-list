import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RenderFormProvider } from './context/Tasks/RenderFormContext.jsx';
import { TaskProvider } from './context/Tasks/TaskContext.jsx';
import { FormProvider } from './context/Tasks/FormContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <FormProvider>
      <TaskProvider>
        <RenderFormProvider>
          <App />
        </RenderFormProvider>
      </TaskProvider>
    </FormProvider>
  </div>,
)
