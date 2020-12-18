import { createSlice } from '@reduxjs/toolkit'
import { LOADING_STATES, StateType } from '../../types/types'
import { getCityData } from '../async-thunks'


export const citySlice = createSlice({
  name: 'city',
  initialState: {
    loading: LOADING_STATES.IDLE,
    error: null,
    data: null,
  },
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [getCityData.pending]: state=> {
      state.loading = LOADING_STATES.LOADING
      return state
    },
    // @ts-ignore
    [getCityData.rejected]: (state, action)=> {
      state.loading = LOADING_STATES.FAILED
      state.error = action.payload
      return state
    },
    // @ts-ignore
    [getCityData.fulfilled]: (state, action)=> {
      state.loading = LOADING_STATES.SUCCEEDED
      state.data = action.payload.data.getCityByName
      return state
    }
  }
})

export const getCity = (state: StateType) => state.city

export default citySlice.reducer
