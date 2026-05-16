import classes from './Result.module.css';

import type { ResultProps } from './Result.types';
import renderContent from './renderContent';

const Result = ({ data, isLoading, errorMessage, children }: ResultProps) => {
  const renderedContentData = Array.isArray(data) ? data : [];

  const renderedContent = renderContent(
    renderedContentData,
    isLoading,
    errorMessage,
  );

  return (
    <section className={classes.app__result}>
      {renderedContent}
      {children}
    </section>
  );
};

export default Result;
