import React from 'react'
import { useSelector } from 'react-redux';
import { getCity } from '../redux/reducers/cityReducer';
import City from '../svgs/city.svg'
import { CityType, LOADING_STATES } from '../types/types';
import { Loader } from "./elements/Loader"

const WeatherInfo = () => {

  const state: { loading: LOADING_STATES, data: CityType | null } = useSelector(getCity)

  return (
    <React.Fragment>
      {state.loading === LOADING_STATES.LOADING && (
        <div className="text-center py-10">
          <Loader strokeColor="#778aa1" width={50} label="Loading..." labelClassName="text-center text-secondary" />
        </div>
      )}

      {state.loading === LOADING_STATES.FAILED && (
        <div className="text-center py-10">
          <p>An error occurred. Please try again.</p>
        </div>
      )}

      {state.loading === LOADING_STATES.SUCCEEDED && !state.data && (
        <div className="text-center py-10">
          <p>Please specify a valid city name. (e.g: Paris)</p>
        </div>
      )}

      {state.loading === LOADING_STATES.SUCCEEDED && state.data && (
        <div className="py-5">
          <div className="text-center">
            <h1 className="text-2xl uppercase">{`${state.data.name}, ${state.data.country}`}</h1>
            <span className="text-sm">Weather Description: {state.data.weather.summary.description}</span>
          </div>

          <div className="text-center m-auto">
            <img src={`http://openweathermap.org/img/wn/${state.data.weather.summary.icon}@2x.png`} className="w-40 m-auto" alt="" />
          </div>

          <div className="border-b border-gray-300 pb-3">
            <span>Visibility: </span>
            <span>{state.data.weather.clouds.visibility}</span>
          </div>
          <div className="mt-5 border-b border-gray-300 pb-3">
            <span>Humidity: </span>
            <span>{state.data.weather.clouds.humidity}</span>
          </div>
          <div className="mt-5 border-b border-gray-300 pb-3">
            <span>Wind Speed: </span>
            <span>{state.data.weather.wind.speed}</span>
          </div>
          <div className="mt-5 border-b border-gray-300 pb-3">
            <span>Actual Temperature: </span>
            <span>{state.data.weather.temperature.actual}</span>
          </div>
          <div className="mt-5 border-b border-gray-300 pb-3">
            <span>Minimum Temperature: </span>
            <span>{state.data.weather.temperature.min}</span>
          </div>
          <div className="mt-5 border-b border-gray-300 pb-3 mb-5">
            <span>Maximum Temperature: </span>
            <span>{state.data.weather.temperature.max}</span>
          </div>
          <div className="text-center">
              <img src={City} alt="" />
          </div>
        </div>
      )}

    </React.Fragment>
  );
};

export default WeatherInfo;
