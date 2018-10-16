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
    isOpen: false
  };

  toggle = e => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
        
      <Navbar  color="dark" dark expand="md">
      
    <NavbarToggler onClick={ this.toggle } />
    
        <Collapse isOpen={this.state.isOpen} navbar>
        
        <Nav>
        <ul className="navbar-nav mr-auto">
        
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle className="" nav>
                  Navigation
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
                  <a className="nav-link-1 nav-link" href="https://resume.creddle.io/resume/boq922xiceu" target="_blank" rel="noopener noreferrer">
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
             

        </ul>
        </Nav>
        <NavbarBrand className="mx-auto"><div className="name">
        <div>Bryan C<span>o</span>x</div>
        </div></NavbarBrand>

    
    
        </Collapse>
        <NavbarBrand ><div className="desc"><div>
        Full Stack Devel<span>o</span>per |</div> 
        </div></NavbarBrand>

      <NavbarBrand ><div className="road"><div>R<span>o</span>ad Warri<span>o</span>r
      </div></div></NavbarBrand>
</Navbar>
    );
  }
}

export default TopNav;
