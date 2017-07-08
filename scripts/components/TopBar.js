import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isValidZipCode, isValidCity } from 'utilities';
import Loader from 'components/Loader';

const TopBar = ({
  dispatch,
  siteTitle,
  locationPlaceholder,
  submitButtonLabel,
  location,
  weatherData
}) => {
  let errorMessage = location.errorMessage;
      errorMessage = errorMessage ? errorMessage : null;
      if( ! errorMessage ) {
        errorMessage = weatherData && weatherData.weatherDataError && weatherData.weatherDataError.message ? weatherData.weatherDataError.message : null;
      }

  return (
    <div className={`
      top-bar
      ${ location.errorMessage ? 'hasError' : 'noError' }
    `}>
      <div className="top-bar-left">
        <h1
          className="top-bar-title"
          children={siteTitle}
        />
      </div>
      <div className="top-bar-right">
        <div className="ul menu">
          <li>
            <form
              className="flex-container align-middle"
              onSubmit={
                event => {
                  event.preventDefault();

                  const locationValue = this.locationInput.value;

                  if( isValidZipCode( locationValue ) ) {
                    dispatch({
                      type: 'SET_ZIPCODE',
                      locationValue
                    });
                  } else if( isValidCity( locationValue ) ) {
                    dispatch({
                      type: 'SET_CITY',
                      locationValue
                    });
                  } else if( ! locationValue.match(/\w/) ) { // If the field is blank
                    dispatch({
                      type: 'RESET'
                    });
                  } else {
                    dispatch({
                      type: 'SET_ERROR'
                    });
                  }
                }
              }
            >
              {
                errorMessage ? (
                  <div
                    className="top-bar-status"
                    children={errorMessage}
                  />
                ) : (
                  null
                )
              }
              <Loader />
              <div className="flex-container">
                <input
                  className="top-bar-location"
                  type="text"
                  placeholder={locationPlaceholder}
                  ref={ locationInput => this.locationInput = locationInput }
                />
                <input
                  type="submit"
                  className="button"
                  value={submitButtonLabel}
                />
              </div>
            </form>
          </li>
        </div>
      </div>
    </div>
  );
};

TopBar.defaultProps = {
  siteTitle: 'Weathr',
  locationPlaceholder: `Enter ZIP Code or City`,
  submitButtonLabel: `Submit`
};

TopBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  locationPlaceholder: PropTypes.string,
  submitButtonLabel: PropTypes.string.isRequired
};

export default connect( ({ location, weatherData }) => ({ location, weatherData }) )( TopBar );
