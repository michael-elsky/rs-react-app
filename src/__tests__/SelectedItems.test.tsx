import { afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from '../App'
import selectedItemsReducer from '../store/selected-items-slice'
import { api } from '../store/api'

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
      isFetching: false,
      error: null,
      refetch: vi.fn(),
    }),
  }
})

describe('SelectedItems', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  const setup = async () => {
    const testStore = configureStore({
      reducer: {
        [api.reducerPath]: api.reducer,

        selectedItems: selectedItemsReducer,
      },

      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
    })

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    )

    const checkBoxes = await screen.findAllByRole('checkbox')

    await userEvent.click(checkBoxes[0])
    await userEvent.click(checkBoxes[1])

    return {
      checkBoxes,
    }
  }

  it('should show correct selected items count', async () => {
    await setup()

    const unSelectBtn = screen.getByRole('button', {
      name: 'Unselect all',
    })
    const downloadBtn = screen.getByRole('button', {
      name: 'Download',
    })
    const countText = screen.getByText(`Selected: 2`)

    expect(unSelectBtn).toBeInTheDocument()
    expect(downloadBtn).toBeInTheDocument()
    expect(countText).toBeInTheDocument()
  })

  it('should unselect all items', async () => {
    const { checkBoxes } = await setup()

    const unSelectBtn = screen.getByRole('button', {
      name: 'Unselect all',
    })

    await userEvent.click(unSelectBtn)

    checkBoxes.forEach((checkBox) => {
      expect(checkBox).not.toBeChecked()
    })
  })

  it('should download csv file', async () => {
    await setup()

    const downloadBtn = screen.getByRole('button', { name: 'Download' })

    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click')

    await userEvent.click(downloadBtn)

    expect(clickSpy).toHaveBeenCalled()
  })
})
