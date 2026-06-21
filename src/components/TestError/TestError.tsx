'use client'

import classes from './TestError.module.css'

import { useState } from 'react'

import Button from '../Ui/Button/Button'
import { useTranslations } from 'next-intl';

const TestError = () => {
  const [isError, setIsError] = useState(false)

  const t = useTranslations('TestError')

  const handleClick = () => {
    setIsError(true)
  }

  if (isError) {
    throw new Error('Test error')
  }

  return (
    <div className={classes['app__test-error']}>
      <Button className={classes['app__error-btn']} onClick={handleClick}>
        {t('button')}
      </Button>
    </div>
  )
}

export default TestError
