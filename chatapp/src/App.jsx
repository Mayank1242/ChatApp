import { useState } from 'react'
import socketIO from 'socket.io-client';
import './App.css'
import { Outlet } from 'react-router-dom';



function App() {
  
  // socket.on('connect',()=>{
  //   console.log("new connection");
  // })

  return (
    <>

<Outlet/>

      
    </>
  )
}

export default App
