import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';

class TopNav extends Component {

  state = {
    isOpen: false
  };

  toggler = e => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
        <div className="container-fluid no-gutters">
      <Navbar style={{position:"fixed", top:"0", left:"0", width:"100%", marginLeft:"0", zIndex:"1"}}  color="dark" dark expand="md">


       <NavbarBrand className=""><div className="name">
        <div>Bryan C<span>o</span>x</div>
        </div></NavbarBrand>

            <NavbarToggler onClick={ this.toggler } />


    <NavbarBrand ><div className="desc ml-5"><div>
        Full Stack Devel<span>o</span>per |</div> 
        </div></NavbarBrand>

      <NavbarBrand className=""><div className="road"><div>R<span>o</span>ad Warri<span>o</span>r
      </div></div></NavbarBrand>
      

        <Collapse isOpen={this.state.isOpen} navbar>
        
        <Nav className="ml-auto">
        <div className="row align-items-center">
        
        <UncontrolledDropdown className="col drop" nav inNavbar>
          <DropdownToggle nav>
          <div className="desc">Navigati<span>o</span>n</div>
                </DropdownToggle>
                
                <DropdownMenu right>
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
             

        </div>
        </Nav>
        

    
    
        </Collapse>
        
</Navbar>
</div>
    );
  }
}

export default TopNav;
