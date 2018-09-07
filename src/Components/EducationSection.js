import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Media } from 'reactstrap';
import galPic from '../images/download.png'

class EducationSection extends Component {
  render() {
    return (
      <div className="section-2" id="education">
        <div className='education-heading'> Educati<span>o</span>n</div>

        <div className="col-md-10">
          <Card className="col-md-6 offset-md-3 education-card">
            <Media>
              <Media left>
                <CardImg className="eduPic" src={ galPic }></CardImg>
              </Media>
              <Media body>
                <Media heading>
                  Galvanize
                </Media>
                  <CardSubtitle className="edu-subtitle">Phoenix,AZ</CardSubtitle>
                  700+ hours hands on classroom instruction in Full Stack Web Development
              </Media>
            </Media>
          </Card>
        </div>
      </div>
    );
  }
}

export default EducationSection;
