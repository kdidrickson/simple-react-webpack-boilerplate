import { createStore, combineReducers } from 'redux';

import reducers from 'reducers';
import fetchWeatherData from 'fetch-weather-data';

// Create the redux store
const rootReducer = combineReducers( reducers );
const initialState = {};

const store = createStore( rootReducer, initialState,
	// Enable redux devtools
	typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
			window.devToolsExtension() : f => f
);

// Fetch new weather data whenever the location changes
let currentLocation = {};
store.subscribe( () => {
	const previousLocation = currentLocation;
	const { getState, dispatch } = store;
	const state = store.getState();

	currentLocation = state.location;
	
	if(
		currentLocation.locationType &&
		currentLocation.locationValue &&
		previousLocation.locationValue !== currentLocation.locationValue &&
		previousLocation !== currentLocation
	) {
		fetchWeatherData({ ...currentLocation, dispatch });
	}
});

export default store;
