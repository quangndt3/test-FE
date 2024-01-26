import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
export const userContext = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <userContext.Provider value={JSON.parse(localStorage.getItem('user'))}>
    <App />
    </userContext.Provider>
  </React.StrictMode>,
)
