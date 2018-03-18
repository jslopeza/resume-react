import React from 'react';
import SectionTitle from './SectionTitle';
import './skills.scss';

const skills = [
  'Javascript',
  'Typescript',
  'ES2015+',
  'React',
  'Redux',
  'React Native',
  'NodeJs',
  'GraphQL',
  'Electron',
  'Firebase',
  'Gatsby',
  'Postgresql',
  'MongoDb',
  'RethinkDb',
  'Git',
  'HTML',
  'CSS',
  'Docker',
];

const Skills = () => (
  <div>
    <SectionTitle title="Skills" icon="laptop" />
    <p className="skills--content">{skills.join(', ')}</p>

    <h4 className="skills--heading">Miscellaneous Skills</h4>
    <ul className="skills--list">
      <li className="skills--list--item">
        Agile Development and Continuous Integration methods
      </li>
      <li className="skills--list--item">Unix Command Line</li>
      <li className="skills--list--item">
        Deploying and hosting applications on AWS or custom linux server
      </li>
    </ul>
  </div>
);

export default Skills;
