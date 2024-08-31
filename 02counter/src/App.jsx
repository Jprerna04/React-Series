import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0);

  const addValue=()=>{
    if (counter<20){
      setCounter(counter+1)
    }
    else{
      alert("Counter cannot exceed 20!")
    }
  }

  const decrementValue=()=>{
    if (counter>0){
      setCounter(counter-1)
    }
    else{
      alert("Counter cannot go below 0!")
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>
        Add value</button>
      <br />
      <button
      onClick={decrementValue}>
        Decrement value</button>
    </>
  )
}

export default App
