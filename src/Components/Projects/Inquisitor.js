import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from '../Util'
import aquila from '../../images/AquilaBlack.jpg'

class Inquisitor extends Component {

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
          <CardImg top width="100%" style={{maxHeight:"50%"}} src={aquila} alt="Card image cap" />
          <CardBody>
            <CardTitle className="projects-title"><span>40k Inquisit<span>o</span>r's Assistant</span></CardTitle>
              <CardText>A visual aid of sorts for the Warhammer 40k RPG I run on friday nights.
              </CardText>
            <Button className="project-button mt-auto" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}

        {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button mt-auto" onClick={this.toggle}>X</Button>

            <CardBody>

                <CardText>Simple interactive UI, React/Redux, Express, PostgreSQL, Bootstrap. I used React Particle Effect Button and React Glitch for the CSS effects.
                 <br/> A hands on way for my players to investigate computer records, search for Heretics, etc... Login credentials are Username: Guest, Password: asdf
                </CardText>
            </CardBody>
            <CardFooter className="project-footer">
              <a href="https://secret-spire-68753.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
            </a>
            <a href="https://github.com/Vrethao-Rastha/40k-Interface" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
            </a>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default Inquisitor;
