import React, { Component } from 'react';
import { Card, CardText, CardBody, CardImg,
  CardTitle, Row } from 'reactstrap';
import css from '../images/css3.png'
import html from '../images/html5.png'
import JavaScript from '../images/javascript.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import node from '../images/nodejs.png'
import bootstrap from '../images/bootstrap.png'
import materialize from '../images/materialize.png'
import postgresql from '../images/postgresql.png'
import rails from '../images/rails.png'
import ruby from '../images/ruby.png'
import sass from '../images/sass.png'
import ibm from '../images/ibm.jpg'
import watson from '../images/watson.png'
import express from '../images/node-express.jpeg'
import github from '../images/github.png'
import heroku from '../images/heroku.png'


class SkillSection extends Component {
  render() {
    return (
      <div className="section-2" id="skills">
        <div className="skills-heading">Skills</div>

          <div className="row">
            <div className="col-md-10">

            <Card className="skill-card col-md-9 offset-md-2">
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

            <Card className="skill-card col-md-9 offset-md-2">
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
                </Row>

              </CardBody>
            </Card>

            <Card className="skill-card col-md-9 offset-md-2">
              <CardBody className="skill-body">
                <CardTitle className="skill-title">Back-End Tech</CardTitle>
                <hr/>
                <hr/>
                <Row>
                  <div>
                    <CardImg className="image-responsive" src={express}></CardImg>
                    <div className="text-center">
                      Express-Node
                    </div>
                  </div>
                  <div>
                    <CardImg className="image-responsive" src={ruby}></CardImg>
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

                </Row>

              </CardBody>
            </Card>

            <Card className="skill-card col-md-9 offset-md-2">
              <CardBody className="skill-body">
                <CardTitle className="skill-title"><span><span>O</span>ther Skills</span></CardTitle>
                <hr/>
                <Row>
                  <div>
                    <CardImg className="image-responsive" src={ibm}></CardImg>
                    <div className="text-center">
                      IBM Bluemix
                    </div>
                  </div>
                  <div>
                    <CardImg className="image-responsive" src={watson}></CardImg>
                    <div className="text-center">
                      IBM Watson
                    </div>
                  </div>
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
                </Row>

              </CardBody>
            </Card>

          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
