import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainLayout } from '@/layouts/MainLayout'
import '@/styles/main.css'

function App() {
  return (
    <MainLayout />
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <App />
    </>
  </React.StrictMode>,
)
