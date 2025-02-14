import React from 'react'

const TodoCard = (props) => {

  const firebaseDeleteUrl = import.meta.env.VITE_DELETE_TODO; // see README.md file
  const deletingTodo = firebaseDeleteUrl + props.id + '.json'
    
    const deleteTodo = () => { 
      fetch(deletingTodo, {
        method: 'DELETE', 
      }).then(() => {
        console.log("Deleted");
        props.onDelete(props.id);
      })
    }
  return (
    <div className='flex w-96 h-auto border border-slate-600 rounded-md p-4 mx-auto my-4 justify-between items-center'>
      <div className='flex-1'>
        <h3 className='font-bold text-xl'>{props.title}</h3>
        <p className=' text-sm text-slate-500'>{props.desc}</p>
      </div>

      <button onClick={deleteTodo} className='hover:bg-red-100 hover:rounded-2xl p-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>  
        </svg>
      </button>

    </div>  
  )
}

export default TodoCard;