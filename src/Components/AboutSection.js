import React, { Component } from 'react';
import pic from '../images/art-close-up-comic-16516.jpg'
import { Card } from 'reactstrap'

const backgroundStyle = {
  width: "100%",
  height: "65em",
  backgroundSize: "cover",
  zIndex:"-1",
  backgroundImage: `url(${pic})`
}

class AboutSection extends Component {
  render() {
    return (
      <div id="about-bar" className="section-2" style={backgroundStyle}>

        <div className="about-heading">
          Ab<span>o</span>ut
        </div>

      <Card id="about-card" className="col-md-8 offset-md-2 about-card">
        <div className="about-statement text-center">
          Full Stack Devel<span>o</span>per l<span>oo</span>king t<span>o</span> change the w<span>o</span>rld.</div>
          <br/>
          <div className="about-content text-center">
            I've always enjoyed creating and building things, solving problems, helping people.
            In my past life as a high end glass technician I was able to fulfill those desires, but only one person at a time, and this was not the extent I was looking for.
            <br/>
            <br/>
            As a web developer I find I can make much more of a difference.
            Perhaps I'm not saving the world, but I can leave it a little better than it was when I got here.
          </div>
        </Card>
      </div>
    );
  }
}

export default AboutSection;
