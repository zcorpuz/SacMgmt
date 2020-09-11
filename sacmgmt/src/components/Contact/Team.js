import React, { useEffect, useState, useRef } from 'react'


function Team() {
    const outside = useRef()
    const [isOpen, setIsOpen] = useState(false)
  
    const handleClick = e => {
      if (outside.current.contains(e.target)) {
        return
      }
      setIsOpen(false)
    }
  
    useEffect(() => {
      const getClick = document.addEventListener('click', handleClick)
  
      return () => {
        getClick()
      }
    }, [])
  
    return (
      <div className="Team" ref={outside}>
        <button onClick={() => setIsOpen(!isOpen)}>Meet Our Team</button>
        {isOpen ? (
          <div className="modal">
            <p>Modal is open!!!</p>
          </div>
        ) : null}
      </div>
    )
}

export default Team;


