import { createSlice } from '@reduxjs/toolkit'

interface CountriesState {
  countries: string[]
}

const initialState: CountriesState = {
  countries: ['Germany', 'France', 'Spain', 'Poland'],
}

const countriesSlice = createSlice({
  name: 'countries',

  initialState,

  reducers: {},
})

export const countriesAction = countriesSlice.actions

export default countriesSlice.reducer
