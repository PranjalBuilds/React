import React, { createContext } from 'react'
import { loginContext } from '../../../App'

const SinglePost = () => {
    const login = useContext(loginContext);
    console.log(login);
    
  return (
    <div>SinglePost</div>
  )
}

export default SinglePost