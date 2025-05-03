import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/features.css'
import './styles/steps.css'
import './styles/menu.css'
import './styles/footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
