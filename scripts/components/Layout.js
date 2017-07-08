import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TopBar from 'components/TopBar';
import LocationCallout from 'components/callouts/LocationCallout';
import InfoCallout from 'components/callouts/InfoCallout';

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    };
  }

  render() {
    return (
      <div
        className={`
          ${ this.props.weatherData.isFetchingWeatherData ? 'isFetchingWeatherData' : 'notFetchingWeatherData' }
        `}
      >
        <TopBar />
        <div className="row">
          <div className="small-12 large-6 columns">
            <LocationCallout />
          </div>
          <div className="small-12 large-6 columns">
            <InfoCallout />
          </div>
        </div>
      </div>
    );
  }
}

export default connect( ({ weatherData }) => ({ weatherData }) )(Layout);
