'use client'

import classes from './ResultDetails.module.css'
import RenderContent from '../renderContent'
import { useGetFilmDetailsQuery } from '../../../store/api'
import errorMessageType from '../../../utils/errorMessageType'
import { DataProps } from '../Result.types'

const ResultDetails = ({
  filmId,
  initialData,
}: {
  filmId: string
  initialData?: DataProps[]
}) => {
  const {
    data: clientData,
    isLoading,
    isFetching,
    error,
  } = useGetFilmDetailsQuery(
    filmId,
    { skip: !!initialData }, // Пропускаем запрос, если данные уже есть
  )

  const data = initialData || clientData;

  const errorMessage = errorMessageType(error)
  const isFilmsLoading = isLoading || isFetching

  const element = (
    <>
      <h1>{data?.title}</h1>
      <p>{data?.opening_crawl}</p>
    </>
  )

  const renderContent = RenderContent(element, isFilmsLoading, errorMessage)

  return (
    <section
      className={`${classes['app__result-detail']} ${classes['app__result-detail--active']}`}
    >
      {renderContent}
    </section>
  )
}

export default ResultDetails
