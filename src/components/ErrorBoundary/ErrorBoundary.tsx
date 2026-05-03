import { Component, type ErrorInfo } from 'react';
import type { ChildrenProp } from '../../types/types';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

interface ErrorBoundaryState {
  hasError: boolean;
  resetKey: number;
}

class ErrorBoundary extends Component<ChildrenProp, ErrorBoundaryState> {
  state = {
    hasError: false,
    resetKey: 0,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  resetError = () => {
    this.setState((prevState) => ({
      hasError: false,
      resetKey: prevState.resetKey + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorDisplay
          errorMessage="Something went wrong. Please refresh the page."
          hasError={this.state.hasError}
          onReset={this.resetError}
        />
      );
    }

    return <div key={this.state.resetKey}>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
