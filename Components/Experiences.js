import React from "react";
import SectionBody from "./SectionBody";

const Experiences = () => (
  <React.Fragment>
    <SectionBody
      company="The Knot Worldwide (previously xogroup)"
      title="Senior Software Engineer"
      rightText="Dec 18 - Present"
      body={[
        "Contributed to the architecture and development of the Wedding Website product that lets users create and customize their personal website. This included multiple products some authenticated user facing and others public that users can share with their guests.",
        "Helped transition public facing application from Rails templates to NextJS improving design, performance and SEO.",
        "Created a component library for sharing features across applications, providing consistency, removing duplication of efforts and decreasing development time of new features.",
        "Created a GraphQL API on AWS Lambdas. This GraphQL API combined multiple GraphQL and REST APIs into a single endpoint for clients to interact with.",
        "Collaborated on replatforming authenticated application to React and Apollo client as a part of A/B test improving performance and NPS score.",
        "Pair programmed with colleagues to learn and implement backend features in Golang and Rails as necessary.",
      ]}
    />
    <SectionBody
      company="ADP"
      title="Senior Application Developer"
      rightText="Apr 17 - Dec 18"
      body={[
        `Worked on a mission critical application that provided a "One stop shop" for all. service and CRM relevant information to assist clients on phone or chat.`,
        "Created and managed NodeJS microservices for different features in the application.",
        "Collaborated with external partners for creating REST API design.",
        "Created REST API layer on top of legacy SOAP Web Services.",
        "Using MongoDB, created caching layer for certain API calls to decrease response times.",
        "Worked on modern frontend architecture, involving React, Redux and Typescript, built using Webpack.",
      ]}
    />
    <SectionBody
      title="Founder"
      company="Tangential LLC"
      rightText="Apr 17 - Present"
      body={[
        "Started consulting company to help companies build Web and Mobile applications.",
        "Helped a startup with implementing yelp clone written in NodeJS and MongoDB with a React Native application.",
        "Worked on an iOS application built using React Native, GraphQL and NodeJS.",
        "Created an application to help an accounting firm to dynamically extract data from Quickbooks to Google Sheets.",
      ]}
    />
    <SectionBody
      title="Co-Founder"
      company="gr8Dine Inc"
      rightText="Sep 15 - Dec 17"
      body={[
        "Collaborated with clients to conduct user research and produce application requirements.",
        "Created, lead and cultivated a team of developers to build iOS application.",
        "Developed marketing material to showcase the application to customers and investors.",
      ]}
    />
    <SectionBody
      title="Web Developer Intern"
      company="ADP"
      rightText="Jun 16 - Dec 16"
      body={[
        "Converted an AngularJS application to use Typescript and Webpack, modularizing our code and decreasing load times and number of requests by over 75%.",
        "Refactored internal AngularJS library to allow compatibility with modular code.",
        "Rewrote AngularJS application in React and Redux from ground up.",
        "Configured development environment using Docker.",
      ]}
    />
    {/* <SectionBody
      title="Software Developer"
      company="Monimus LLC - Showdme"
      rightText="Fed 15 - Dec 15"
      body={[
        'Created new features based on business specifications and designs provided.',
        'Managed team of people offshore by reviewing their work, assigning them tasks and working with them to assure the timeline was met and the tasks were delivered.',
      ]}
    />
    <SectionBody
      title="Web Tier Intern"
      company="ADP"
      rightText="Jan 15 - Apr 15"
      body={[
        'Created a MEAN stack application that fetched Apache configuration from multiple servers and provided an interface to do full text search.',
      ]}
    />
    <SectionBody
      title="Intern Software Developer"
      company="Addteq"
      rightText="Nov 14 - Jan 15"
      body={[
        'Worked on adding new features and fixed issues with existing project. That made heavy use of Bootstrap and jQuery.',
        'Wrote Back-End modules using Perl and MySql for supporting new FrontEnd features.',
      ]}
    />
    <SectionBody
      title="Software Engineering Intern"
      company="McGraw Hill Financial - S&P Capital IQ"
      rightText="Jun 14 - Aug 14"
      body={[
        'Converted server rendered multi page application into a single page application using ExtJS.',
        'Created search bar with typeahead which queried Apache Solr for data.',
        'Created custom component in ExtJS which would streamline the migration process by providing consistent look.',
      ]}
    /> */}
  </React.Fragment>
);

export default Experiences;
