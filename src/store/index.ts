import { configureStore } from '@reduxjs/toolkit'

import submissionsReducer from './submissionsSlice'
import countriesReducer from './countriesSlice'

const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
    countries: countriesReducer,
  },
})

export default store
