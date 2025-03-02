import React, { useEffect, useState } from "react";
import './App.css';


function App() {
// useEffect example

  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log(counter);
  },[counter])

  return (
    <>
      <div>
        <h1 className="text-9xl font-bold text-white text-center bg-blue-600">Counter App</h1>
        <p className="text-5xl font-bold text-center my-8 text-white"> Count: {counter}</p>
        <div className="flex justify-center">
          <button className="px-8 py-4 rounded-md text-2xl cursor-pointer font-bold bg-green-500" onClick={() => setCounter(counter + 1)}>Increment +  </button>
        </div>
      </div>
    </>
  )
}

export default App;
