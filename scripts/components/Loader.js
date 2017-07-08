import React from 'react';

const Loader = () => {
	let divs = []

	for (var i = 0; i < 36; i++) {
		divs.push(<div className="loader-dot" key={i} />);
	}

	return (
		<div className="loader">
			{divs}
		</div>
	);
};

export default Loader