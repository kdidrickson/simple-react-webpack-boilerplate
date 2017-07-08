import React from 'react';

const Callout = ({ children, title }) => (
	<div className="callout zoomIn animated">
		{
			title ?
			<h2
				className="callout-title" 
				children={title}
			/> : null
		}
		<div
			className="callout-content"
			children={children}
		/>
	</div>
);

export default Callout;
