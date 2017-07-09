import React from 'react';

const Loader = () => {
	let divs = [];

	// Generate all of the dots markup for the loader
	for ( var i = 0; i < 36; i++ ) {
		divs.push( <div className="loader-dot" key={i} /> );
	}

	return (
		<div
			className="loader"
			children={divs}
		/>
	);
};

export default Loader