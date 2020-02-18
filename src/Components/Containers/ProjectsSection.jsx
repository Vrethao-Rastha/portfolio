import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Cardify from '../Projects/Cardify'
import Inquisitor from '../Projects/Inquisitor'
import Minutemen from '../Projects/Minutemen'
import RadioFreedom from '../Projects/RadioFreedom'
import VulkansForge from '../Projects/VulkansForge'
import Ticket from '../Projects/Ticket'


class ProjectsSection extends Component {
  render() {
    return (
      <div className="section-2" >
        <div className="projects-heading">Pr<span>o</span>jects</div>
        <div className=" container">
          <div className="project-row ">
          <div className="text-center" style={{fontFamily:"Cinzel", marginTop:"1em"}}>Note: these are currently hosted on free Heroku servers, and may load slowly.
          </div>
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
