import React from 'react'
import nf from '../assets/nf.svg'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img className='w-24 my-12' src={nf}/>
      <h1 className='text-4xl font-mono font-semibold'>Error 404! Page not found!</h1>
      <p className='mt-4 text-2xl'>The Page you are looking for doesn't exists!</p>
  </div>
  )
}

export default NotFound