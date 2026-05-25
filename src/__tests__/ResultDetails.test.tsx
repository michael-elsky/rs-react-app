import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from '../App';
import selectedItemsReducer from '../store/selected-items-slice';
import { fetchData } from '../api/fetch';
import { userEvent } from '@testing-library/user-event';

vi.mock('../api/fetch', () => ({
  fetchData: vi.fn(),
}));

describe('ResultDetails', () => {
  const testStore = configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
    },
  });

  it('details should be on the screen', async () => {
    const data = {
      results: [
        {
          title: 'Film',
          opening_crawl: 'About film',
          url: 'https://swapi.dev/api/films/1/',
        },
      ],
    };

    vi.mocked(fetchData).mockResolvedValueOnce(data);

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    );

    const h1 = await screen.findByRole('heading', { name: 'Film' });

    await userEvent.click(h1);

    const description = await screen.findByRole('paragraph');

    expect(description).toBeInTheDocument();
  });
});
