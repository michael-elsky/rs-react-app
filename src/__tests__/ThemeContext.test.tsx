import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { userEvent } from '@testing-library/user-event';

import App from '../App';
import selectedItemsReducer from '../store/selected-items-slice';
import ThemeContextProvider from '../context/ThemeContext';

describe('ThemeContext', () => {
  const testStore = configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
    },
  });

  it('should change theme', async () => {
    render(
      <Provider store={testStore}>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </Provider>,
    );

    const buttonTheme = screen.getByRole('button', { name: 'Theme toggle' });

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    await userEvent.click(buttonTheme);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
