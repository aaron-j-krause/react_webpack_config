import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const reactNode = document.createElement('div')
document.body.insertBefore(reactNode, document.body.firstChild)

const FirstComponent = () => (
  <h1>YO</h1>
)

ReactDOM.render(<FirstComponent />, reactNode)
