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
      <div className="col-md-3 offset-md-1 ">
        {renderIf(this.state.toggle === false,
        <Card className="projects-content ">
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle className="projects-title">Cardify</CardTitle>
              <CardText>A group project with two other students, basic Trello clone.
              </CardText>
            <Button className="project-button" onClick={this.toggle}>Details</Button>
          </CardBody>
        </Card>
      )}

        {renderIf(this.state.toggle === true,
          <Card className="projects-content ">
            <Button className="toggle-project-button" onClick={this.toggle}>X</Button>
            <CardBody>

                <CardText>Server side rendered using Express, EJS, PostgreSQL, Bootstrap

                </CardText>
            </CardBody>
            <CardFooter className="project-footer">

              <FontAwesomeIcon icon="box-open" color="#586295" size="4x"/>
              <FontAwesomeIcon icon={["fab","github-square"]} color="#586295" size="4x"/>

            </CardFooter>
          </Card>
        )}
      </div>
    );
  }
}

export default Cardify;
