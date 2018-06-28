import React from 'react';
import ContactInfo from './ContactInfo';
import Skills from './Skills';
import SectionTitle from './SectionTitle';
import ListItem from './ListItem';
import Projects from './Projects';

const RightContainer = () => (
  <div className="container--right">
    <ContactInfo />

    <SectionTitle icon="trophy" title="Awards" style={{ marginTop: '15px' }} />
    <ul className="skills--list">
      <ListItem>3rd Place HackNJIT - 2016</ListItem>
      <ListItem>Sponsor Price HackNJIT - 2014</ListItem>
    </ul>

    <Skills />

    <SectionTitle title="Projects" icon="folder-open" />
    <Projects />
  </div>
);

export default RightContainer;
