import React from 'react'
import { useState } from 'react'
function Usestate() {
     //SUESTATE: 'USESTATE()' is react that allow you to manage the state in functionalncomponents.
  //SYNTAX: import {useState} from "react"
  //const [name,setName] = useState("") --> const[variable : store the value,function : to update the value]
  const [count, setcount] = useState(0) //count is assigned a value but never used
  function increasevalue(){
    setcount((prev) => prev +1)
  }

  function decreasevalue(){
    setcount((prev) => prev -1)
  }
  function show(){
    alert(`your value is :${count}`)
  }
  function addvalue(){
    const value = prompt("please enter your value:");
    setcount(value)
  }

  return (
    <div>
      <h1>USESTATE</h1>
      <h2>count:{count}</h2>
      <button onClick={increasevalue}>add</button>
      <button onClick={decreasevalue}>reduce</button>
      <button onClick={show}>show</button>
      <button onClick={addvalue}>ADD VALUE</button>
    </div>
  )
}

export default Usestate
