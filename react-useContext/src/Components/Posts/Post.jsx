import React, { useContext } from 'react'
import { SinglePost } from './Single-Posts/SinglePost.jsx';
import { LoginContext } from '../../App.jsx'

const Post = () => {
  return (
      <div>Post
          <SinglePost/>
      </div>
  )
}

export default Post