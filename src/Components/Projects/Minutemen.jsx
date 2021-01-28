import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter,
  CardTitle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import flag from '../../images/Fo4-minutemen-flag.png'

class Minutemen extends Component {

  state = {
    toggle: false
  }

  toggle = e => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 project-card">
        {(this.state.toggle === false &&
        <Card className="projects-content ">
          <CardImg top width="100%" style={{maxHeight:"50%"}} src={flag} alt="Card image cap" />
          <CardBody>
            <CardTitle className="projects-title">We Are the Minutemen</CardTitle>
              <CardText>My final school project. News/Blog page and IBM Watson survival assistant chatbot.
              </CardText>
            <Button className="project-button mt-auto" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}
        {(this.state.toggle === true &&
          <Card className="projects-content ">
            <Button className="toggle-project-button mt-auto" onClick={this.toggle}>X</Button>
            <CardBody>
                <CardText>My Galvanize Capstone project. A reimagining of my Radio Freedom project, React/Redux, Bootstrap, Ruby on Rails, Bluemix, JSON web tokens for authentication and an IBM Watson powered survival assistant chatbot to help you survive the post apocalyptic wasteland.<br/>
                Login credentials are Guest, Guest@email.com, password:12345
                </CardText>
            </CardBody>
            <CardFooter className="project-footer">
              <a href="https://immense-temple-74459.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon="laptop" color="#586295" size="4x"/>
            </a>
            <a href="https://github.com/Vrethao-Rastha/we-are-the-minutemen" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="font-icon" icon={["fab","github-square"]} color="#586295" size="4x"/>
            </a>
            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default Minutemen;
