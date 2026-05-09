import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchData } from '../api/fetch';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import {
  getLocalStorageData,
  saveLocalStorageData,
} from '../utils/localStorageData';

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

    render(<App />);

    const title = await screen.findByText('Film');

    expect(title).toBeInTheDocument();
  });

  it('Loading state. Loading spinner should be on the screen', () => {
    vi.mocked(fetchData).mockImplementation(() => {
      return new Promise(() => {});
    });

    render(<App />);

    const loadingSpinner = screen.getByRole('status', { name: 'loading' });

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('Error state. Error message should be on the screen', async () => {
    const errorMessage = 'app error';

    vi.mocked(fetchData).mockRejectedValue(new Error(errorMessage));

    render(<App />);

    const p = await screen.findByText(errorMessage);

    expect(p).toBeInTheDocument();
  });

  it('Empty results. Message should be on the screen', async () => {
    const message = 'No results found';

    vi.mocked(fetchData).mockResolvedValueOnce({ results: [] });

    render(<App />);

    const p = await screen.findByText(message);

    expect(p).toBeInTheDocument();
  });

  it('Initial fetch. Fetch must called with valid url', () => {
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

    render(<App />);

    expect(fetchData).toHaveBeenCalledWith(url);
  });

  it('should save localStorage data', async () => {
    const searchText = 'A New ';
    const searchTextTrimmed = searchText.trim();

    render(<App />);

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

    render(<App />);

    const input = screen.getByRole('textbox');
    
    expect(input).toHaveValue(searchText);
    expect(fetchData).toHaveBeenCalledTimes(1);
    expect(fetchData).toHaveBeenCalledWith(
      expect.stringContaining('search=A New'),
    );
  });
});
