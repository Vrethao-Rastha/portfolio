import React, {Component} from 'react';
import {
  Navbar,
} from 'reactstrap';
import NavMenu from '../Nav/NavMenu';
import NavContent from '../Nav/NavContent';

class Navigation extends Component {
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
          <NavContent className="justify-content-end" toggler={this.toggler} />
          <NavMenu isOpen={this.state.isOpen} />    
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
