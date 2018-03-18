import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LeftContainer from './Components/LeftContainer';
import RightContainer from './Components/RightContainer';
import './style.scss';
import './Components/container.scss';

class Resume extends Component {
  render() {
    return (
      <div className="container">
        <LeftContainer />
        <RightContainer />
      </div>
    );
  }
}

ReactDOM.render(<Resume />, document.getElementById('app'));
