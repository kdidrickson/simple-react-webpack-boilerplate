import React from 'react';
import { connect } from 'react-redux';

import { getSetting, kelvinToFahrenheit } from 'utilities';
import Callout from 'components/Callout';
import Well from 'components/Well';

const InfoCallout = ({
	weatherData
}) => (
	weatherData && weatherData.data ? (
		<Callout>
			<div className="info-callout">
				<div className="row small-up-2 medium-up-4 large-up-3">
					<div className="column column-block">
						<Well
							label="Temperature (F)"
							value={`${kelvinToFahrenheit( weatherData.data.main.temp )}\u00b0`}
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Low (F)"
							value={`${kelvinToFahrenheit( weatherData.data.main.temp_min )}\u00b0`}
						/>
					</div>
					<div className="column column-block">
						<Well
							label="High (F)"
							value={`${kelvinToFahrenheit( weatherData.data.main.temp_max )}\u00b0`}
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Humidity"
							value={`${weatherData.data.main.humidity}%`}
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Wind Speed"
							value={ weatherData.data.wind.speed }
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Visibility"
							value={ weatherData.data.visibility }
						/>
					</div>
				</div>
			</div>
		</Callout>
	) : (
		null
	)
);

export default connect( ({ weatherData }) => ({ weatherData }) )(InfoCallout);