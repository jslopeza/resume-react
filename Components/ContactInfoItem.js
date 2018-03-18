import React from 'react';
import Icon from './Icon';
import './contactInfo.scss';

const ContactInfo = ({ children, icon, type }) => (
  <p className="contact-info">
    <Icon type={type}>{icon}</Icon>
    {children}
  </p>
);

export default ContactInfo;
