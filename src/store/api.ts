import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',

  tagTypes: ['films'],

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.py4e.com/api/',
  }),

  endpoints: (build) => ({
    getFilms: build.query({
      query: (searchValue) =>
        searchValue ? `films/?search=${searchValue}` : 'films/',
      
      providesTags: ['films'],
    }),

    getFilmDetails: build.query({
      query: (id) => `films/${id}`,
      
      providesTags: ['films'],
    }),
  }),
})

export const { useGetFilmsQuery, useGetFilmDetailsQuery } = api
