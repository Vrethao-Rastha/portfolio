import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from '../Util'
class Cardify extends Component {

  state = {
    toggle: false
  }

  toggle = e => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <div className="project-card col-lg-4 col-md-6 col-sm-12 col-xs-12">
        {renderIf(this.state.toggle === false,
        <Card className="projects-content ">
          <CardImg top width="100%" style={{maxHeight:"50%"}}src="https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
          <CardBody className="d-flex flex-column">
            <CardTitle className="projects-title">Cardify</CardTitle>
              <CardText>A group project with two other students, basic Trello clone.
              </CardText>
            <Button className="project-button mt-auto" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}

        {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button mt-auto" onClick={this.toggle}>X</Button>
            <CardBody>

                <CardText>Server side rendered using Express, EJS, PostgreSQL, Bootstrap.<br/>
                I was responsable for the Admin functionality as well as the authentication.<br/>
                Created in three days as a group project.
                </CardText>
            </CardBody>
            <CardFooter className="project-footer">
              <a href="https://rocky-retreat-92627.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
            </a>
            <a href="https://github.com/Vrethao-Rastha/Q2-Group-Project" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
            </a>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default Cardify;
