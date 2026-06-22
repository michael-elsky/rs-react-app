'use client'

import classes from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={classes.app__spinner} role="status" aria-label="loading">
      Loading...
    </div>
  )
}

export default LoadingSpinner
