import React, { Component } from 'react';
import pic from '../../images/art-close-up-comic-16516.jpg'
import { Card } from 'reactstrap'

const backgroundStyle = {
  width: "100%",
  height: "75em",
  backgroundSize: "cover",
  zIndex:"-1",
  backgroundImage: `url(${pic})`
}

class AboutSection extends Component {
  render() {
    return (
    <div style={backgroundStyle}>
      <div className="section-2">
        <div className="about-heading">
          Ab<span>o</span>ut
        </div>
      <Card id="about-card" className="col-md-8 offset-md-2 about-card">
        <div className="about-statement text-center">
          Full Stack Devel<span>o</span>per l<span>oo</span>king t<span>o</span> change the w<span>o</span>rld.</div>
          <br/>
          <div className="about-content text-center">
            I've always enjoyed creating and building things, solving problems, helping people.
            <br/>
            I enjoy using technology to achieve silly ends, like Arduino powered 3D printed Cosplay props,
            <br/>
            fabricated post apocalyptic Mad Max inspired furniture.
            <br/>
            Self described Scandinavian symphonic metal junkie.
            <br/>
            There is just something indescribably satisfying in seeing numerous small parts slot together perfectly to create a smooth running machine. I think thats what I enjoy most about writing code.
          </div>
        </Card>
      </div>
    </div>
    );
  }
}

export default AboutSection;
