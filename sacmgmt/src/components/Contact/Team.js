import React, { useEffect, useState, useRef } from 'react'


function Team() {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <div className="Team">
        <button onClick={() => setIsOpen(!isOpen)}>Meet Our Team</button>
        {isOpen ? (
          <div className="modal">
            <p>Modal is open!!!!</p>
          </div>
        ) : null}
      </div>
    )
}

export default Team;


