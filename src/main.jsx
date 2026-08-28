import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import LivresProvider from './contexts/LivresContext.jsx'
import PreferencesProvider from './contexts/PreferencesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PreferencesProvider>
        <LivresProvider>
          <App />
        </LivresProvider>
      </PreferencesProvider>
    </BrowserRouter>
  </StrictMode>,
)
