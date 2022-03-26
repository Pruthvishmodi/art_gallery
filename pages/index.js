import React, { useRef, useEffect } from 'react'

const Index = () => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, [])

  return (
    <div className='"relative h-screen mb-12 overflow-hidden'>
      <video ref={videoRef} muted loop className="absolute -z-10 w-auto min-w-full min-h-full max-w-none" preload>
        <source src="http://abhishekkharsani.com/wp-content/uploads/2021/04/abhishek1.mp4" type="video/mp4" />
      </video>
<div className="flex p-2 text-white justify-around">
     <img className="image" src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_60,w_165/v1648279748/you%20x%20potfolia%20image/th-removebg-preview_aooxmz.webp" alt="logo" />
      <nav className="xyz gap-20 flex p-2" >
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#journal">Journal</a>
      <a href="#project">project</a>
      <a href="#contact">Contact</a>
      </nav>
      </div>
      <div className="allitem flex flex-col justify-center items-center mx-auto h-full ">
      <div className="filmpage text-white flex justify-between items-center w-6/12 mx-auto">
        <span>FILM</span><span>||</span><span>VIDEO</span><span>||</span><span>ANIMATION</span>
      </div>
      <h1 className="heading text-white text-7xl from-neutral-400 w-2/3 text-center mx-auto flex items-center my-8">A Good Ending is The Most Important</h1>
     <div className="button text-white flex justify-center gap-8 p-8 ">
      <a className="border-2 border-white bg-gray-400 p-2" href="#viewprojects ">VIEW PROJECTS</a>
      <a className="border-2 border-red-600 bg-red-600 p-2" href="#hireusnow">HIRE US NOW</a>
        </div> 
        </div>
    
    
    
    </div>
   
  )
}

export default Index