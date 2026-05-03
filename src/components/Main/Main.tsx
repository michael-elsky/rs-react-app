import classes from './Main.module.css';

import { Component } from 'react';

import type { ChildrenProp } from '../../types/types';

class Main extends Component<ChildrenProp> {
  render() {
    return <main className={classes.app}>{this.props.children}</main>;
  }
}

export default Main;
