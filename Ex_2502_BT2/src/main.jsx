import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StudentManager from './components-bt2/StudentManager'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentManager />
  </StrictMode>,
)
