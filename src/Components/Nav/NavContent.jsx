import React from 'react';
import { NavbarBrand, NavbarToggler } from 'reactstrap';

const NavContent = ({ toggler }) => {
  return (
    <div>
      <NavbarBrand className="">
        <div className="name">
          <div>Bryan C<span>o</span>x</div>
        </div>
      </NavbarBrand>
      <NavbarBrand >
        <div className="desc ml-5">
          <div>Full Stack Devel<span>o</span>per |</div> 
        </div>
      </NavbarBrand>
      <NavbarBrand>
        <div className="road">
          <div>R<span>o</span>ad Warri<span>o</span>r</div>
        </div>
      </NavbarBrand>
      <NavbarBrand>
        <div className="road">
          <div>| Extra-Dimensi<span>o</span>nal Refugee</div>
        </div>
      </NavbarBrand>
      <NavbarToggler onClick={ toggler } />
    </div>
  );
}

export default NavContent;