import React from 'react';
import Title from './Title';
import SectionTitle from './SectionTitle';
import SectionBody from './SectionBody';

const LeftContainer = () => (
  <div className="container--left">
    <Title />
    {/* Experience */}
    <SectionTitle title="Experiences" icon="work" />
    <SectionBody
      title="Application Developer"
      subTitle="ADP"
      rightText="July 17 - Present"
      body={[
        'Culpa duis consectetur incididunt reprehenderit esse nostrud non quis velit consequat.',
        'Sit aliqua veniam esse reprehenderit aliqua excepteur consectetur officia ullamco quis eu cillum.',
        'Adipisicing fugiat esse dolor nisi aute excepteur quis sit aute ipsum.',
        'Voluptate incididunt aute ex anim deserunt excepteur nisi quis mollit sint eiusmod.',
      ]}
    />
    <SectionBody
      title="Web Developer Intern"
      subTitle="ADP"
      rightText="Jun 16 - Dec 16"
      body={[
        'Converted an AngularJS application to use Typescript and Webpack, modularizing our code and decreasing load times and number of requests by over 75%',
        'Refactored internal AngularJS library to allow compatibility with modular code.',
        'Rewrote AngularJS application in React and Redux from ground up and configured development environment Docker.',
      ]}
    />
    <SectionBody
      title="Junior Software Developer"
      subTitle="Monimus LLC - Showdme"
      rightText="Fed 15 - Dec 15"
      body={[
        'Created new features based on business specifications and designs provided.',
        'Updated application interface based on provided designs.',
        'Managed team of 4 people offshore by reviewing their work, assigning them tasks and working with them to assure the timeline was met and the tasks were delivered.',
      ]}
    />
    <SectionBody
      title="Web Tier Intern"
      subTitle="ADP"
      rightText="Jan 15 - Apr 15"
      body={[
        'Created a MEAN stack application that would get configuration files from multiple servers and provide an interface for user to query the configurations.',
      ]}
    />
    <SectionBody
      title="Intern Software Developer"
      subTitle="Addteq"
      rightText="Nov 14 - Jan 15"
      body={[
        'Worked on adding new features and fixed issues with existing project. That made heavy use of Bootstrap and jQuery.',
        'Wrote Back-End modules using Perl and MySql for supporting new FrontEnd features.',
      ]}
    />
    <SectionBody
      title="Software Engineering Intern"
      subTitle="McGraw Hill Financial - S&P Capital IQ"
      rightText="Jun 14 - Aug 14"
      body={[
        'Converted server rendered multi page application into a single page application using ExtJS.',
        'Created search bar with typeahead which queried Apache Solr for data.',
        'Created custom component in ExtJS which would streamline the migration process by providing consistent look.',
      ]}
    />

    {/* Education */}
    <SectionTitle title="Education" icon="school" />
    <SectionBody
      title="Bachelor of Science in Web & Information Systems"
      subTitle="New Jersey Institute of Technology"
      rightText="2012 - 2016"
    />
  </div>
);

export default LeftContainer;
