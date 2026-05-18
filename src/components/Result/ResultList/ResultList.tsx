import { NavLink, useMatch, useSearchParams } from 'react-router-dom';
import classes from './ResultList.module.css';
import type { ResultListProps } from './ResultList.types';

const ResultList = ({ data, onClose }: ResultListProps) => {
  const isDetailsPage = useMatch('/films/:itemId');
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get('page') || 1;

  let listClassName = classes['app__result-list'];

  if (isDetailsPage) {
    listClassName = `${classes['app__result-list']} ${classes['app__result-list--shrink']}`;
  }

  return (
    <ul
      className={listClassName}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {data.map((item) => {
        const filmId = item.url?.split('/').slice(-2, -1)[0];

        return (
          <li className={classes['app__result-item']} key={item.title}>
            <section className={classes['app__result-section']}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['app__result-link']} ${classes['app__result-link--active']}`
                    : classes['app__result-link']
                }
                to={`/films/${filmId}?page=${currentPage}`}
              >
                <h1 className={classes['app__result-title']}>{item.title}</h1>
              </NavLink>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default ResultList;
