import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from './Search'
import store from '../redux/store'
import ReduxProvider from '../test-helpers/ReduxProvider'

describe('Search', () => {
  test('renders Search component', () => {
    render(
      <ReduxProvider reduxStore={store}>
        <Search />
      </ReduxProvider>
    )

    expect(screen.getByText('City')).toBeInTheDocument()
    expect(screen.getByText('Units')).toBeInTheDocument()
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
