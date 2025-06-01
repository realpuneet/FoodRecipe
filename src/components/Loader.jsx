import React from 'react'
import loadingAnimation from '../assets/ezgif-3f2d84fe7dad5b.gif'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen mx-auto'> 
      <img className='h-50 w-50 object-cover' src={loadingAnimation} alt="Loading animation" />
    </div>
  )
}

export default Loader
