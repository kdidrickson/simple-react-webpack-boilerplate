import React from 'react';
import PropTypes from 'prop-types';

const Well = ({
	label,
	value
}) => (
	<div className="well">
		<div
			className="well-value"
			children={value}
		/>
		<div
			className="well-label"
			children={label}
		/>
	</div>
);

Well.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired
}

export default Well;