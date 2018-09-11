import React, { Component } from 'react';
import TopNav from './TopNav'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SkillSection from './SkillSection'
import EducationSection from './EducationSection'
import ContactSection from './ContactSection'

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TopNav />
        <div className="Landing"></div>

        <AboutSection />

        <ProjectsSection />

        <SkillSection />

        <EducationSection />

        <ContactSection />
    </div>
    );
  }
}

export default Landing;
