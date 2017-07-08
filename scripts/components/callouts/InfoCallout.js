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
							label="Temperature"
							value={ kelvinToFahrenheit( weatherData.data.main.temp ) }
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Low"
							value={ kelvinToFahrenheit( weatherData.data.main.temp_min ) }
						/>
					</div>
					<div className="column column-block">
						<Well
							label="High"
							value={ kelvinToFahrenheit( weatherData.data.main.temp_max ) }
						/>
					</div>
					<div className="column column-block">
						<Well
							label="Humidity"
							value={ weatherData.data.main.humidity }
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