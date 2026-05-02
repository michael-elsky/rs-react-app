import { Component, type ErrorInfo } from 'react';
import type { ChildrenProp } from '../../types/types';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class ErrorBoundary extends Component<ChildrenProp> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDisplay errorMessage="Something went wrong. Please refresh the page." />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
