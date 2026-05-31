import classes from './RefreshData.module.css'

import { useDispatch } from 'react-redux'

import { api } from '../../store/api'

const RefreshData = () => {
  const dispatch = useDispatch()

  const handleRefreshData = () => {
    dispatch(api.util.invalidateTags(['films']))
  }

  return (
    <button
      className={classes['app__refresh-data']}
      onClick={handleRefreshData}
    >
      Refresh data
    </button>
  )
}

export default RefreshData
