'use client'

import classes from './RefreshData.module.css'

import { useDispatch } from 'react-redux'

import { api } from '../../store/api'
import { useTranslations } from 'next-intl'

const RefreshData = () => {
  const dispatch = useDispatch()

  const t = useTranslations('RefreshData')

  const handleRefreshData = () => {
    dispatch(api.util.invalidateTags(['films']))
  }

  return (
    <button
      className={classes['app__refresh-data']}
      onClick={handleRefreshData}
    >
      {t('button')}
    </button>
  )
}

export default RefreshData
