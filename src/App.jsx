import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import { ToastContainer } from 'react-toastify/unstyled'
import Loader from './components/Loader'
// import { set } from 'react-hook-form'
import App2 from './App2'

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(()=>{
    setLoader(true);
    // Simulate a loading delay
    setTimeout(() => {
      setLoader(false);
    }, 2000); // 2 seconds delay
  },[])


  return (
    <div>
      {loader ?<Loader/>: <App2 />}
      <ToastContainer/>
    </div>
  )
}

export default App
