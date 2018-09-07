import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIf from './Util'
import React, {Component} from 'react';

class TopNav extends Component {

  state = {

  };


  render() {
    return (
      <div className="nav-section" >

      <ul className="nav flex-column">

        {/* Id section */}
        <div className="id-block1">
          Bryan C<span>o</span>x <br/>
        </div>
        <div className="id-block2">
          Full Stack Devel<span>o</span>per | <br/> <strong>R<span>o</span>ad Warri<span>o</span>r</strong>
        </div>
        <hr/>

        {/* Nav Area */}
        <li className="nav-item-1">
          <a className="nav-link-1 nav-link" href="#about">
            <FontAwesomeIcon icon="coffee" color="#586295" size="1x"/>
            <span className="about">Ab<span>o</span>ut Me</span>
          </a>
        </li>
        <li  className="nav-item-2">
          <a className="nav-link-1 nav-link" href="#projects">
            <FontAwesomeIcon icon="wrench" color="#3C4955" size="1x"/>
            <span className="about">Pr<span>o</span>jects</span>
          </a>
        </li>
        <li  className="nav-item-2">
          <a className="nav-link-1 nav-link" href="#skills">
            <FontAwesomeIcon icon="user-ninja" color="#5E482C" size="1x"/>
            <span className="about">Skills</span>
          </a>
        </li>
        <li  className="nav-item-2">
          <a className="nav-link-1 nav-link" href="#education">
            <FontAwesomeIcon icon="book" color="#867B59" size="1x"/>
            <span className="about">Educati<span>o</span>n</span>
          </a>
        </li>
        <li  className="nav-item-2">
          <a className="nav-link-1 nav-link" href="#resume">
            <FontAwesomeIcon icon="file" color="#C7BB8A" size="1x"/>
            <span className="about">Resume</span>
          </a>
        </li>
        <li  className="nav-item-2">
          <a className="nav-link-1 nav-link" href="#contact">
            <FontAwesomeIcon icon="address-book" color="#C7BB8A" size="1x"/>
            <span className="about">C<span>o</span>ntact</span>
          </a>
        </li>
      </ul>
    </div>
    );
  }
}

export default TopNav;
