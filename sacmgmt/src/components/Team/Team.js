import React, { useState } from "react"
function Team() {
  const [isOpen, setIsOpen] = useState(false);
  //   return (
  //     <div className="Team" ref={outside}>
  //       <button onClick={() => setIsOpen(!isOpen)}>Meet Our Team</button>
  //       {isOpen ? (
  //         <div className="modal-team">
  //           </div>
  //       ) : null}
  //     </div>
  //   )
// export default Team;
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
export default Team;