// Returns a boolean whether the input is 5 digits long
export const isValidZipCode = zipCode => zipCode && zipCode.match && Boolean( zipCode.match(/^\d{5}$/) );

// Returns a boolean whether the input is possibly a valid city name
export const isValidCity = city => city && city.match && Boolean( city.match(/[a-zA-Z]{3,}/) );

// Return a setting value or `null` if it is not defined
export const getSetting = settingKey => {
	const settings = window.CONFIG || {};

	const settingsValue = settingKey && settings[settingKey] ? settings[settingKey] : null;
	
	return settingsValue;
};

export const kelvinToFahrenheit = kelvins => parseInt( ( ( Number( kelvins ) - 273.15 ) * 1.8 ) + 32 );
