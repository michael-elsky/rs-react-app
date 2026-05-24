import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchData } from '../api/fetch';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../utils/localStorageData';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import Page404 from '../pages/404/Page404';
import { Provider } from 'react-redux';
import store from '../store';

vi.mock('../api/fetch', () => ({
  fetchData: vi.fn(),
}));

vi.mock('../utils/localStorageData', () => ({
  getLocalStorageData: vi.fn(),
  saveLocalStorageData: vi.fn(),
}));

describe('App', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Successful fetch. After fetch data, title should be on the screen', async () => {
    const data = {
      results: [
        {
          title: 'Film',
          opening_crawl: 'About film',
        },
      ],
    };

    vi.mocked(fetchData).mockResolvedValueOnce(data);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const title = await screen.findByText('Film');

    expect(title).toBeInTheDocument();
  });

  it('Loading state. Loading spinner should be on the screen', () => {
    vi.mocked(fetchData).mockImplementation(() => {
      return new Promise(() => {});
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const loadingSpinner = screen.getByRole('status', { name: 'loading' });

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('Error state. Error message should be on the screen', async () => {
    const errorMessage = 'app error';

    vi.mocked(fetchData).mockRejectedValue(new Error(errorMessage));

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const p = await screen.findByText(errorMessage);

    expect(p).toBeInTheDocument();
  });

  it('Empty results. Message should be on the screen', async () => {
    const message = 'No results found';

    vi.mocked(fetchData).mockResolvedValueOnce({ results: [] });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const p = await screen.findByText(message);

    expect(p).toBeInTheDocument();
  });

  it('Initial fetch. Fetch must called with valid url', async () => {
    const url = 'https://swapi.py4e.com/api/films/';
    const data = {
      results: [
        {
          title: 'Film',
          opening_crawl: 'About film',
        },
      ],
    };

    vi.mocked(fetchData).mockResolvedValueOnce(data);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    await screen.findByRole('textbox');

    expect(fetchData).toHaveBeenCalledWith(url);
  });

  it('should save localStorage data', async () => {
    const searchText = 'A New ';
    const searchTextTrimmed = searchText.trim();

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Search' });

    await userEvent.type(input, searchText);
    await userEvent.click(button);

    expect(saveLocalStorageData).toHaveBeenCalledWith(searchTextTrimmed);
    expect(fetchData).toHaveBeenCalled();
  });

  it('input value should be equal to local storage data', async () => {
    const searchText = 'A New';

    vi.mocked(getLocalStorageData).mockReturnValueOnce(searchText);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const input = await screen.findByRole('textbox');

    expect(input).toHaveValue(searchText);
    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith(
      expect.stringContaining('search=A New'),
    );
  });

  it('should not fetch or save if value did not change', async () => {
    const searchText = 'A New';

    vi.mocked(getLocalStorageData).mockReturnValueOnce(searchText);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = screen.getByRole('button', { name: 'Search' });

    await userEvent.click(button);

    expect(saveLocalStorageData).not.toHaveBeenCalled();
  });

  it('should not call api when search is empty string', async () => {
    vi.mocked(getLocalStorageData).mockReturnValueOnce('');

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = screen.getByRole('button', { name: 'Search' });

    await userEvent.click(button);

    expect(saveLocalStorageData).not.toHaveBeenCalled();
  });

  it('should be Reset error button', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const errorBtnBefore = screen.getByRole('button', { name: 'Error Button' });
    expect(errorBtnBefore).toBeInTheDocument();

    await userEvent.click(errorBtnBefore);

    const resetErrorBtn = screen.getByRole('button', { name: 'Reset error' });
    expect(resetErrorBtn).toBeInTheDocument();

    await userEvent.click(resetErrorBtn);

    const errorBtnAfter = screen.getByRole('button', { name: 'Error Button' });
    expect(errorBtnAfter).toBeInTheDocument();
  });

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
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByText('Page 404')).toBeInTheDocument();
  });
});
