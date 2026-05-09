import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchData } from '../api/fetch';
import { render, screen } from '@testing-library/react';
import App from '../App';

vi.mock('../api/fetch', () => ({
  fetchData: vi.fn(),
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
          description: 'About film',
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
});
