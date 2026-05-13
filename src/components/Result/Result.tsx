import classes from './Result.module.css';

import type { ResultProps } from './Result.types';
import renderContent from './renderContent';

const Result = ({ data, isLoading, errorMessage }: ResultProps) => {
  const renderedContentData = Array.isArray(data) ? data : [];

  const renderedContent = renderContent(
    classes,
    renderedContentData,
    isLoading,
    errorMessage,
  );

  return <section className={classes.app__result}>{renderedContent}</section>;
};

export default Result;
