import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import NoResult from '../NoResult/NoResult';
import type { DataProps } from './Result.types';

const renderContent = (
  classes: { [key: string]: string },
  data: DataProps[],
  isLoading: boolean,
  errorMessage: string,
) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (errorMessage) {
    return <ErrorDisplay errorMessage={errorMessage} />;
  }

  if (!data.length) {
    return <NoResult />;
  }

  return (
    <ul className={classes['app__result-list']}>
      {data.map((item) => {
        const description = item.opening_crawl;

        return (
          <li className={classes['app__result-item']} key={item.title}>
            <section className={classes['app__result-section']}>
              <h1 className={classes['app__result-title']}>{item.title}</h1>
              <p className={classes['app__result-description']}>
                {description}
              </p>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default renderContent;
