import React from 'react'
import { render } from '@testing-library/react'
import WeatherInfo from './WeatherInfo'
import store from '../redux/store'
import ReduxProvider from '../test-helpers/ReduxProvider'

describe('WeatherInfo', () => {
  test('renders WeatherInfo component', () => {
    render(
      <ReduxProvider reduxStore={store}>
        <WeatherInfo />
      </ReduxProvider>
    )
  })
})
