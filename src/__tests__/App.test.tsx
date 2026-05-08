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

  it.todo('Loading state. Loading spinner should be on the screen');

  it.todo('Error state. Error message should be on the screen');

  it.todo('Empty results. Message should be on the screen');
});
