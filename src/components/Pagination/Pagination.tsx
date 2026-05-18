import classes from './Pagination.module.css';

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
}

const Pagination = ({ onNext, onPrev }: PaginationProps) => {
  return (
    <div className={classes.app__pagination}>
      <button className={classes['app__pagination-btn-prev']} onClick={onPrev}>
        Prev
      </button>
      <button className={classes['app__pagination-btn-next']} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
