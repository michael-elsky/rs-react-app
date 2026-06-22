'use client'

import { useRouter, usePathname } from '@/i18n/routing';
import type { PaginationData } from './usePagination.types'
import { useSearchParams } from 'next/navigation';

const usePagination = (data: PaginationData) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const dataChecked = Array.isArray(data) ? data : []

  const itemsPerPage = 2
  const totalPages = Math.ceil(dataChecked.length / itemsPerPage)
  const currentPage = Number(searchParams.get('page')) || 1
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedData =
    dataChecked.length > 0 ? dataChecked.slice(startIndex, endIndex) : []

  const handleNext = () => {
    if (currentPage < totalPages) {
      const params = new URLSearchParams(searchParams.toString())

      params.set('page', String(currentPage + 1))

      router.push(`${pathname}?${params.toString()}`)
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      const params = new URLSearchParams(searchParams.toString())

      params.set('page', String(currentPage - 1))

      router.push(`${pathname}?${params.toString()}`)
    }
  }

  return {
    paginatedData,
    handleNext,
    handlePrev,
  }
}

export default usePagination
