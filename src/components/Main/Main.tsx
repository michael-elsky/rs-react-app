import classes from './Main.module.css'

import type { ChildrenProp } from '../../types/types'

const Main = ({ children }: ChildrenProp) => {
  return <main className={classes.app}>{children}</main>
}

export default Main
