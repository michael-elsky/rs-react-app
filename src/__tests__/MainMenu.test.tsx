import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from '../App'
import selectedItemsReducer from '../store/selected-items-slice'
import classes from '../components/MainMenu/MainMenu.module.css'
import { userEvent } from '@testing-library/user-event'
import { api } from '../store/api';

describe('MainMenu', () => {
  const testStore = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,

      selectedItems: selectedItemsReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  })

  it('', async () => {
    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const homeLink = screen.getByRole('link', { name: 'Home' })
    const aboutLink = screen.getByRole('link', { name: 'About' })

    expect(homeLink).toHaveClass(classes['app__menu-link--active'])

    await userEvent.click(aboutLink)

    expect(aboutLink).toHaveClass(classes['app__menu-link--active'])
    expect(homeLink).not.toHaveClass(classes['app__menu-link--active'])
  })
})
