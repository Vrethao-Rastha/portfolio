import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button, Row } from 'reactstrap';
import Cardify from './Projects/Cardify'
import Inquisitor from './Projects/Inquisitor'
import Minutemen from './Projects/Minutemen'
import RadioFreedom from './Projects/RadioFreedom'
import VulkansForge from './Projects/VulkansForge'

import pic from '../images/black-and-white-blueprint-blur-716661.jpg'

  const backgroundStyle = {
    width: "90%",
    height: "80em",
    backgroundSize: "cover",
    zIndex:"-1",
    backgroundImage: `url(${pic})`
  }

class ProjectsSection extends Component {
  render() {
    return (
      <div id="project-bar" className="section-2" style={backgroundStyle}>
        <div className="projects-heading">Pr<span>o</span>jects</div>
        <div className="col-md-10">
          <div className="project-row">
            <Row>
          <RadioFreedom />

          <Cardify />

          <VulkansForge />

          <Minutemen />

          <Inquisitor />
        </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
