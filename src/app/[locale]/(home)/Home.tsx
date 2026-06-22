'use client'

import { useSelector } from 'react-redux'
import { useSearchParams } from 'next/navigation'
import Search from '@/components/Search'
import Result from '@/components/Result'
import TestError from '@/components/TestError'
import usePagination from '@/hooks/Pagination/usePagination'
import Pagination from '@/components/Pagination/Pagination'
import { RootState } from '@/store'
import SelectedItems from '@/components/SelectedItems/SelectedItems'
import { useGetFilmsQuery } from '@/store/api'
import errorMessageType from '@/utils/errorMessageType'
import RefreshData from '@/components/RefreshData/RefreshData'
import { useRouter } from '@/i18n/routing'
import { HomeProps } from './Home.types';

const Home = ({ children, initialData, searchValue }: HomeProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const searchTerm = searchParams.get('search') || ''
  const {
    data: clientData,
    isLoading,
    error,
  } = useGetFilmsQuery(searchTerm, {
    skip: !!initialData && searchTerm === '',
  })

  const errorMessage = errorMessageType(error)

  const data = initialData || clientData
  
  const dataForPagination = Array.isArray(data) ? data : data?.results || []

  const { paginatedData, handleNext, handlePrev } = usePagination(dataForPagination)

  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  )

  const handleCloseDetails = () => {
    const currentPage = searchParams.get('page')

    router.push(`/?page=${currentPage}`)
  }

  return (
    <>
      <Search initialValue={searchValue} />

      <RefreshData />

      <Result
        data={paginatedData}
        isLoading={isLoading}
        errorMessage={errorMessage}
        onClose={handleCloseDetails}
      >
        {children}
      </Result>

      <Pagination onNext={handleNext} onPrev={handlePrev} />

      {selectedItems.length > 0 && <SelectedItems />}

      <TestError />
    </>
  )
}

export default Home
