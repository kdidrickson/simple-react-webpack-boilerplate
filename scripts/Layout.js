import React from 'react';
import PropTypes from 'prop-types';

import TopBar from 'TopBar';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    };
  }

  render() {
    return (
      <div>
        <TopBar />

        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600" rel="stylesheet" />
      </div>
    );
  }
}

export default Layout;
