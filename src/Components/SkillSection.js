import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';
import Html from './Skills/Html'
import Javascript from './Skills/Javascript'
import BackEnd from './Skills/BackEnd'
import Other from './Skills/Other'





class SkillSection extends Component {
  render() {
    return (
      <div className="section-2" id="skills">
        <div className="skills-heading">Skills</div>

          <div className="row">
            <div className="col-md-10">

              <Html />

              <Javascript />

              <BackEnd />

              <Other />

          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
