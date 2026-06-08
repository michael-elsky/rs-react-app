import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Submission, SubmissionsState } from '../types/submission.types'

const initialState: SubmissionsState = {
  submissions: [],
  lastAddedId: null,
}

const submissionsSlice = createSlice({
  name: 'submissions',

  initialState,

  reducers: {
    addSubmission: (state, action: PayloadAction<Submission>) => {
      state.submissions.push(action.payload)
    },
  },
})

export const submissionsAction = submissionsSlice.actions

export default submissionsSlice.reducer
