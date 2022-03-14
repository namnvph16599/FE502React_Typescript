import { useState } from 'react'
import './App.css'
import ShowInfo from "./components/showInfo"

function App() {
  const [count, setCount] = useState(0)

  const name = "nam";
  const age = 20;
  const person= {
    childrenName : 'ngo nam',
    age : 20
  }
  return (
    <div>{<ShowInfo person={person} name={name} age={age} />}</div>
  )
}

export default App
