import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowAge from './ShowAge'
const showAge = age => <p>{age}</p> //funci

ReactDOM.render(
  <div>
    {showAge(12)}
    {<ShowAge age={13} />}
    {<App />}
  </div>
  , document.getElementById('root')
)
