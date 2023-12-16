import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RenderFormProvider } from './context/Tasks/RenderFormContext.jsx';
import { TaskProvider } from './context/Tasks/TaskContext.jsx';
import { FormProvider } from './context/Tasks/FormContext.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeUser from './components/User/HomeUser.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeUser />,
    errorElement: <ErrorPage />

  },
  {
    path:"/home",
    element: <App />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <FormProvider>
      <TaskProvider>
        <RenderFormProvider>
          <RouterProvider router={router} />
        </RenderFormProvider>
      </TaskProvider>
    </FormProvider>
  </div>,
)
