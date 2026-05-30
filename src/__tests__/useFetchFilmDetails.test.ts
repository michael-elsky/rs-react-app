import { describe, expect, it, vi } from 'vitest'
import { fetchData } from '../api/fetch'
import useFetchFilmDetails from '../hooks/useFetchFilmDetails'
import { renderHook, waitFor } from '@testing-library/react'

vi.mock('../api/fetch.ts', () => ({
  fetchData: vi.fn(),
}))

describe('useFetchFilmDetails.ts', () => {
  it('should fetch film details successfully', async () => {
    const filmData = {
      title: 'film title',
      opening_crawl: 'film description',
    }

    vi.mocked(fetchData).mockResolvedValueOnce(filmData)

    const { result } = renderHook(() => {
      return useFetchFilmDetails('1')
    })

    await waitFor(() => {
      expect(result.current.data).toEqual(filmData)
    })
  })

  it('should handle error', async () => {
    vi.mocked(fetchData).mockRejectedValue(new Error('Fail'))

    const { result } = renderHook(() => useFetchFilmDetails('1'))

    await waitFor(() => {
      expect(result.current.errorMessage).toBe('Fail')
    })
  })
})
