import React from 'react';
import './sectionTitle.scss';

const SectionTitle = ({ title, icon }) => (
  <div className="section">
    <i className="material-icons section--icon">{icon}</i>
    <h3 className="section--title"> {title}</h3>
  </div>
);

export default SectionTitle;
