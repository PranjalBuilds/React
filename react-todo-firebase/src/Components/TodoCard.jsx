import React from 'react'

const TodoCard = (props) => {
  return (
    <div className='w-96 h-auto border border-slate-600 rounded-md p-4 mx-auto my-4'>
        <h3 className='font-bold text-xl text-white'>{props.title}</h3>
        <p className=' text-sm text-slate-500'>{props.desc}</p>
    </div>
  )
}

export default TodoCard