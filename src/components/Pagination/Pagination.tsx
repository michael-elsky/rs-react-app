import { useSearchParams } from 'react-router-dom';
import classes from './Pagination.module.css';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
}

const Pagination = ({ onNext, onPrev }: PaginationProps) => {
  const [searchParams] = useSearchParams();

  const pageNumber = searchParams.get('page') || 1;

  return (
    <div className={classes.app__pagination}>
      <button className={classes['app__pagination-btn-prev']} onClick={onPrev}>
        Prev
      </button>
      <span>{pageNumber}</span>
      <button className={classes['app__pagination-btn-next']} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
