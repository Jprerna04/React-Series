import { useState, useEffect, useRef} from 'react'
import { useCallback } from 'react'

function App() {
  
  const[length, setlength]=useState(8);
  const[numberAllowed, setnumberAllowed]=useState(false)
  const[charsAllowed, setcharAllowed]=useState(false)
  const[password, setPassword]=useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if(charsAllowed) str+="!@#$%^&*_+-"

    for (let i=1;i<=length; i++){
      let char=Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charsAllowed, setPassword])
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charsAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setnumberAllowed((prev)=>!prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={charsAllowed}
            id="charsInput"
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label>Characters</label>
            </div>
        </div>
      </div>
  )
}

export default App
