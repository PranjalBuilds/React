import React from 'react'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import {Link, Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <div className='flex flex-row justify-center items-center text-4xl my-8 gap-8 font-Inter'>

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      

      </div>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} /
        >
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </>
  )
}

export default App
