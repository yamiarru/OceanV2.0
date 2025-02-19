import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css";
import "./assets/css/skeleton.css";
import "./assets/css/footer.css";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
