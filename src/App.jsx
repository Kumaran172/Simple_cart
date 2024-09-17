import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Total, setTotal] = useState(0)
  const [computer, setcomputer] = useState(0)
  const [chair, setchair] = useState(0)
  const [tv, settv] = useState(0)
  const [watch, setwatch] = useState(0)
  const [quantity, setquantity]=useState(1)

  const handleIncrement = () => {
    setcomputer(computer+1);
  }

  const handledecrement= () => {
    setcomputer(computer-1);
  }

  const handleIn = () => {
    setchair(chair+1);
  }

  const handlede= () => {
    setchair(chair-1);
  }

  const handleInc = () => {
    settv(tv+1);
  }

  const handledec= () => {
    settv(tv-1);
  }

  const handleIncre = () => {
    setwatch(watch+1);
  }

  const handledecre= () => {
    setwatch(watch-1);
  }
return (
  <>
      <th>applliance</th><td>|</td><th>Quantity</th>
      <tr>
        <td>price:50,000</td>
        <td>computer :  {""}</td>
        <input
        value={computer}
        type='number'/>
         <button onClick={handleIncrement}>+</button>
         <button onClick={handledecrement}>-</button>
      </tr>
      <tr>
      <td>price:700</td>
        <td>chair :  {""}</td>
        <input
        value={chair}
        type='number'/>
         <button onClick={handleIn}>+</button>
         <button onClick={handlede}>-</button>
      </tr>
      <tr>
      <td>price:45,000</td>
        <td>tv :  {""}</td>
        <input
        value={tv}
        type='number'/>
         <button onClick={handleInc}>+</button>
         <button onClick={handledec} className='comp-text'>-</button>
      </tr>
      <tr>
      <td>price:3,000</td>
        <td>watch :  {""}</td>
        <input
        value={watch}
        type='number'/>
         <button onClick={handleIncre} className='comp-text'>+</button>
         <button onClick={handledecre} className='comp-text'>-</button>
      </tr>
      <tr>
        <td><button onClick={()=>{
          setTotal(parseInt(computer*50000)+parseInt(chair*700)+parseInt(tv*45000)+parseInt(watch*3000));
        }}>Grand price:<h3>{Total}</h3></button></td>
      </tr>
    </>
  )
}

export default App
