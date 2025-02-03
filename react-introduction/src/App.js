import React from 'react';
import { useState } from 'react';
import './index.css'
//let counter = 0;   

function App() {
  
  let [counter, setCounter] = useState(0);
  let [visbilility, setVisibility] = useState(false);
  
  function incrementHandler() {
    /* counter = counter + 1;
     console.log(counter); */

      setCounter(counter + 1);
      setVisibility(!visbilility);
  }
  return (
   <div className="flex flex-col items-center my-40">
      <h1 className='text-4xl font-bold'>Counter App.</h1>
      <h1 className='mt-12 text-5xl font-semibold '>{counter}</h1>

      <button className='py-4 px-8 bg-blue-600 text-white font-semibold text-2xl rounded-full my-8 border-none' onClick={incrementHandler}>Increment +</button>
   
      <div className={visbilility === true ? 'h-32 w-32 bg-red-500 rounded-xl' : 'hidden' }> </div>
   </div> 
  );
}

export default App;
