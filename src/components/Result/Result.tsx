import classes from './Result.module.css';

import { Component } from 'react';
import type { ResultProps } from './Result.types';
import renderContent from './renderContent';

class Result extends Component<ResultProps> {
  render() {
    const data = Array.isArray(this.props.data) ? this.props.data : [];

    const renderedContent = renderContent(
      classes,
      data,
      this.props.isLoading,
      this.props.errorMessage,
    );

    return <section className={classes.app__result}>{renderedContent}</section>;
  }
}

export default Result;
