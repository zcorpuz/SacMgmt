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
}
export default Team;