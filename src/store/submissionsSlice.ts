import { createSlice } from '@reduxjs/toolkit'
import type { SubmissionsState } from '../types/submission.types'

const initialState: SubmissionsState = {
  submissions: [],
  lastAddedId: null
}

const submissionsSlice = createSlice({
  name: 'submissions',

  initialState,

  reducers: {},
})

export const submissionsAction = submissionsSlice.actions

export default submissionsSlice.reducer
