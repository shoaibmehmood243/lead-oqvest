import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './../node_modules/primeflex/primeflex.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='bg-blue-50'>
    <App />
  </div>
  </React.StrictMode>,
)
