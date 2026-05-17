import type React from 'react';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import type { DataProps } from './Result.types';

const RenderContent = (
  component?: React.ReactNode,
  isLoading?: boolean,
  errorMessage?: string,
  data?: DataProps[] | DataProps | null,
) => {
  console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }

  if (Array.isArray(data) && !data.length) {
    return <ErrorDisplay errorMessage="No results found" />;
  }

  return component;
};

export default RenderContent;
