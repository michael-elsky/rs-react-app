'use client'

import { useTranslations } from 'next-intl'
import classes from './Pagination.module.css'

import { useSearchParams } from 'next/navigation'

interface PaginationProps {
  onNext: () => void
  onPrev: () => void
}

const Pagination = ({ onNext, onPrev }: PaginationProps) => {
  const searchParams = useSearchParams()

  const t = useTranslations('Pagination')

  const pageNumber = searchParams.get('page') || 1

  return (
    <div className={classes.app__pagination}>
      <button className={classes['app__pagination-btn-prev']} onClick={onPrev}>
        {t('button-prev')}
      </button>
      <span>{pageNumber}</span>
      <button className={classes['app__pagination-btn-next']} onClick={onNext}>
        {t('button-next')}
      </button>
    </div>
  )
}

export default Pagination
