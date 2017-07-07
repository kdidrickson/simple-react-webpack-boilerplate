import React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({
  siteTitle,
  zipCodePlaceholder
}) => (
  <div className="top-bar">
    <div className="top-bar-left">
      <h1
        className="top-bar-title"
        children={siteTitle}
      />
    </div>
    <div className="top-bar-right">
      <div className="ul menu">
        <div className="li">
          <input
            className="top-bar-zipCode"
            type="text"
            placeholder={zipCodePlaceholder}
          />
        </div>
      </div>
    </div>
  </div>
);

TopBar.defaultProps = {
  siteTitle: 'Weathr',
  zipCodePlaceholder: 'Enter ZIP Code'
};

TopBar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  zipCodePlaceholder: PropTypes.string
};

export default TopBar;
