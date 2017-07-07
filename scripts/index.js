import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import configureStore from 'configure-store';
import Layout from 'components/Layout';

// Create the redux store
const store = configureStore();

render(
	<Provider store={store}>
		<Layout />
	</Provider>,
  document.getElementById('app')
);
