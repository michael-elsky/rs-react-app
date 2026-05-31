import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from '../App'
import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../utils/localStorageData'
import Page404 from '../pages/404/Page404'
import * as apiModule from '../store/api'
import { api } from '../store/api'
import selectedItemsReducer from '../store/selected-items-slice'

vi.mock('../utils/localStorageData', () => ({
  getLocalStorageData: vi.fn(),
  saveLocalStorageData: vi.fn(),
}))

describe('App', () => {
  let testStore: ReturnType<typeof configureStore>

  beforeEach(() => {
    testStore = configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,

        selectedItems: selectedItemsReducer,
      },

      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Successful fetch. After fetch data, title should be on the screen', async () => {
    vi.spyOn(apiModule, 'useGetFilmsQuery').mockReturnValue({
      data: {
        results: [{ title: 'Film', url: '1' }],
      },
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const title = await screen.findByText('Film')

    expect(title).toBeInTheDocument()
  })

  it('Loading state. Loading spinner should be on the screen', () => {
    vi.spyOn(apiModule, 'useGetFilmsQuery').mockReturnValue({
      data: undefined,
      isLoading: true,
      isFetching: true,
      error: undefined,
      refetch: vi.fn(),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const loadingSpinner = screen.getByRole('status', { name: 'loading' })

    expect(loadingSpinner).toBeInTheDocument()
  })

  it('Error state. Error message should be on the screen', async () => {
    const errorMessage = 'Status: FETCH_ERROR'

    vi.spyOn(apiModule, 'useGetFilmsQuery').mockReturnValue({
      data: undefined,
      isLoading: false,
      error: {
        status: 'FETCH_ERROR',
      },
      refetch: vi.fn(),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const p = await screen.findByText(errorMessage)

    expect(p).toBeInTheDocument()
  })

  it('Empty results. Message should be on the screen', async () => {
    const message = 'No results found'

    vi.spyOn(apiModule, 'useGetFilmsQuery').mockReturnValue({
      data: {
        results: [],
      },
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const p = await screen.findByText(message)

    expect(p).toBeInTheDocument()
  })

  it('should save localStorage data', async () => {
    const searchText = 'A New '
    const searchTextTrimmed = searchText.trim()

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Search' })

    await userEvent.type(input, searchText)
    await userEvent.click(button)

    expect(saveLocalStorageData).toHaveBeenCalledWith(searchTextTrimmed)
  })

  it('input value should be equal to local storage data', async () => {
    const searchText = 'A New'

    vi.mocked(getLocalStorageData).mockReturnValueOnce(searchText)

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const input = await screen.findByRole('textbox')

    expect(input).toHaveValue(searchText)
  })

  it('should not fetch or save if value did not change', async () => {
    const searchText = 'A New'

    vi.mocked(getLocalStorageData).mockReturnValueOnce(searchText)

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const button = screen.getByRole('button', { name: 'Search' })

    await userEvent.click(button)

    expect(saveLocalStorageData).not.toHaveBeenCalled()
  })

  it('should not call apiModule when search is empty string', async () => {
    vi.mocked(getLocalStorageData).mockReturnValueOnce('')

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const button = screen.getByRole('button', { name: 'Search' })

    await userEvent.click(button)

    expect(saveLocalStorageData).not.toHaveBeenCalled()
  })

  it('should be Reset error button', async () => {
    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const errorBtnBefore = screen.getByRole('button', { name: 'Error Button' })
    expect(errorBtnBefore).toBeInTheDocument()

    await userEvent.click(errorBtnBefore)

    const resetErrorBtn = screen.getByRole('button', { name: 'Reset error' })
    expect(resetErrorBtn).toBeInTheDocument()

    await userEvent.click(resetErrorBtn)

    const errorBtnAfter = screen.getByRole('button', { name: 'Error Button' })
    expect(errorBtnAfter).toBeInTheDocument()
  })

  it('should show 404 page on unknown route', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <App />,
        },
        {
          path: '*',
          element: <Page404 />,
        },
      ],
      {
        initialEntries: ['/this-route-does-not-exist'],
      },
    )

    render(<RouterProvider router={router} />)

    expect(screen.getByText('Page 404')).toBeInTheDocument()
  })

  it('should render SelectedItems after selecting checkbox', async () => {
    const buttonUnSelectText = 'Unselect all'
    const buttonDownloadText = 'Download'

    vi.spyOn(apiModule, 'useGetFilmsQuery').mockReturnValue({
      data: {
        results: [{ title: 'Film', url: '1' }],
      },
      isLoading: false,
      error: null,
      refetch: vi.fn(),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const checkBoxes = await screen.findAllByRole('checkbox')

    await userEvent.click(checkBoxes[0])

    const unSelectBtn = screen.getByRole('button', {
      name: buttonUnSelectText,
    })
    const downloadBtn = screen.getByRole('button', {
      name: buttonDownloadText,
    })

    expect(unSelectBtn).toBeInTheDocument()
    expect(downloadBtn).toBeInTheDocument()
  })
})
