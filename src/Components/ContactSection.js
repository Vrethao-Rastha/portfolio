import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class ContactSection extends Component {
  render() {
    return (
      <div id="contact-bar" className="section-2 contact col-sm-12" >
        <div className="contact-heading">C<span>o</span>ntact</div>
        <div className="icon-section">
          <div className=" row align-items-center">
            <FontAwesomeIcon className="contact-icon" icon={["fab","linkedin"]} color="#586295" size="4x"/> <span className="contact-span"><p className="contact-text">https://www.linkedin.c<span>o</span>m/in/bryan-c<span>o</span>x-r</p></span>
          </div>
          <div className=" row align-items-center">
            <FontAwesomeIcon className="contact-icon" icon={["fab","github-square"]} color="#586295" size="4x"/> <span className="contact-span"><p className="contact-text">https://github.c<span>o</span>m/Vretha<span>o</span>-Rastha</p></span>
          </div>
          <div className=" row align-items-center">
            <FontAwesomeIcon className="contact-icon" icon="envelope-square" color="#586295" size="4x"/> <span className="contact-span"><p className="contact-text">bryanc71@yah<span>oo</span>.c<span>o</span>m</p></span>
          </div>
          <div className="contact-icon-last"></div>

        </div>
      </div>
    );
  }
}

export default ContactSection;
