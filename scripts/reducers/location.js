// Tracks the current location of the weather information

import { isValidZipCode, isValidCity } from 'utilities';

export default (
	state={
		locationType: null,
		errorMessage: null,
		locationValue: null
	}, {
		type,
		locationValue
	}
) => {
	switch( type ) {
		case 'SET_ZIPCODE' :
			locationValue = String( locationValue );

			// Spot-check whether the zip code could theoretically be valid
			const isThisValidZipCode = isValidZipCode( locationValue );

			return {
				...state,
				locationType: isThisValidZipCode ? 'zipCode' : null,
				errorMessage: isThisValidZipCode ? null : `This is not a valid zip code`, 
				locationValue: isThisValidZipCode ? locationValue : null
			};

		case 'SET_CITY' :
			locationValue = String( locationValue );

			// Spot-check whether the zip code could theoretically be valid
			const isThisValidCity = isValidCity( locationValue );

			return {
				...state,
				locationType: isThisValidCity ? 'city' : null,
				errorMessage: isThisValidCity ? null : `This is not a valid city`, 
				locationValue: isThisValidCity ? locationValue : null
			};

		case 'RESET' :
			return {
				...state,
				locationType: null,
				errorMessage: null, 
				locationValue: null
			};

		case 'SET_ERROR' :
			return {
				...state,
				locationType: null,
				errorMessage: `Enter a valid zip code or city name`, 
				locationValue: null
			}

		default :
			return state;
	}
};