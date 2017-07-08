// Normally would be ignored by git

window.CONFIG = {
	apiKey: 'dd8fb16a1e2cfa3913b090f51ad8855b',
	apiEndpoints: {
		zipCode: 'http://api.openweathermap.org/data/2.5/weather?zip={{locationValue}}&APPID={{apiKey}}',
		city: 'http://api.openweathermap.org/data/2.5/weather?q={{locationValue}}&APPID={{apiKey}}'
	},
	mapsApiKey: 'AIzaSyDQljpYjBo9Z1BJH34zX9pyL9kD7fV-0mc',
	numHoursToCache: 1
};
