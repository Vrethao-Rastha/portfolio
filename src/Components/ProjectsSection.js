import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Cardify from './Projects/Cardify'
import Inquisitor from './Projects/Inquisitor'
import Minutemen from './Projects/Minutemen'
import RadioFreedom from './Projects/RadioFreedom'
import VulkansForge from './Projects/VulkansForge'
import Ticket from './Projects/Ticket'


class ProjectsSection extends Component {
  render() {
    return (
      <div id="project-bar" className="section-2" >
        <div className="projects-heading">Pr<span>o</span>jects</div>
        <div className=" container">
          <div className="project-row ">
            <Row>
          <RadioFreedom />

          <Cardify />

          <VulkansForge />

          <Minutemen />

          <Inquisitor />

          <Ticket />

        </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
