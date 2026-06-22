'use client'

import classes from './not-found.module.css'

import Button from '@/components/Ui/Button/Button'
import { useRouter } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

const NotFound = () => {
  const router = useRouter()

  const t = useTranslations('NotFound')

  return (
    <div className={classes['app__404-wrapper']}>
      <h2 className={classes['app__404-title']}>{t('heading')}</h2>
      <Button onClick={() => router.back()}>{t('button')}</Button>
    </div>
  )
}

export default NotFound
