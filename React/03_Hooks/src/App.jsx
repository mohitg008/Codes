import { useState } from 'react'
import './App.css'

function App(){
 let [counter,setCounter] = useState(5);
 
 const add =()=>{
  setCounter(counter+1);
 }
 const remove = () =>{

  if(counter < 1){
    counter = 1;}
  setCounter(counter-1);
  
 }

  return(
    <>
    <h1>Learning React</h1>
    <h1>Counter : {counter}</h1>   
      <button onClick={add}>Add {counter}</button>
      <button onClick={remove}>Remove {counter}</button>
    </>
  )
}



export default App
