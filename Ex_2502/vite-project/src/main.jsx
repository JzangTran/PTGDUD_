import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components-bt1/App'
import StudentManager from './components-bt2/StudentManager'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentManager />
  </StrictMode>,
)
