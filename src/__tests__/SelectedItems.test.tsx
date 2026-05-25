import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Provider } from 'react-redux';

import { fetchData } from '../api/fetch';
import App from '../App';
import selectedItemsReducer from '../store/selected-items-slice';
import { configureStore } from '@reduxjs/toolkit';

vi.mock('../api/fetch', () => ({
  fetchData: vi.fn(),
}));

describe('SelectedItems', () => {
  const data = {
    results: [
      {
        title: 'Film',
        opening_crawl: 'About film',
        url: 'https://swapi.dev/api/films/1/',
      },
      {
        title: 'Film 2',
        opening_crawl: 'About film 2',
        url: 'https://swapi.dev/api/films/2/',
      },
    ],
  };

  const setup = async () => {
    const testStore = configureStore({
      reducer: {
        selectedItems: selectedItemsReducer,
      },
    });

    vi.mocked(fetchData).mockResolvedValueOnce(data);

    render(
      <Provider store={testStore}>
        <App />
      </Provider>,
    );

    const checkBoxes = await screen.findAllByRole('checkbox');

    await userEvent.click(checkBoxes[0]);
    await userEvent.click(checkBoxes[1]);

    return {
      checkBoxes,
    };
  };

  it('should show correct selected items count', async () => {
    await setup();

    const unSelectBtn = screen.getByRole('button', {
      name: 'Unselect all',
    });
    const downloadBtn = screen.getByRole('button', {
      name: 'Download',
    });
    const countText = screen.getByText(`Selected: 2`);

    expect(unSelectBtn).toBeInTheDocument();
    expect(downloadBtn).toBeInTheDocument();
    expect(countText).toBeInTheDocument();
  });

  it('should unselect all items', async () => {
    const { checkBoxes } = await setup();

    const unSelectBtn = screen.getByRole('button', {
      name: 'Unselect all',
    });

    await userEvent.click(unSelectBtn);

    checkBoxes.forEach((checkBox) => {
      expect(checkBox).not.toBeChecked();
    });
  });

  it('should download csv file', async () => {
    await setup();

    const downloadBtn = screen.getByRole('button', { name: 'Download' });

    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click');

    await userEvent.click(downloadBtn);

    expect(clickSpy).toHaveBeenCalled();
  });
});
