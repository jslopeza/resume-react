import React from 'react';
import ListItem from './ListItem';

const Projects = () => (
  <ul className="skills--list">
    <ListItem>
      <strong>React Native Elements</strong> - Maintained and developed features
      for Open Source React Native component library.
    </ListItem>
    <ListItem>
      <strong>Smart S</strong> - iOS and Android Tablet application that
      provides information about Weather, News and Traffic Predictions. When
      idle, turns the display into a photo slideshow
    </ListItem>
    <ListItem>
      <strong>Chillflix</strong> - Chillflix lets you search Kat.cr (the popular
      torrent site) and lets you stream those videos to any supported device.
      Along with that it provides you an anonymous chat to talk with anonymous
      peers connected.
    </ListItem>
    <ListItem>
      <strong>Quagsire</strong> - using an USB card reader, record attendance of
      students at meetings by swiping their id. The app was built using
      Electron, NodeJs and Firebase.
    </ListItem>
    <ListItem>
      <strong>Beacon Attendance</strong> - created a hybrid mobile app, which
      can take attendance for a class using Beacon technology.
    </ListItem>
  </ul>
);

export default Projects;
