import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TopBar = ({
  dispatch,
  siteTitle,
  zipCodePlaceholder,
  submitButtonLabel,
  location
}) => (
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
        <div className="li">
          <form
            className="flex-container align-middle"
            onSubmit={
              event => {
                event.preventDefault();

                dispatch({
                  type: 'SET_ZIPCODE',
                  location: this.zipCodeInput.value
                });
              }
            }
          >
            <div
              className="top-bar-status"
              children={location.errorMessage}
            />
            <input
              className="top-bar-zipCode"
              type="text"
              placeholder={zipCodePlaceholder}
              ref={ zipCodeInput => this.zipCodeInput = zipCodeInput }
            />
            <input
              type="submit"
              className="button"
              value={submitButtonLabel}
            />
          </form>
        </div>
      </div>
    </div>
  </div>
);

TopBar.defaultProps = {
  siteTitle: 'Weathr',
  zipCodePlaceholder: `Enter ZIP Code`,
  submitButtonLabel: `Submit`
};

TopBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  zipCodePlaceholder: PropTypes.string,
  submitButtonLabel: PropTypes.string.isRequired
};

export default connect( ({ location }) => ({ location }) )( TopBar );
