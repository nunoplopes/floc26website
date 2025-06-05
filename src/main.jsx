import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  
      <Header />
      <App />
      <Footer/>
    </Router>
  </StrictMode>
)
