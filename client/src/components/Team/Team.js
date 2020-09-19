import React, { useState } from "react"


function Team() {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className="team">
      <button type="submit" onClick={() =>
      {setIsOpen(!isOpen)}}> <a id="smoothscroll" className="smoothscroll" href="#teamMembers">Meet the Team!</a></button>
      {isOpen ?
        <div className="modal-team">
        </div>
       : null}
    </div>
  )
}
export default Team;