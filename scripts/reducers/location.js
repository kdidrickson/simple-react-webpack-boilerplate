// Tracks the current location of the weather information

export default (
	state={
		locationType: null,
		errorMessage: null,
		location: null
	}, {
		type,
		location
	}
) => {
	switch(type) {
		case 'SET_ZIPCODE' :
			location = String( location );

			// Spot-check whether the zip code could theoretically be valid
			const isValidZipCode = Boolean( location.match(/^\d{5}$/) );

			return {
				...state,
				locationType: isValidZipCode ? 'zipcode' : null,
				errorMessage: isValidZipCode ? null : `This is not a valid zip code`, 
				location: isValidZipCode ? location : null
			};

		default :
			return state;
	}
};