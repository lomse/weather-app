import apolloClient from '../../graphql/apolloClient';
import { GET_WEATHER_BY_CITY_NAME_QUERY } from '../../graphql/queries';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCityData = createAsyncThunk('city/getCityData', async (data: { city: string, units?: string }) => {

  let config = data.units ? { units: data.units } : {}

  const response = await apolloClient.query({
    query: GET_WEATHER_BY_CITY_NAME_QUERY, variables: {
      name: data.city,
      country: null,
      config
    }
  })

  return response
})