import React, { useEffect, useState } from "react";
import './App.css';


function App() {
// useEffect example

  const [date, setDate] = useState(0);

  useEffect(()=>{ 
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString())
    },1000)
  },[])

  return (
    <>  
      <div>
        <h1 className="text-9xl font-bold text-white text-center bg-blue-600 selection:bg-[#00FF00] selection:text-black  ">Date: {date}</h1>  
      </div>
    </>
  )
}

export default App;
