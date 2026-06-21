'use client'

import classes from './SelectedItems.module.css'

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { selectedItemsActions } from '../../store/selected-items-slice'

const SelectedItems = () => {
  const dispatch = useDispatch()

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  )

  const { unSelectAll } = selectedItemsActions

  const handleUnSelectAll = () => {
    dispatch(unSelectAll())
  }

  const handleDownload = () => {
    const headers = 'Title,Description,URL'
    const csvItems = selectedItems.map((item) => {
      return `${item.title},${item.opening_crawl},${item.url}`
    })

    const csvContent = [headers, ...csvItems].join('\n')

    const blob = new Blob([csvContent], {
      type: 'text/csv',
    })

    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.href = url
    link.download = `${selectedItems?.length}_items.csv`

    link.click()

    setTimeout(() => URL.revokeObjectURL(url), 0)
  }

  return (
    <div className={classes['app__selected-items']}>
      <button onClick={handleUnSelectAll}>Unselect all</button>
      <span>Selected: {selectedItems?.length}</span>
      <button onClick={handleDownload}>Download</button>
    </div>
  )
}

export default SelectedItems
