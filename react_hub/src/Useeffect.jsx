import React from 'react'
import { useEffect, useState } from 'react'

function Useeffect() {
    //USEEFFECT: 'useEffect()' is a react hook to preform the side effect in functional component.
    //syntax: useEffect(()=>())
    const [count,setcount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setcount((prev)=> prev +1);
    },1000);
  },[]);
  return (
    <div>
      <h1>USEEFFECT</h1>
      <h2>COUNTER VALUE: {count}</h2>
    </div>
  )
}

export default Useeffect
