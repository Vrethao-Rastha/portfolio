import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from '../Util'
import Vulkan from '../../images/Vulkan.jpg'

class VulkansForge extends Component {

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
          <CardImg top width="100%" style={{maxHeight:"50%"}} src={Vulkan} alt="Card image cap" />
          <CardBody className="d-flex flex-column">
            <CardTitle className="projects-title"><span>Vulkans F<span>o</span>rge</span></CardTitle>
              <CardText>A social media app for crafters and Cosplayers.
              </CardText>
            <Button className="project-button mt-auto" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}

        {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button" onClick={this.toggle}>X</Button>

            <CardBody>

                <CardText>
                My first attempt at a full stack React app, this was made over the course of four days,
                using React, Redux, Bootstrap, Express and PostgreSQL.<br/>
                </CardText>
            </CardBody>
            <CardFooter className="project-footer">
              <a href="https://polar-bastion-21872.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
            </a>
            <a href="https://github.com/Vrethao-Rastha/q3-final-project" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
            </a>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default VulkansForge;
