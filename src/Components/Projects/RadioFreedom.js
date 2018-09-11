import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from '../Util'
class RadioFreedom extends Component {

  state = {
    toggle: false
  }

  toggle = e => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 project-card">
        {renderIf(this.state.toggle === false,
        <Card className="projects-content ">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle className="projects-title"><span>Radi<span>o</span> Freed<span>o</span>m</span></CardTitle>
                <CardText>A news/blog page to be used by the residents of post apocalyptic Boston in the Bethesda game Fallout 4.
                </CardText>
              <Button className="project-button" onClick={this.toggle}>Details</Button>
            </CardBody>
          </Card>
        )}


          {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button" onClick={this.toggle}>X</Button>
            <CardBody>

              <CardText>My first school project, three weeks in.<br/>
              Also my first ever project, having never written code three weeks prior.<br/>
              Simple forward facing app using HTML, CSS and JavaScript.

            </CardText>
          </CardBody>
          <CardFooter className="project-footer">
            <a href="http://www.google.com" target="_blank">
            <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
          </a>
          <a href="http://www.google.com" target="_blank">
            <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
          </a>
          </CardFooter>
        </Card>
        )}
      </div>
    );
  }
}

export default RadioFreedom;
