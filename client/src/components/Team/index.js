import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./style.css";

function Team(props) {
  return(
    <Container className="meet-the-team">
      <Row>
        <h1 className="col-md-12 team-title">Meet the Team</h1>
      </Row>
      <Row className="row employee-info">
        {props.teamMember.map(employee => 
          <Col 
            key={employee.key}
            className="employee-card"
            md={5}
            s={12}
          >
            <h3>{employee.name}</h3>
            <img 
              src={require(`../../img/${employee.imgName}.png`)}
              alt={employee.imgAlt}
              className="employee-img"
            />
            <p>{employee.role}</p>
            <p>{employee.message}</p>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Team;