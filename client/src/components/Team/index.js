import React from "react";
import "./style.css";

function Team(props) {
  return(
    <div>
      <h1>Meet the Team</h1>
      <div>
        {props.teamMember.map(employee => <div key={employee.key}>
          <h3>{employee.name}</h3>
          <img src={require(`../imgs/${props.name}.png`)} />
          <p>{employee.role}</p>
          <p>{employee.message}</p>
          </div>
          )}
      </div>
    </div>
  )


  // const [isOpen, setIsOpen] = useState(false);

  // return(
  //   <div className="team">
  //     <button type="submit" onClick={() =>
  //     {setIsOpen(!isOpen)}}> <a id="smoothscroll" className="smoothscroll" href="#teamMembers">Meet the Team!</a></button>
  //     {isOpen ?
  //       <div className="modal-team">
  //       </div>
  //      : null}
  //   </div>
  // )
}
export default Team;