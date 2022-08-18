
import React, { useRef, useState } from 'react'

function Add(props)
{
 const nm=useRef()
 const im=useRef()
 const rate=useRef()
 const addmovie=()=>{
    props.setMovie( [
        ...props.movies,              {name:nm.current.value,image:im.current.value,rate:rate.current.value}
    ])
 }

  return <>
  <input type={"text"} ref={nm} placeholder="votre nom"></input>
  <input type={"text"} ref={im} placeholder="votre image"></input>
  <input type={"text"} ref={rate} placeholder="votre rating" ></input>
  <button onClick={addmovie}>Ajoouter</button>
  </>
    
}

export default Add