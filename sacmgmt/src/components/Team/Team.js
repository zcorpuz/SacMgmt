import React, { useState } from "react"
function Team() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD:sacmgmt/src/components/Contact/Team.js
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
=======
  
    return (
      <div className="Team" ref={outside}>
        <button onClick={() => setIsOpen(!isOpen)}>Meet Our Team</button>
        {isOpen ? (
          <div className="modal-team">

            
            </div>
        ) : null}
      </div>
    )
}

export default Team;
>>>>>>> 9e9f3ae1bfad759662776313828a67fbdbf8ef0d:sacmgmt/src/components/Team/Team.js
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
<<<<<<< HEAD:sacmgmt/src/components/Contact/Team.js
}
=======



>>>>>>> 9e9f3ae1bfad759662776313828a67fbdbf8ef0d:sacmgmt/src/components/Team/Team.js
export default Team