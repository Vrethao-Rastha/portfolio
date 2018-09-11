import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';

import watson from '../../images/watson.png'
import github from '../../images/github.jpg'
import heroku from '../../images/heroku.png'

class Other extends Component {
  render() {
    return (
      <div>
        <Card className="skill-card col-md-9 offset-md-1">
          <CardBody className="skill-body">
            <CardTitle className="skill-title"><span><span>O</span>ther Skills</span></CardTitle>
            <hr/>
            <Row>
              <div>
                <CardImg className="image-responsive" src={github}></CardImg>
                <div className="text-center">
                  Github
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={heroku}></CardImg>
                <div className="text-center">
                  Heroku
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={watson}></CardImg>
                <div className="text-center">
                  IBM Watson
                </div>
              </div>

            </Row>

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Other;
