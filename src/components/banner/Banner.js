import React, { useEffect, useState } from 'react'
import "./Banner.css"
import {API_KEY,IMG_URL} from "../../constants/constants"
import axios from "../../axios"

function Banner() {

    const[movie,setMovie]=useState()
    console.log(movie)
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            //  console.log(response.data.results[0])
             setMovie(response.data.results[0])
        })
    },[])

  return (
    <div className='banner' style={{backgroundImage : `URL(${movie?IMG_URL+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='discription'> {movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
