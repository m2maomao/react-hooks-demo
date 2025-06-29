import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './NoEffect/Todos/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
