import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../components/ErrorBoundary';
import { Component, type ReactNode } from 'react';

class ErrorComponent extends Component {
  render(): ReactNode {
    throw new Error('Test error');
  }
}

describe('ErrorBoundary', () => {
  it('', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const errorMessageOnTheScreen =
      'Something went wrong. Please refresh the page.';

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    const p = screen.getByText(errorMessageOnTheScreen);
    const button = screen.getByRole('button', { name: 'Reset error' });

    expect(p).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalled();
  });
});
