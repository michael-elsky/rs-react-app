import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.py4e.com/api/',
  }),

  endpoints: (build) => ({
    getFilms: build.query({
      query: (searchValue) =>
        searchValue ? `films/?search=${searchValue}` : 'films/',
    }),

    getFilmDetails: build.query({
      query: (id) => `films/${id}`,
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = api
