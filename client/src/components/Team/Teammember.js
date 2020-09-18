import React, { Component } from "react";
// import "./App.css";
function Teammember({ name, role, message }) {
    return (
        <div id="teammembers" className="team">
            <h3>{name}</h3>
            <h4>{role}</h4>
            <p>{message}</p>
        </div>
    );
}
export default Teammember;