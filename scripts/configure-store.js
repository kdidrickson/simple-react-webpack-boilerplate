import { createStore, combineReducers } from 'redux';
import reducers from 'reducers';

const configureStore = ( initialState = {} ) => {
	const rootReducer = combineReducers( reducers );
	
	const store = createStore( rootReducer, initialState,
		// Enable redux devtools
		typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
				window.devToolsExtension() : f => f
	);

	return store;
};

export default configureStore;
