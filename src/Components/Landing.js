import React, { Component } from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import TopNav from './TopNav'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SkillSection from './SkillSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'

class Landing extends Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({modal: !this.state.modal})
  }

  componentDidMount() {
    setTimeout(() => {this.setState({modal: true})}, 1500)
    setTimeout(() => {this.setState({modal: false})}, 5000)
  }

  render() {
    return (
      <div style={{padding:"0"}} className="container-fluid">
        <TopNav />
        <div className="Landing"></div>

        <div id="about-bar" style={{paddingBottom:"5em"}}></div>

        <AboutSection />

        <div id="project-bar" style={{paddingBottom:"5em"}}></div>

        <ProjectsSection />

        <div id="skills-bar" style={{marginBottom:"6.5em"}}></div>

        <SkillSection />

        <div id="education-bar"  style={{marginBottom:"5em"}}></div>

        <EducationSection />

        <div id="contact-bar"  style={{marginBottom:"7em"}}></div>

        <ContactSection />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} style={{marginTop:"10em", fontFamily:"Cinzel"}}>
          <ModalHeader toggle={this.toggle}><div>Full Stack Devel<span>o</span>per at y<span>o</span>ur service.</div></ModalHeader>

        </Modal>

    </div>
    );
  }
}

export default Landing;
