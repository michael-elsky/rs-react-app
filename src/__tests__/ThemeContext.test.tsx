import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Provider } from 'react-redux'
import { userEvent } from '@testing-library/user-event'

import App from '../App'
import ThemeContextProvider from '../context/ThemeContext'
import store from '../store'

describe('ThemeContext', () => {
  it('should change theme', async () => {
    render(
      <Provider store={store}>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Provider>,
    )

    const buttonTheme = screen.getByRole('button', { name: 'Theme toggle' })

    expect(document.documentElement.getAttribute('data-theme')).toBe('light')

    await userEvent.click(buttonTheme)

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
