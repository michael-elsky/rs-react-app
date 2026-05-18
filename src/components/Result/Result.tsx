import classes from './Result.module.css';

import type { ResultProps } from './Result.types';
import ResultList from './ResultList/ResultList';
import RenderContent from './RenderContent';

const Result = ({
  data,
  isLoading,
  errorMessage,
  children,
  onClose,
}: ResultProps) => {
  const renderedContentData = Array.isArray(data) ? data : [];

  const renderedContent = RenderContent(
    <ResultList data={renderedContentData} onClose={onClose} />,
    isLoading,
    errorMessage,
    renderedContentData,
  );

  return (
    <section className={classes.app__result}>
      {renderedContent}
      {children}
    </section>
  );
};

export default Result;
