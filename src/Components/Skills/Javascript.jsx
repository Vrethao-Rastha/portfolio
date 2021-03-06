import React, { Component } from 'react';
import { Card, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';

import JavaScript from '../../images/javascript.png'
import react from '../../images/react.png'
import redux from '../../images/redux.png'
import node from '../../images/nodejs.png'
import angular from '../../images/angular.png'


class Javascript extends Component {
  render() {
    return (
      <div>
        <Card className="skill-card col-md-9 offset-md-1">
          <CardBody className="skill-body">
            <CardTitle className="skill-title">JavaScript</CardTitle>
            <hr/>
            <Row>

              <div>
                <CardImg className="image-responsive" src={react}></CardImg>
                <div className="text-center">
                  React
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={redux}></CardImg>
                <div className="text-center">
                  Redux
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={JavaScript}></CardImg>
                <div className="text-center">
                  JavaScript
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={node}></CardImg>
                <div className="text-center">
                  NodeJS
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={angular}></CardImg>
                <div className="text-center">
                  Angular
                </div>
              </div>
            </Row>

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Javascript;
