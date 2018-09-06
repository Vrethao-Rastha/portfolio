import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import pic from '../images/black-and-white-blueprint-blur-716661.jpg'

  const backgroundStyle = {
    width: "100%",
    height: "80em",
    backgroundSize: "cover",
    zIndex:"-1",
    backgroundImage: `url(${pic})`
  }

class ProjectsSection extends Component {
  render() {
    return (
      <div className="section-2" id="projects" style={backgroundStyle}>
        <div className="projects-heading">Pr<span>o</span>jects</div>
        <div className="col-md-10">
          <div className="row project-row">

          <Card className="col-md-3 offset-md-1 projects-content ">
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Radio Freedom</CardTitle>
                  <CardText>A project done early in my schooling, this is a news/blog page to be used by the residents of post apocalyptic Boston in the Bethesda game Fallout 4.
                  Created in three days, this is an simple front facing webpage using HTML, CSS and Bootstrap, all pictures are captured from in game play, and all blog/news stories are written by me.
                  </CardText>

              </CardBody>
            </Card>

          <Card className="col-md-3 offset-md-1 projects-content ">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Cardify</CardTitle>
                <CardText>A group project with two other students, an attempt to reproduce the basic functionality of Trello.
                I was principally responsible for the database structure, as well as the authorization architecture.
                </CardText>

            </CardBody>
          </Card>

          <Card className="col-md-3 offset-md-1 projects-content ">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Vulkans Forge</CardTitle>
                <CardText>My first attempt at a full stack React/Redux app. The concept of this is a sort of Facebook for Crafters and Cosplayers.
                More of just a preview currently, this showcases a single users' account as well as a feature page for a favorite project.
                </CardText>

            </CardBody>
          </Card>

          <Card className="col-md-3 offset-md-1 projects-content ">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>We Are the Minutemen</CardTitle>
                <CardText>My final school project. This is a React/Redux reworking of my Fallout 4 News/Blog project adding an IBM Watson powered survival assistant chatbot as well as a Ruby on Rails backend. The authentication used JSON Web Tokens.
                </CardText>

            </CardBody>
          </Card>

          <Card className="col-md-3 offset-md-1 projects-content ">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>40k Inquisitor's Assistant</CardTitle>
                <CardText>A visual assistant of sorts for the Warhammer 40k RPG I run on friday nights.
                  When my players need to investigate an encrypted Inquisitorial Cogitator Stack, I use this as a fun little visual aid.
                </CardText>

            </CardBody>
          </Card>

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
