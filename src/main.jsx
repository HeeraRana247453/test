// Node Modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Components
import App from './App.jsx'
// CSS links
import './index.css'
import 'lenis/dist/lenis.css'//This is lenis css for smooth scrool animation


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
