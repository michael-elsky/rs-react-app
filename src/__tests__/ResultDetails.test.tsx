import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from '../App'
import selectedItemsReducer from '../store/selected-items-slice'
import { api } from '../store/api'

vi.mock('../api/fetch', () => ({
  fetchData: vi.fn(),
}))

vi.mock('../store/api', async () => {
  const actual = await vi.importActual('../store/api')

  return {
    ...actual,

    useGetFilmsQuery: () => ({
      data: {
        results: [
          { title: 'Film', opening_crawl: 'About film', url: '1' },
          { title: 'Film 2', opening_crawl: 'About film 2', url: '2' },
        ],
      },
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    }),

    useGetFilmDetailsQuery: () => ({
      data: {
        title: 'Film',
        opening_crawl: 'About film',
      },
      isLoading: false,
      isFetching: false,
      error: null,
      refetch: vi.fn(),
    }),
  }
})

describe('ResultDetails', () => {
  const testStore = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,

      selectedItems: selectedItemsReducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  })

  it('details should be on the screen', async () => {
    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const h1 = await screen.findByRole('heading', { name: 'Film' })

    await userEvent.click(h1)

    const description = await screen.findByText('About film')

    expect(description).toBeInTheDocument()
  })
})
