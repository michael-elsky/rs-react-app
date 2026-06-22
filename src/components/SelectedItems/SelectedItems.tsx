'use client'

import classes from './SelectedItems.module.css'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { selectedItemsActions } from '../../store/selected-items-slice'
import { useTranslations } from 'next-intl'

const SelectedItems = () => {
  const dispatch = useDispatch()

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  )

  const t = useTranslations('SelectedItems')

  const { unSelectAll } = selectedItemsActions

  const handleUnSelectAll = () => {
    dispatch(unSelectAll())
  }

  const handleDownload = async () => {
    if (selectedItems.length === 0) return

    const response = await fetch('/api/csv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: selectedItems }),
    })

    if (response.ok) {
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.download = `${selectedItems.length}_items.csv`
      link.click()

      window.URL.revokeObjectURL(url)
    } else {
      console.error('Failed to download CSV. Status:', response.status)
    }
  }

  return (
    <div className={classes['app__selected-items']}>
      <button onClick={handleUnSelectAll}>{t('button-unselect')}</button>
      <span>Selected: {selectedItems?.length}</span>
      <button onClick={handleDownload}>{t('button-download')}</button>
    </div>
  )
}

export default SelectedItems
