import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Green');
  const [status, setStatus] = useState(false);
  const arrayColor = ['blue', 'red', 'yellow', 'violent']
  const [products, setProducts] = useState([{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }, { id: 3, name: "Product 3" }])
  const handlerChangeColor = () => {
    const index = Math.floor((Math.random() * 4));
    console.log(index);
    setColor(arrayColor[index]);
  }
  const handlerRemoveProduct = (id) => {
    console.log(id);
    const newProducts = products.filter(item => item.id !== id);
    setProducts(newProducts);
  }
  return (
    <div>
      <div style={{ background: color, width: 100, height: 100 }}>Content</div>
      <button onClick={handlerChangeColor}>Change Color</button>
      <div>Status : {status ? 'Hiện' : 'Ẩn'}</div>
      <button onClick={() => setStatus(!status)}>Toggle Status</button>
      <p>--------------------------------</p>



      <div>
        {products.map(val => <div>{val.name}
          <button onClick={() => { handlerRemoveProduct(val.id) }}>
            Delete
          </button></div>)}
      </div>
    </div>
  )
}

export default App


