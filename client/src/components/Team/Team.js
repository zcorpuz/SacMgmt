import React, { useState } from "react"
function Team() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="team">
      <button onClick={() =>
      {setIsOpen(!isOpen)}}> <a className="smoothscroll" href="/#teammembers">Meet the team!</a></button>
      {isOpen ?
        <div className="modal-team">
        </div>
       : null}
    </div>
  )
}
export default Team;