import React, { useEffect } from 'react'
import { API } from '../../API' // see README.md
import axios from 'axios';

const Movie = () => {
    
    const getMovieData =  async () => {
        try {
            const res = await axios.get(API);
            console.log(res);
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieData();
    })
    
    return (
     <>
        
     </>
  )
}

export default Movie