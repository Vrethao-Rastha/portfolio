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
      // <div>
      //   <Navbar color="light" light expand="md">
      //     <Collapse isOpen={this.state.isOpen} navbar>
      //       <Nav className="mr-auto" navbar>
            
      //       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      //   {/* Nav Area */}
        
      // </ul>

      //   <div className="">
      //     <NavbarBrand className="id-block1 navbar-brand ">
      //       <div>Bryan C<span>o</span>x </div>
          
      //    </NavbarBrand>
      //    <NavbarBrand className="id-block2 navbar-brand">
      //     Full Stack Devel<span>o</span>per | <br/> <strong>R<span>o</span>ad Warri<span>o</span>r</strong>
      //    </NavbarBrand>
      //   </div>
            
      
      //       </Nav>
      //     </Collapse>
      //   </Navbar>
      // </div>

      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0">
        <ul className="navbar-nav mr-auto">
        <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Options
                </DropdownToggle>
                <DropdownMenu left>
                <DropdownItem className="" >
                <a className="nav-link-1 nav-link" href="#about-bar">
            <FontAwesomeIcon icon="coffee" color="#586295" size="1x"/>
            <span className="about">Ab<span>o</span>ut Me</span>
          </a>
                </DropdownItem>
                  <DropdownItem>
                  <a className="nav-link-1 nav-link" href="#project-bar">
            <FontAwesomeIcon icon="wrench" color="#3C4955" size="1x"/>
            <span className="about">Pr<span>o</span>jects</span>
          </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="nav-link-1 nav-link" href="#skills-bar">
            <FontAwesomeIcon icon="user-ninja" color="#5E482C" size="1x"/>
            <span className="about">Skills</span>
          </a>
                  </DropdownItem>
                  
                  <DropdownItem>
                  <a className="nav-link-1 nav-link" href="#education-bar">
            <FontAwesomeIcon icon="book" color="#867B59" size="1x"/>
            <span className="about">Educati<span>o</span>n</span>
          </a>
                  </DropdownItem>
                  <DropdownItem>
                  <a className="nav-link-1 nav-link" href="https://resume.creddle.io/resume/boq922xiceu" target="_blank">
            <FontAwesomeIcon icon="file" color="#C7BB8A" size="1x"/>
            <span className="about">Resume</span>
          </a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <a className="nav-link-1 nav-link" href="#contact-bar">
            <FontAwesomeIcon icon="address-book" color="#C7BB8A" size="1x"/>
            <span className="about">C<span>o</span>ntact</span>
          </a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
        {/* <li id="about" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="#about-bar">
            <FontAwesomeIcon icon="coffee" color="#586295" size="1x"/>
            <span className="about">Ab<span>o</span>ut Me</span>
          </a>
        </li>
        <li id="projects" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="#project-bar">
            <FontAwesomeIcon icon="wrench" color="#3C4955" size="1x"/>
            <span className="about">Pr<span>o</span>jects</span>
          </a>
        </li>
        <li id="skills" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="#skills-bar">
            <FontAwesomeIcon icon="user-ninja" color="#5E482C" size="1x"/>
            <span className="about">Skills</span>
          </a>
        </li>
        <li id="education" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="#education-bar">
            <FontAwesomeIcon icon="book" color="#867B59" size="1x"/>
            <span className="about">Educati<span>o</span>n</span>
          </a>
        </li>
        <li id="resume" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="https://resume.creddle.io/resume/boq922xiceu" target="_blank">
            <FontAwesomeIcon icon="file" color="#C7BB8A" size="1x"/>
            <span className="about">Resume</span>
          </a>
        </li>
        <li id="contact" className="dropdown-item">
          <a className="nav-link-1 nav-link" href="#contact-bar">
            <FontAwesomeIcon icon="address-book" color="#C7BB8A" size="1x"/>
            <span className="about">C<span>o</span>ntact</span>
          </a>
        </li> */}
        
        </ul>
    </div>
    <div className="mx-auto order-0">
        <div className="navbar-brand mx-auto">Bryan C<span>o</span>x</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            Full Stack Devel<span>o</span>per |
            </li>
            <li className="nav-item">
            <strong>R<span>o</span>ad Warri<span>o</span>r</strong>
            </li>
        </ul>
    </div>
</nav>



    //   <div id="side-nav" className="nav-section navbar navbar-expand-lg navbar-light bg-light" role="navagation">

    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#PortNavbar" aria-controls="navbarSupportedContent" aria-expand="false" aria-label="Toggle navigation"></button>

    // <div id="PortNavbar">
      // <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

      //   {/* Id section */}
      //   <div className="id-block1 navbar-brand">
      //     Bryan C<span>o</span>x <br/>
      //   </div>
      //   <div className="id-block2 navbar-brand">
      //     Full Stack Devel<span>o</span>per | <br/> <strong>R<span>o</span>ad Warri<span>o</span>r</strong>
      //   </div>
      //   <hr/>

      //   {/* Nav Area */}
      //   <li id="about" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="#about-bar">
      //       <FontAwesomeIcon icon="coffee" color="#586295" size="1x"/>
      //       <span className="about">Ab<span>o</span>ut Me</span>
      //     </a>
      //   </li>
      //   <li id="projects" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="#project-bar">
      //       <FontAwesomeIcon icon="wrench" color="#3C4955" size="1x"/>
      //       <span className="about">Pr<span>o</span>jects</span>
      //     </a>
      //   </li>
      //   <li id="skills" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="#skills-bar">
      //       <FontAwesomeIcon icon="user-ninja" color="#5E482C" size="1x"/>
      //       <span className="about">Skills</span>
      //     </a>
      //   </li>
      //   <li id="education" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="#education-bar">
      //       <FontAwesomeIcon icon="book" color="#867B59" size="1x"/>
      //       <span className="about">Educati<span>o</span>n</span>
      //     </a>
      //   </li>
      //   <li id="resume" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="https://resume.creddle.io/resume/boq922xiceu" target="_blank">
      //       <FontAwesomeIcon icon="file" color="#C7BB8A" size="1x"/>
      //       <span className="about">Resume</span>
      //     </a>
      //   </li>
      //   <li id="contact" className="nav-item">
      //     <a className="nav-link-1 nav-link" href="#contact-bar">
      //       <FontAwesomeIcon icon="address-book" color="#C7BB8A" size="1x"/>
      //       <span className="about">C<span>o</span>ntact</span>
      //     </a>
      //   </li>
      // </ul>
    // </div>
    
    // </div>
    );
  }
}

export default TopNav;
