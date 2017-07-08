// Tracks the state of fetching the weather data as well as the data itself

export default (
  state={
    isFetchingWeatherData: false,
    weatherDataError: null
  },
  { type, status, weatherDataError, data }
) => {
  switch( type ) {
    case 'FETCH_WEATHER_DATA' :
      switch( status ) {
        case 'error' :
          return {
            ...state,
            isFetchingWeatherData: false,
            weatherDataError
          };

        case 'success' :
          return {
            ...state,
            isFetchingWeatherData: false,
            weatherDataError: null,
            data
          };

        default :
          return {
            ...state,
            isFetchingWeatherData: true
          };
      }

    default :
      return state;
  }
};