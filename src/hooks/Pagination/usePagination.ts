import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { PaginationData } from './usePagination.types';

const usePagination = (data: PaginationData) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dataChecked = Array.isArray(data) ? data : [];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(dataChecked.length / itemsPerPage);
  const currentPage = Number(searchParams.get('page')) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData =
    dataChecked.length > 0 ? dataChecked.slice(startIndex, endIndex) : [];

  useEffect(() => {
    if (!searchParams.get('page')) {
      setSearchParams({ page: String(currentPage) });
    }
  }, [searchParams, currentPage, setSearchParams]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: String(currentPage + 1) });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setSearchParams({ page: String(currentPage - 1) });
    }
  };

  return {
    paginatedData,
    handleNext,
    handlePrev,
  };
};

export default usePagination;
