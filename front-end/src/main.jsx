import React from 'react'
import ReactDOM from 'react-dom/client'
import { Pages } from "./pages/index.jsx";
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>
)
