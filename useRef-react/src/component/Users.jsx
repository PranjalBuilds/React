import React from 'react'

const Users = (props) => {
  return (
    <div className='flex gap-8 max-w-96 mx-auto mt-2 px-16 py-4 border border-gray-300 rounded-xl shadow-md'>
        <div className='inline-flex'> {props.name} </div>
        <div className='inline-flex'> {props.email} </div>
    </div>
  )
}

export default Users