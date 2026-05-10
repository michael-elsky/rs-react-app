import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../components/ErrorBoundary';
import TestError from '../components/TestError';
import userEvent from '@testing-library/user-event';

describe('ErrorBoundary', () => {
  it('', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const errorMessageOnTheScreen =
      'Something went wrong. Please refresh the page.';

    render(
      <ErrorBoundary>
        <TestError />
      </ErrorBoundary>,
    );

    const buttonErrorBefore = screen.getByRole('button', {
      name: 'Error Button',
    });

    await userEvent.click(buttonErrorBefore);

    const p = await screen.findByText(errorMessageOnTheScreen);

    expect(buttonErrorBefore).not.toBeInTheDocument();
    expect(p).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalled();

    const buttonResetError = await screen.findByRole('button', {
      name: 'Reset error',
    });

    await userEvent.click(buttonResetError);

    const buttonErrorAfter = await screen.findByRole('button', {
      name: 'Error Button',
    });

    expect(buttonErrorAfter).toBeInTheDocument();
  });
});
