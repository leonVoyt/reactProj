import React from 'react'
import App from './App'
import * as ReactDOMClient from 'react-dom/client'
import './css/index.css'

const sta = ReactDOMClient.createRoot(document.getElementById('root'))
sta.render(<App />)
