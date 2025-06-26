import React, { useState } from 'react'

export default function Mode() {
//  const[set,reset] = useState(0);
// const increment  =() =>{
//   reset(set+1);
// }
// const[rander,rerander]= useState(9);
// const decrement =() =>{
//   rerander(rander-1)
// }
const[backgroundColor,Reset] = useState("white");
const  mode =() =>{
 Reset(backgroundColor==="white"?"black":"white")
}
//  var color = "white";
//  if(color ==="black"){
//   console.log("true")
//  }
//    else(console.log("false"))
  return (
    <div>
      {/* <h1>increment:{set}</h1>
      <h1>Decrement:{rander}</h1>
      <button onClick={increment}>Increment:</button>
      <button onClick={decrement}>Decrement</button> */}
       <button onClick={mode}>change:</button>
      <h1 style={{backgroundColor,height:"80vh",width:"100%",color:"white"}} >Display:{backgroundColor}</h1>
    </div>
  )
}
