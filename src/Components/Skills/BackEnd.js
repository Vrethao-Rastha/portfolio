import React, { Component } from 'react';
import { Card, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';

import postgresql from '../../images/postgresql.png'
import rails from '../../images/rails.png'
import ruby from '../../images/ruby.png'
import express from '../../images/node-express.jpeg'
import MongoDB from '../../images/MongoDB.jpg'

class BackEnd extends Component {
  render() {
    return (
      <div>
        <Card className="skill-card col-md-9 offset-md-1">
          <CardBody className="skill-body">
            <CardTitle className="skill-title">Back-End Tech</CardTitle>
            <hr/>
            
            <Row>
              <div>
                <CardImg className="image-responsive pic-fix" src={express}></CardImg>
                <div className="text-center">
                  Express-Node
                </div>
              </div>
              <div>
                <CardImg className="image-responsive pic-fix-2" src={ruby}></CardImg>
                <div className="text-center">
                  Ruby
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={rails}></CardImg>
                <div className="text-center">
                  Rails
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={postgresql}></CardImg>
                <div className="text-center">
                  PostgreSQL
                </div>
              </div>
              <div>
                <CardImg className="image-responsive pic-fix" src={MongoDB}></CardImg>
                <div className="text-center">
                  MongoDB
                </div>
              </div>

            </Row>

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BackEnd;
