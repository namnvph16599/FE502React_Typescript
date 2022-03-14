import { useState } from 'react'
import './App.css'
import ShowInfo from "./components/showInfo"
import type {TypeProduct} from "./types/products"


function App() {
  const [count, setCount] = useState<number>(0)
  const [info,setInfo] = useState<TypeProduct>({name: "ngo nam",age : 20})
  return (
    <div>{<ShowInfo person={info} />}</div>
  )
}

export default App
