import { NavLink } from 'react-router-dom';
import type { DataProps } from '../Result.types';
import classes from './ResultList.module.css';

const ResultList = ({ data }: { data: DataProps[] }) => {
  return (
    <ul className={classes['app__result-list']}>
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
                to={`films/${filmId}`}
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
