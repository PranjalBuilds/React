import React, { useEffect, useState } from 'react'
import { API } from '../../API' // see README
import axios from 'axios';

const Movie = () => {
    const [data, setData] = useState([])
    const getMovieData =  async () => {
        try {
            const res = await axios.get(API);
            console.log(res);
            // setData(res)
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