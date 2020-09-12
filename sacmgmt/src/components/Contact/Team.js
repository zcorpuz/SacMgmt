import React, { useState } from "react"

function Team() {
  const [isOpen, setIsOpen] = useState(false);
  
  return(
    <div className="team">
      <button onClick={() =>
      {setIsOpen(!isOpen)
      console.log(isOpen)}}> Meet The Team</button>
      {isOpen ? 
        <div className="modal-team">
          <p> Modal is open </p>
        </div>
       : null}
    </div>
  )

}

export default Team