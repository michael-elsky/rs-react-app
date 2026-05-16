import { NavLink } from 'react-router-dom';
import type { DataProps } from '../Result.types';
import classes from './ResultList.module.css';

const ResultList = ({ data }: { data: DataProps[] }) => {
  return (
    <ul className={classes['app__result-list']}>
      {data.map((item) => {
        const description = item.opening_crawl;

        return (
          <li className={classes['app__result-item']} key={item.title}>
            <section className={classes['app__result-section']}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${classes['app__result-link']} ${classes['app__result-link--active']}`
                    : classes['app__result-link']
                }
                to={`films/${item.episode_id}`}
              >
                <h1 className={classes['app__result-title']}>{item.title}</h1>
                <p className={classes['app__result-description']}>
                  {description}
                </p>
              </NavLink>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default ResultList;
