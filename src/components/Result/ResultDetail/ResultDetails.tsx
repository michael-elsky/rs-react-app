import { useParams } from 'react-router-dom';
import classes from './ResultDetails.module.css';
import useFetchFilmDetails from '../../../hooks/useFetchFilmDetails';

const ResultDetails = () => {
  const { itemId } = useParams();

  const { data } = useFetchFilmDetails(itemId);

  return (
    <section className={classes['app__result-detail']}>
      <h1>{data && data.title}</h1>
      <p>{data && data.opening_crawl}</p>
    </section>
  );
};

export default ResultDetails;
