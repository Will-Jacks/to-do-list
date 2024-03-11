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
import UserRegistration from './components/User/UserRegistration.jsx';
import { UsersProvider } from './context/Users/UsersContext.jsx';
import SuccessPage from './success-page.jsx';
const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeUser />,
    errorElement: <ErrorPage />

  },
  {
    path:"/app",
    element: <App />
  },
  {
    path: "/userRegistration",
    element: <UserRegistration />
  }, 
  {
    path: "success/user-registration",
    element: <SuccessPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <UsersProvider>
      <FormProvider>
        <TaskProvider>
          <RenderFormProvider>
            <RouterProvider router={router} />
          </RenderFormProvider>
        </TaskProvider>
      </FormProvider>
    </UsersProvider>
  </div>,
)
