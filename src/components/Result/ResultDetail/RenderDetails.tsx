import { useParams } from 'react-router-dom';
import classes from './ResultDetails.module.css';
import useFetchFilmDetails from '../../../hooks/useFetchFilmDetails';
import RenderContent from '../RenderContent';

const ResultDetails = () => {
  const { itemId } = useParams();

  const { data, isLoading, errorMessage } = useFetchFilmDetails(itemId || '');

  const element = (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.opening_crawl}</p>
    </>
  );

  const renderContent = RenderContent(element, isLoading, errorMessage);

  return (
    <section
      className={`${classes['app__result-detail']} ${classes['app__result-detail--active']}`}
    >
      {renderContent}
    </section>
  );
};

export default ResultDetails;
