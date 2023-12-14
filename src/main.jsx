import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RenderFormProvider } from './context/RenderFormContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <TaskProvider>
      <RenderFormProvider>
        <App />
      </RenderFormProvider>
    </TaskProvider>
  </div>,
)
