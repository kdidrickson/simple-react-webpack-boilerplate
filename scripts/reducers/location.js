// Tracks the current location of the weather information

export default ( state={}, { type, location } ) => {
	switch(type) {
		case 'SET_ZIPCODE' :
			return {
				...state,
				locationType: 'zipcode',
				location
			};

		default :
			return state;
	}
};