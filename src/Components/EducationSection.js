import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Media } from 'reactstrap';
import galPic from '../images/download.png'

// const eduPic = {
//   width: "100%",
//   height: "10em",
//   backgroundSize: "cover",
//   zIndex:"-1",
//   backgroundImage: `url(${galPic})`
// }

class EducationSection extends Component {
  render() {
    return (
      <div className="section-2" id="education">
        <div className='education-heading'> Educati<span>o</span>n</div>

        <div className="col-md-10">
          {/* <Card className="col-md-8 offset-md-2 education-card">
            <CardBody>
              <Media left href="#">
                <CardImg className="eduPic" src={ galPic }></CardImg>
              </Media>
                <CardTitle style={{height:"1em"}} className="col-md-8 ">Galvanize  </CardTitle>
                <CardSubtitle className="col-md-8 ">Phoenix,AZ</CardSubtitle>
                <CardText className="col-md-8 ">
                  700+ hours hands on classroom instruction in Full Stack Web Development
                </CardText>
            </CardBody>
          </Card> */}
          <Card className="col-md-6 offset-md-3 education-card">
          <Media>
      <Media left>
        <CardImg className="eduPic" src={ galPic }></CardImg>
      </Media>
      <Media body>
        <Media heading>
          Galvanize
        </Media>
        <CardSubtitle className="edu-subtitle">Phoenix,AZ</CardSubtitle>
        700+ hours hands on classroom instruction in Full Stack Web Development

      </Media>
    </Media>
  </Card>
        </div>
      </div>
    );
  }
}

export default EducationSection;
