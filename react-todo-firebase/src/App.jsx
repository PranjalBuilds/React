import React, { useRef, useState } from 'react'
import firebaseUrl from '../firebaseConfig'; // see README.md file  
import './App.css'
import AlertToast from './Components/AlertToast';

function App() {
  const titleInput = useRef()
  const descInput = useRef() 

  let [showAlert, setShowAlert] = useState(false)
  let [loader, setLoader] = useState(false)

  async function addTask() {
    setLoader(true)

    let todos = {
      title: titleInput.current.value,
      desc: descInput.current.value
    };
  
    if (!titleInput.current.value.trim() || !descInput.current.value.trim()) {
      alert('Task fields cannot be empty!');
      return;
    }

    try {
      let response = await fetch(firebaseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todos)
      })
      
      setShowAlert(true)
      setLoader(false)
      
      let data = await response.json();
      console.log('Task added:', data);
  
      titleInput.current.value = '';
      descInput.current.value = '';
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  return (
    <div className='max-w-sm mx-auto my-12 box-border'>
      <div className={showAlert == true ? 'flex flex-row align-center place-content-center' : 'hidden'}> <AlertToast/> </div>

      <div className="mb-5">
        <label htmlFor="task" className="block mb-8 text-2xl font-semibold text-gray-900 dark:text-white text-center">Enter your task</label>

        <input ref={titleInput} type="task" id="task" className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-4 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 drop-shadow-sm dark:focus:border-blue-500" placeholder='Work 3 hours ⌚' required />
        
        <input ref={descInput} type="task" id="task" className="bg-gray-50 focus:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 drop-shadow-sm dark:focus:border-blue-500" placeholder="today's task is to study 3 hours without break!" required />

      </div>

      <button type="button" onClick={addTask} className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md">
        <svg width="20" height="20" fill="currentColor" className={loader == true ? "mr-2 animate-spin" : "hidden"} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
            </path>
        </svg>
        Submit
      </button>
    
    </div>  
  )
}

export default App
