import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const handleClick = () => {
    console.log(count);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  )
}

export default App
