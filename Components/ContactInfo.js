import React from 'react';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';

const contactInfo = [
  {
    icon: 'globe',
    title: 'binoy.io',
  },
  {
    icon: 'envelope',
    title: 'me@binoy.io',
  },
  {
    icon: 'phone',
    title: '267-884-1585',
  },
  {
    icon: 'github',
    title: 'github.com/binoy14',
    type: 'fab',
  },
  {
    icon: 'map-marker',
    title: 'Raleigh, NC',
  },
];

const ContactInfo = () => (
  <React.Fragment>
    <SectionTitle
      title="Contact Info"
      icon="address-book"
      style={{ margin: '20px 0 15px' }}
    />
    {contactInfo.map(item => (
      <ContactInfoItem key={item.title} icon={item.icon} type={item.type}>
        {item.title}
      </ContactInfoItem>
    ))}
  </React.Fragment>
);

export default ContactInfo;
