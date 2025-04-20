import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'
import './index.css'

//paso 1.7 , renderizamos el AppRouter
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
