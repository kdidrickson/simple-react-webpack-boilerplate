import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { getSetting } from 'utilities';
import Callout from 'components/Callout';

const LocationCallout = ({
	weatherData
}) => (
	weatherData && weatherData.data ? (
		<Callout title={weatherData.data.name}>
			<div className="locationCallout">
				<GoogleMapReact
					center={{
						lat: weatherData.data.coord.lat,
						lng: weatherData.data.coord.lon
					}}
					zoom={10}
					bootstrapURLKeys={{
						key: getSetting('mapsApiKey'),
						language: 'en'
					}}
					style={{
						height: `400px`,
						position: `relative`
					}}
				/>
			</div>
		</Callout>
	) : (
		null
	)
);

export default connect( ({ weatherData }) => ({ weatherData }) )(LocationCallout);