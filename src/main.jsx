import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import EntryPoint from './components/EntryPoint'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <EntryPoint />
    </HashRouter>
  </React.StrictMode>,
)
