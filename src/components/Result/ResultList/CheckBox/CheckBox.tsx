import classes from './CheckBox.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { selectedItemsActions } from '../../../../store/selected-items-slice'
import type { DataProps } from '../../Result.types'
import type { CheckBoxProps } from './CheckBox.types'
import type { RootState } from '../../../../store'

const CheckBox = ({ item }: CheckBoxProps) => {
  const dispatch = useDispatch()

  const { toggleItem } = selectedItemsActions

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  )

  const handleSelectItem = (item: DataProps) => {
    dispatch(toggleItem(item))
  }

  const isChecked = selectedItems.some(
    (selectedItem) => selectedItem.url === item.url,
  )

  return (
    <div className={classes['app__select-form']}>
      <label
        className={classes['app__select-form-label']}
        htmlFor={`item-${item.url}`}
      >
        Select Item
      </label>
      <input
        type="checkbox"
        id={`item-${item.url}`}
        checked={isChecked}
        onChange={() => handleSelectItem(item)}
      />
    </div>
  )
}

export default CheckBox
