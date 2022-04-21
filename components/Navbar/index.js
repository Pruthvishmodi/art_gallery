import React from 'react'

const index = ({children}) => {
  return (
      <>
      <div className="relative z-20 flex p-8 text-white justify-around">
      <img
        className="image"
        src="https://res.cloudinary.com/pruthvish/image/upload/c_scale,h_60,w_165/v1648279748/you%20x%20potfolia%20image/th-removebg-preview_aooxmz.webp"
        alt="logo"
      />
      <nav className="xyz gap-12 flex p-8">
        <a href="/work">Work</a>
        <a href="/about">About</a>
        <a href="#journal">Journal</a>
        <a href="#project">project</a>
        <a href="#contact">Contact</a>
      </nav>
          </div>
          {children}
      </>
  )
}

export default index