// Returns a promise resolving to object containing weather data

import ajax from '@fdaciuk/ajax';
import Mustache from 'mustache';
import moment from 'moment';

import { isValidZipCode, isValidCity, getSetting } from 'utilities';

const fetchWeatherData = ({
  locationType,
  locationValue,
  dispatch
}) => {
  try {
    const localStorageKeyTemplate = '{{locationType}}:{{locationValue}}';
    const localStoragekeyName = Mustache.render( localStorageKeyTemplate, { locationType, locationValue } );
    const weatherApiKey = getSetting('weatherApiKey');
    const weatherApiEndpoints = getSetting('weatherApiEndpoints');
    let willFetchWeatherData = Promise.resolve();

    if( ! locationType ) {
      throw new Error(`Location type must be defined to fetch weather data`);
    }

    if( ! weatherApiEndpoints || ! weatherApiEndpoints[locationType] ) {
      throw new Error(`No API endpoint is defined in the config file for ${locationType}`);
    }

    // Check if there are "fresh" cached results
    let isCacheFresh = false;
    let cachedWeatherData = window.localStorage.getItem( localStoragekeyName );
        cachedWeatherData = cachedWeatherData ? JSON.parse( cachedWeatherData ) : null;

    if( cachedWeatherData ) {
      // "Fresh" is defined in the config file
      const numHoursToCache = getSetting( 'numHoursToCache' ) || 1;

      // Check if the cached results are younger than the limit
      isCacheFresh = moment( cachedWeatherData.created ).isAfter( moment().subtract( numHoursToCache, 'hours' ) );

    }

    if( isCacheFresh ) {
      if( cachedWeatherData.isError ) {
        willFetchWeatherData = Promise.reject( cachedWeatherData );
      } else {
        willFetchWeatherData = Promise.resolve( cachedWeatherData );
      }
    } else {
      const apiEndpoint = weatherApiEndpoints[locationType];
      const url = Mustache.render( apiEndpoint, { locationValue, weatherApiKey } );

      switch( locationType ) {
        case( 'zipCode' ) :
          if( ! isValidZipCode( locationValue ) ) {
            throw new Error(`${locationValue} is not a valid zip code`);
          }

          willFetchWeatherData = ajax({ url, method: 'post' });

          break;

        case( 'city' ) :
          if( ! isValidCity( locationValue ) ) {
            throw new Error(`${locationValue} is not a valid city`);
          }

          willFetchWeatherData = ajax({ url, method: 'post' });

          break;

        default :
          throw new Error(`${locationType} is not a recognized type of location`);
      }

      dispatch({ type: 'FETCH_WEATHER_DATA' });
    }

    // If the request takes less than `minRequestDuration`, then artificially delay
    // display of the result so there isn't a flashy/jerky effect
    const requestTime = new Date();
    const minRequestDuration = 1000; // in milliseconds

    // Cache the results
    const cacheData = data => {
      const now = new Date();
      const created = now.toISOString()
      // Store the time so it's possible to tell if they're "fresh"
      const keyValue = JSON.stringify({ ...data, created });

      window.localStorage.setItem( localStoragekeyName, keyValue );
    }

    willFetchWeatherData
      .then( data => {
        cacheData( data );

        const doDispatchWeatherData = () => dispatch({ type: 'FETCH_WEATHER_DATA', status: 'success', data });
        const requestDuration = moment(requestTime).diff( new Date() );
        const timeToWait = isCacheFresh ? 0 : minRequestDuration - requestDuration;

        // If `timeToWait` is negative then `doDispatchWeatherData` will execute immediately
        setTimeout( doDispatchWeatherData, timeToWait );
        
      })
      .catch( weatherDataError => {
        cacheData({ ...weatherDataError, isError: true });
        dispatch({ type: 'FETCH_WEATHER_DATA', status: 'error', weatherDataError })
      })

    return willFetchWeatherData;
  }
  catch( error ) {
    console.log( error );

    return Promise.reject( error );
  }
};

export default fetchWeatherData;
