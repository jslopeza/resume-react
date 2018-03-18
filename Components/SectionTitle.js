import React from 'react';
import Icon from './Icon';
import './sectionTitle.scss';

const SectionTitle = ({ title, icon, style }) => (
  <div className="section" style={style}>
    <Icon className="section--icon">{icon}</Icon>
    <h3 className="section--title"> {title}</h3>
  </div>
);

export default SectionTitle;
