import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
const container = document.querySelector('#root')
if(container) {
    ReactDOM.render(<App /> ,container)
}
