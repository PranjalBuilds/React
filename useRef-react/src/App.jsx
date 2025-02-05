import React from 'react'
import { useRef, useState } from 'react'
import Users from './component/Users'

function App() {
  let nameInput = useRef()
  let emailInput = useRef()

  let [user, setUser] = useState([])
  
  function addUser() {
    let name = nameInput.current.value 
    let email = emailInput.current.value
    //console.log(name, email);

    let currentUser =  {
        name: name, 
        email: email
    }

    setUser([...user, currentUser])    
    
    nameInput.current.value = ''
    emailInput.current.value = ''

  }

  return (
  
  <div className='h-screen flex justify-center place-items-center relative'>
    
    <div id="form" className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 space-y-6">
        <h5 className="text-xl font-semibold text-center text-gray-900 dark:text-white"> Manage Users at once! 🧑‍💻 </h5>
        
        <div>
            <label htmlFor="person" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your name</label>
                <input ref={nameInput} type="text" name="person" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
         </div>
            
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter email</label>
                <input ref={emailInput} type="email" name="email" placeholder="example@abc.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:placeholder-gray-400 dark:text-white" required />
        </div>        
            
        <button type="submit" onClick={addUser} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add user</button>
        
    </div>

    <div id="displayUsers" className='absolute top-2 right-8'>
        
        <h2 className='my-8 text-2xl font-bold text-center'> Registered users </h2>
       
        {
            user.map((user) => {
                return <Users name={user.name} email={user.email} />
            })  
        }
       
    </div>
  </div>    

)
}

export default App