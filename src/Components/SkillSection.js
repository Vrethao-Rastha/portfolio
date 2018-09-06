import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle } from 'reactstrap';

class SkillSection extends Component {
  render() {
    return (
      <div className="section-2" id="skills">
        <div className="skills-heading">Skills</div>

          <div className="row">
            <div className="col-md-10">

            <Card className="skill-card col-md-8 offset-md-2">
              <CardBody>
                <CardTitle>HTML/CSS</CardTitle>
                <hr/>
                stuff goes here
              </CardBody>
            </Card>

            <Card className="skill-card col-md-8 offset-md-2">
              <CardBody>
                <CardTitle>JavaScript</CardTitle>
                <hr/>
                stuff goes here
              </CardBody>
            </Card>

            <Card className="skill-card col-md-8 offset-md-2">
              <CardBody>
                <CardTitle>Back-End Tech</CardTitle>
                <hr/>
                stuff goes here
              </CardBody>
            </Card>

            <Card className="skill-card col-md-8 offset-md-2">
              <CardBody>
                <CardTitle>Other Skills</CardTitle>
                <hr/>
                stuff goes here
              </CardBody>
            </Card>

          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
