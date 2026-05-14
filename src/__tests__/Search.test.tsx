import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../components/Search';
import { useState } from 'react';

describe('Search', () => {
  it('renders search input and submit button', () => {
    const handleSubmit = vi.fn();

    render(
      <Search
        handleSubmit={handleSubmit}
        searchInputValue={''}
        handleChange={vi.fn()}
      />,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Search' });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls submit handler when user submits the form', async () => {
    const handleSubmit = vi.fn();

    const Wrapper = () => {
      const [value, setValue] = useState('');

      return (
        <Search
          searchInputValue={value}
          handleSubmit={handleSubmit}
          handleChange={(e) => setValue(e.target.value)}
        />
      );
    };

    render(<Wrapper />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Search' });

    const userInputText = 'The Em ';

    await userEvent.type(input, userInputText);
    expect(input).toHaveValue(userInputText);

    await userEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
