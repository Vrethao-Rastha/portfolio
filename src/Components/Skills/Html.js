import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';
import css from '../../images/css3.png'
import html from '../../images/html5.png'
import react from '../../images/react.png'
import bootstrap from '../../images/bootstrap.png'
import materialize from '../../images/materialize.png'
import sass from '../../images/sass.png'

class Html extends Component {
  render() {
    return (
      <div>
        <Card className="skill-card col-md-9 offset-md-1">
          <CardBody className="skill-body">
            <CardTitle className="skill-title">HTML/CSS</CardTitle>
            <hr/>
            <Row>
              <div>
                <CardImg className="image-responsive" src={css}></CardImg>
                <div className="text-center">
                  CSS3
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={html}></CardImg>
                <div className="text-center">
                  HTML5
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={react}></CardImg>
                <div className="text-center">
                  JSX
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={bootstrap}></CardImg>
                <div className="text-center">
                  Bootstrap
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={materialize}></CardImg>
                <div className="text-center">
                  Materialize
                </div>
              </div>
              <div>
                <CardImg className="image-responsive" src={sass}></CardImg>
                <div className="text-center">
                  Sass
                </div>
              </div>
            </Row>

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Html;
