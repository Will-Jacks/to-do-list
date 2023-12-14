import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RenderFormProvider } from './context/RenderFormContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';
import { FormProvider } from './context/FormContext.jsx';

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
