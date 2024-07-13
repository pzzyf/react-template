import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/main.css'
import App from '@/providers'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
