import classes from './Result.module.css';

import { Component } from 'react';
import type { ResultProps } from './Result.types';

class Result extends Component<ResultProps> {
  render() {
    const data = Array.isArray(this.props.data) ? this.props.data : [];

    return (
      <section className={classes.app__result}>
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
      </section>
    );
  }
}

export default Result;
