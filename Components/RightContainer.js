import React from 'react';
import ContactInfo from './ContactInfo';
import Skills from './Skills';
import SectionTitle from './SectionTitle';

const RightContainer = () => (
  <div className="container--right">
    <ContactInfo />

    <SectionTitle icon="trophy" title="Awards" style={{ marginTop: '15px' }} />
    <ul className="skills--list">
      <li className="skills--list--item">3rd Place HackNJIT - 2016</li>
      <li className="skills--list--item">Sponsor Price HackNJIT - 2014</li>
    </ul>

    <Skills />

    <SectionTitle title="Projects" icon="folder-open" />
    <ul className="skills--list">
      <li className="skills--list--item">
        <strong>Price Calculator</strong> - discount and tax calculator made for
        Android and iOS using React Native.
      </li>
      <li className="skills--list--item">
        <strong>Chillflix</strong> - Chillflix lets you search Kat.cr (the
        popular torrent site) and lets you stream those videos to any supported
        device. Along with that it provides you an anonymous chat to talk with
        anonymous peers connected.
      </li>
      <li className="skills--list--item">
        <strong>Quagsire</strong> - using an USB card reader, record attendance
        of students at meetings by swiping their id. The app was built using
        Electron, NodeJs and Firebase.
      </li>
      <li className="skills--list--item">
        <strong>Beacon Attendance</strong> - created a hybrid mobile app, which
        can take attendance for a class using Beacon technology
      </li>
    </ul>
  </div>
);

export default RightContainer;
