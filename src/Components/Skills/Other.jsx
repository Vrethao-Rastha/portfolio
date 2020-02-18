import React, { Component } from 'react';
import { Card, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';

import watson from '../../images/watson.png';
import github from '../../images/github.jpg';
import heroku from '../../images/heroku.png';
import jenkins from '../../images/jenkins.jpg';
import bitbucket from '../../images/bitbucket.png';
import jira from '../../images/jira.png';

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
                <CardImg className="image-responsive" src={jenkins}></CardImg>
                <div className="text-center">
                  Jenkins
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={bitbucket}></CardImg>
                <div className="text-center">
                  Bitbucket
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={jira}></CardImg>
                <div className="text-center">
                  jira
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={heroku}></CardImg>
                <div className="text-center">
                  Heroku
                </div>
              </div>
              <div>
                <CardImg className="image-responsive pic-fix-2" src={watson}></CardImg>
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
