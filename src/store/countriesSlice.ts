import { createSlice } from '@reduxjs/toolkit'

const initialState: string[] = ['Germany', 'France', 'Spain', 'Poland']

const countriesSlice = createSlice({
  name: 'countries',

  initialState,

  reducers: {},
})

export const countriesAction = countriesSlice.actions

export default countriesSlice.reducer
