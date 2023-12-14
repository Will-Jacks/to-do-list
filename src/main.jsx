import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RenderFormProvider } from './context/RenderFormContext.jsx';
import { FormProvider } from './context/FormContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <FormProvider>
      <RenderFormProvider>
        <App />
      </RenderFormProvider>
    </FormProvider>
  </div>,
)
