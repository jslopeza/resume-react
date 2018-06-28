import React from 'react';
import Title from './Title';
import SectionTitle from './SectionTitle';
import SectionBody from './SectionBody';
import Experiences from './Experiences';

const LeftContainer = () => (
  <div className="container--left">
    <Title />
    {/* Experience */}
    <SectionTitle title="Experiences" icon="briefcase" />
    <Experiences />
    {/* Education */}
    <SectionTitle
      title="Education"
      icon="graduation-cap"
      style={{ marginTop: '10px' }}
    />
    <SectionBody
      title="Bachelor of Science in Web & Information Systems"
      subTitle="New Jersey Institute of Technology"
      rightText="2012 - 2016"
    />
  </div>
);

export default LeftContainer;
