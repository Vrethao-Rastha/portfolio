import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from '../Util'
import ticket from '../../images/ticket.jpg'

class Ticket extends Component {

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
          <CardImg top width="100%" style={{maxHeight:"50%"}} src={ticket} alt="Card image cap" />
          <CardBody className="d-flex flex-column">
            <CardTitle className="projects-title">Ticket Manager</CardTitle>
              <CardText>A Simple app to manage workorders created with Angular and MongoDB
              </CardText>
            <Button className="project-button mt-auto col-md-3" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}

        {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button" onClick={this.toggle}>X</Button>

            <CardBody>

                <CardText>
                Created as part of a challenge to learn the MEAN stack.<br/>
                A simple CRUD app to manage workorders using Angular, MongoDB, Mongoose Express and Node.js
                </CardText>
            </CardBody>
            <CardFooter className="project-footer">
              <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
            </a>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
            </a>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default Ticket;
