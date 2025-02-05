import React from 'react'
import { useRef, useState } from 'react'

function App() {
  let nameInput = useRef()
  let [user, setUser] = useState('coder')
  function submitHandler() {
    //console.log(nameInput.current.value);
    
    let name = nameInput.current.value
    setUser(name)
  }
  return (
  <>
  <h1 className='flex flex-row justify-center items-center text-4xl mt-8'>Hello, {user}!</h1>
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="max-w-md mx-auto my-16 relative">
        <input ref={nameInput} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter something" required />

        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={submitHandler}>Submit</button>
    </div>
  </>    

)
}

export default App
